import comp from "D:/blog/vuepress/docs/.vuepress/.temp/pages/blog/Web视频处理方案.html.vue"
const data = JSON.parse("{\"path\":\"/blog/Web%E8%A7%86%E9%A2%91%E5%A4%84%E7%90%86%E6%96%B9%E6%A1%88.html\",\"title\":\"Web 视频处理方案\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"实现流程\",\"slug\":\"实现流程\",\"link\":\"#实现流程\",\"children\":[]},{\"level\":2,\"title\":\"实现原理\",\"slug\":\"实现原理\",\"link\":\"#实现原理\",\"children\":[{\"level\":3,\"title\":\"计算 MD5 并校验\",\"slug\":\"计算-md5-并校验\",\"link\":\"#计算-md5-并校验\",\"children\":[]},{\"level\":3,\"title\":\"分片上传\",\"slug\":\"分片上传\",\"link\":\"#分片上传\",\"children\":[]},{\"level\":3,\"title\":\"合并分片和视频转码请求\",\"slug\":\"合并分片和视频转码请求\",\"link\":\"#合并分片和视频转码请求\",\"children\":[]},{\"level\":3,\"title\":\"视频播放请求\",\"slug\":\"视频播放请求\",\"link\":\"#视频播放请求\",\"children\":[]},{\"level\":3,\"title\":\"后端对分片进行处理\",\"slug\":\"后端对分片进行处理\",\"link\":\"#后端对分片进行处理\",\"children\":[]},{\"level\":3,\"title\":\"后端对分片进行合并\",\"slug\":\"后端对分片进行合并\",\"link\":\"#后端对分片进行合并\",\"children\":[]},{\"level\":3,\"title\":\"视频转码\",\"slug\":\"视频转码\",\"link\":\"#视频转码\",\"children\":[]},{\"level\":3,\"title\":\"视频播放\",\"slug\":\"视频播放\",\"link\":\"#视频播放\",\"children\":[]}]},{\"level\":2,\"title\":\"代码仓库\",\"slug\":\"代码仓库\",\"link\":\"#代码仓库\",\"children\":[]},{\"level\":2,\"title\":\"参考资料\",\"slug\":\"参考资料\",\"link\":\"#参考资料\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"blog/Web视频处理方案.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
