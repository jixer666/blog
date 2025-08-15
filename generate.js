const fs = require('fs').promises;
const path = require('path');
const { existsSync } = require('fs');

/**
 * 扫描指定目录下的所有HTML文件，生成层次结构JSON
 * @param {string} dir - 要扫描的目录路径
 * @param {string} rootDir - 根目录路径，用于计算相对路径
 * @returns {Promise<object>} - 包含文件层次结构的对象
 */
async function scanHtmlFiles(dir, rootDir) {
    // 初始化根目录
    if (!rootDir) {
        rootDir = dir;
    }

    // 检查目录是否存在
    if (!existsSync(dir)) {
        throw new Error(`目录不存在: ${dir}`);
    }

    // 获取目录中的所有条目
    const entries = await fs.readdir(dir, { withFileTypes: true });

    const result = {
        // 将目录名转为小写
        name: processDirectoryName(path.basename(dir)),
        type: 'directory',
        articles: []
    };

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            // 递归处理子目录
            const subDir = await scanHtmlFiles(fullPath, rootDir);
            result.articles.push(subDir);
        } else if (entry.isFile() && path.extname(entry.name).toLowerCase() === '.html') {
            // 处理HTML文件
            const fileStat = await fs.stat(fullPath);
            // 计算相对于根目录的路径
            const relativePath = path.relative(rootDir, fullPath);
            const githubPreviewPath = `https://htmlpreview.github.io/?https://github.com/jixer666/blog/blob/master/public/${relativePath.replace(/\\/g, '/')}`;

            result.articles.push({
                title: entry.name,
                path: githubPreviewPath,
                size: formatFileSize(fileStat.size),
                createtime: formatDateTime(fileStat.birthtime),
                type: 'file',
            });
        }
    }

    return result;
}

/**
 * 处理目录名称，转为小写以匹配最终版本
 * @param {string} dirName - 原始目录名称
 */
function processDirectoryName(dirName) {
    if (dirName === 'ai') {
        return 'AI'
    } else if (dirName === 'algorithm') {
        return '算法'
    } else if (dirName === 'java') {
        return 'Java'
    } else if (dirName === 'linux') {
        return 'Linux'
    } else if (dirName === 'mq') {
        return '消息队列'
    } else if (dirName === 'project') {
        return '实战项目'
    } else if (dirName === 'school') {
        return '学校课程'
    } else if (dirName === 'python') {
        return 'Python'
    } else if (dirName === 'title-tattle') {
        return '杂谈'
    } else {
        return '未知分类'
    }
}

function formatDateTime(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    // 只保留年月日，与最终版本一致
    return `${year}-${month}-${day}`;
}

/**
 * 执行扫描并将结果保存为JSON文件
 * @param {string} targetDir - 目标目录
 * @param {string} outputFile - 输出JSON文件路径
 */
async function runScanner(targetDir, outputFile) {
    try {
        console.log(`开始扫描目录: ${targetDir}`);
        // 传递rootDir参数，用于正确计算相对路径
        const fileStructure = await scanHtmlFiles(targetDir, targetDir);

        // 保存为JSON文件
        await fs.writeFile(
            outputFile,
            JSON.stringify(fileStructure, null, 2),
            'utf8'
        );

        console.log(`扫描完成，结果已保存到: ${outputFile}`);
        console.log(`共发现 ${countHtmlFiles(fileStructure)} 个HTML文件`);
    } catch (error) {
        console.error('扫描过程出错:', error.message);
    }
}

/**
 * 统计HTML文件总数
 * @param {object} structure - 文件结构对象
 * @returns {number} - HTML文件数量
 */
function countHtmlFiles(structure) {
    let count = 0;
    if (structure.type === 'file' && structure.title.endsWith('.html')) {
        count = 1;
    } else if (structure.type === 'directory' && structure.articles) {
        for (const child of structure.articles) {
            count += countHtmlFiles(child);
        }
    }
    return count;
}

function formatFileSize(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    // 计算并格式化大小
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// 示例用法
const targetDirectory = 'D:/我的笔记/blog/public'; // 要扫描的目录
const outputJsonPath = 'D:/我的笔记/blog/html_structure.json'; // 输出JSON文件路径

// 执行扫描
runScanner(targetDirectory, outputJsonPath);
