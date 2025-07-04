# Web 视频处理方案

<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2025-02-03</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>
在各种社交网站中，几乎都有视频这个模块，出于对于视频播放的好奇，便动手实现了一下 Web 视频的播放以及相关的优化

本文介绍关于 Web 视频的处理方案，包括：分片上传、视频播放、视频转码

## 实现流程

分片上传流程：

- 前端使用 js 对视频进行分片，并且计算好视频的 MD5 值，对分片进行上传
- 后端对分片文件进行校验和存放
- 等所有分片上传完成，调用合并请求，后端将文件进行合并和对合并后的文件校验
- 合并请求完成后，前端调用转码请求，后端集成 ffmpeg 对视频进行转码

## 实现原理

### 计算 MD5 并校验

前端使用的是 vue，先使用 js-md5 计算出视频的 MD5 值

```js
import md5 from "js-md5";

async calculateFileMd5(file) {
    this.uploadStatus = "计算MD5中..";
    const reader = new FileReader();
    reader.onload = async () => {
        const fileBuffer = reader.result;
        this.fileMd5 = md5(fileBuffer); // 计算 MD5
        await this.checkFileIsUpload(file) // 检查文件是否已经上传
    };
    reader.readAsArrayBuffer(file); // 以 ArrayBuffer 格式读取文件
```

计算完成，校验文件是否已经上传，已经上传了就直接显示秒传，否则就对文件切片再上传

```js
async checkFileIsUpload(file) {
    this.uploadStatus = "检查文件是否已经上传";
    try {
        const res = await reqUploadCheck({
            fileMd5: this.fileMd5
        });
        if (res && res.data) {
            this.uploadStatus = "秒传，文件上传完成";
            this.$message.success("秒传，上传成功");
        } else {
            await this.startUpload(file);
        }
    } catch (error) {
        this.$message.error("检查上传状态失败");
        console.error(error);
```

### 分片上传

使用 Promise 队列对分片进行并发上传，队列的最大数量笔者设置的是 3 个

```js
async uploadChunks(file) {
    const promises = [];
    const chunkCount = this.totalChunks;
    for (let i = 0; i < chunkCount; i++) {
        // 控制并发数量
        if (promises.length >= this.concurrentUploads) {
            // 等待某个分片上传完成
            await Promise.race(promises);
        }
        // 上传当前分片
        const uploadPromise = this.uploadChunk(file, i).finally(() => {
            // 每个分片上传完成后，移除该 promise
            promises.splice(promises.findIndex(p => p === uploadPromise), 1);
        });
        promises.push(uploadPromise);
    }
    // 等待所有的分片都上传完成
    await Promise.all(promises);
    // 合并
    this.mergeChunk(file);
}
```

### 合并分片和视频转码请求

调用后端合并请求，对分片文件进行合并

```js
mergeChunk(file) {
    this.uploadStatus = "文件分片合并中";
    reqChunkMerge({
        filename: file.name,
        fileSize: file.size,
        totalChunk: this.totalChunks,
        fileMd5: this.fileMd5
    }).then(res => {
        this.uploadStatus = "文件合并完成";
        this.convertFile(res.data.id)
    }).catch(error => {
        this.$message.error("合并请求失败！");
    })
},

convertFile(id) {
    this.uploadStatus = "文件转码中";
    reqConvertVideo(id).then(res => {
        this.uploadStatus = "文件上传完成";
        this.$message.success("文件上传完成");
    }).catch(error => {
        this.$message.error("转码请求失败！");
    })
},
```

### 视频播放请求

视频播放使用了 HLS 组件，安装命令：npm install hls.js

调用流程：

- 先调用获取视频的 .m3u8 文件
- 根据返回的 m3u8 索引文件内容调用 ts 文件

### 后端对分片进行处理

拿到传来的分片文件后，先校验该分片是否已经上传，若上传了就直接返回，没上传就上传到 OSS，此处笔者使用了策略模式来实现本地存储和 minio 存储两种方式，接着对分片进行记录

```java
public void uploadChunk(FileUploadReq req) {
    String key = MyConstant.CHUNK_FILE + req.getFileMd5();
    Double score = stringRedisTemplate.opsForZSet().score(key, req.getChunk().toString());
    if (Objects.nonNull(score)) { // 检查分片是否存在
        return;
    }
    ossService.uploadChunk(req); // 上传到 OSS
    recordUploadChunk(key, req.getChunk()); // 记录分片
}
```

### 后端对分片进行合并

合并之前先判断文件是否已经存在，已经存在就无需合并，但需重新保存一份新的文件数据在数据库中（文件元数据相同，用户名、创建时间等不同）

对文件合并完成后，将文件的元数据保存在数据库中

```java
public File mergeChunk(FileUploadReq req) {
    checkMerge(req);
    File file = videoMapper.selectOne(new LambdaQueryWrapper<File>()
            .eq(File::getFileMd5, req.getFileMd5()));
    if (Objects.nonNull(file)) { // 检查是否已经上传
        file = new File();
        saveFileToDb(file, req);
        return file;
    }
    ossService.mergeChunk(req);
    file = new File();
    saveFileToDb(file, req);
    return file;
}
```

### 视频转码

视频转码流程：

1、检查视频文件编码并转转码，hevc 的音频格式需要转为该格式

2、生成 index.ts 文件

3、切割 index.ts 并生成 m3u8 索引

4、删除 index.ts 文件

转码中 ffmpeg 重要的几个命令：

- **获取播放时长**：E:/ffmpeg/ffprobe.exe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 沉浸式体验爽局，快500分一回合的机械猎手.mp4
- **获取视频编码**：E:/ffmpeg/ffprobe.exe -v error -select_streams v:0 -show_entries stream=codec_name 沉浸式体验爽局，快500分一回合的机械猎手.mp4
- **视频转码为 h264**：E:/ffmpeg/ffprobe.exe -i 沉浸式 体验爽局，快500分一回合的机械猎手.mp4 -c:v libx264 -crf 20 result_沉浸式 体验爽局，快500分一回合的机械猎手.mp4 -y
- **生成 index.ts 文件**：E:/ffmpeg/ffmpeg.exe -y -i 沉浸式 体验爽局，快500分一回合的机械猎手.mp4 -vcodec copy -acodec copy -vbsf h264_mp4toannexb index.ts
- **将 index.ts 文件切片，并生成 m3u8 索引**：E:/ffmpeg/ffmpeg.exe -i index.ts -c copy -map 0 -f segment -segment_list index.m3u8 -segment_time 10 %4d.ts

```java
public void listenTransCoding(VideoTransCodingDto dto) {
    File file = videoService.getById(dto.getFileId());
    Path tempFile = minioUtil.createTempFile(System.getPr
    // 检查视频文件编码并转转码
    checkVideoCodecAndConvert(tempFile, file);
    // 生成 index.ts 文件
    buildIndexTs(tempFile, file);
    // 切割 index.ts 并生成索引
    cutIndexTs(tempFile);
    // 删除 index.ts 文件
    FileUtil.removeFile(tempFile + "/index.ts");
}
```

### 视频播放

根据前端传来的文件 ID，从数据中找到文件，根据文件的 MD5 找出文件的位置，获取到文件的文件流

若请求头中带 Range 范围参数，文件流需要跳过前部分，只返回 Range 参数中所需要的部分

贴出部分代码

```java
Pattern pattern = Pattern.compile("bytes=(\\d+)-(\\d*)");
Matcher matcher = pattern.matcher(rangeHeader);
if (matcher.find()) {
    long start = Long.parseLong(matcher.group(1)); // 开始部分
    long end = matcher.group(2).isEmpty() ? fileSize - 1 : Long.parseLong(matcher.group(2));
    // 返回部分文件
    response.setContentType("video/mp4");
    response.setHeader("Content-Disposition", "inline; filename=" + file.getFilename());
    response.setHeader("Content-Range", "bytes " + start + "-" + end + "/" + fileSize);
    response.setHeader("Accept-Ranges", "bytes");
    response.setStatus(HttpServletResponse.SC_PARTIAL_CONTENT);
    try (InputStream fis = fileStream) {
        fis.skip(start); // 跳过 start 字节
        byte[] buffer = new byte[8192];
        int bytesRead;
        long bytesRemaining = end - start + 1;
        while ((bytesRead = fis.read(buffer)) != -1 && bytesRemaining > 0) {
            long bytesToWrite = Math.min(bytesRemaining, bytesRead);
            response.getOutputStream().write(buffer, 0, (int) bytesToWrite);
            bytesRemaining -= bytesToWrite;
        }
        response.getOutputStream().flush();
    } catch (IOException e) {
        throw new RuntimeException(e);
    }
```

## 代码仓库

- 前端：[https://gitee.com/lijunxi666/video-solution-web](https://gitee.com/lijunxi666/video-solution-web)
- 后端：[https://gitee.com/lijunxi666/video-solution](https://gitee.com/lijunxi666/video-solution)

## 参考资料

- [https://www.bilibili.com/video/BV1aW2NYREFh?spm_id_from=333.788.videopod.episodes&vd_source=20b2e12c281b549f17437a2e6b6cd3bd&p=22](https://www.bilibili.com/video/BV1aW2NYREFh?spm_id_from=333.788.videopod.episodes&vd_source=20b2e12c281b549f17437a2e6b6cd3bd&p=22)
- [chatgpt.com](chatgpt.com)