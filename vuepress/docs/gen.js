// generate-config.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ==================== 配置区域 ====================
// 文档根目录
const srcPath = "D:\\blog\\vuepress\\docs";

// VuePress 配置文件路径
const configPath = "D:\\blog\\vuepress\\docs\\.vuepress\\config.js";

// 需要排除的文件夹列表
const excludeFolders = [".vuepress", "node_modules", ".git"];

// 网站基础配置（写死的内容）
const siteConfig = {
  lang: "en-US",
  title: "Jixer的小屋",
  description: "Never Give Up",
  logo: "",
  head: [
    ["meta", { name: "referrer", content: "no-referrer" }],
    ["meta", { name: "referrer", content: "never" }],
    [
      "link",
      { rel: "icon", href: "http://43.143.14.69:9000/common/logo/favicon.ico" },
    ],
  ],
};

// ==================== 工具函数 ====================
// 判断字符串是否包含中文
function containsChinese(str) {
  return /[\u4e00-\u9fa5]/.test(str);
}

// 首字母大写
function capitalizeFirstLetter(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 获取文件夹的显示名称
function getDisplayName(folderName) {
  // 根据是否包含中文来决定
  if (containsChinese(folderName)) {
    return folderName;
  } else {
    return capitalizeFirstLetter(folderName);
  }
}

// ==================== 自动生成导航栏顺序 ====================
function generateNavbarOrder() {
  console.log("📂 开始扫描目录生成导航栏顺序:", srcPath);
  console.log("=".repeat(60));

  // 检查目录是否存在
  if (!fs.existsSync(srcPath)) {
    console.error(`❌ 目录不存在: ${srcPath}`);
    return [];
  }

  try {
    // 读取目录
    const items = fs.readdirSync(srcPath);

    // 过滤出文件夹（排除指定的文件夹）
    const folders = items
      .filter((item) => {
        // 排除在 excludeFolders 列表中的文件夹
        if (excludeFolders.includes(item)) {
          return false;
        }

        const itemPath = path.join(srcPath, item);
        try {
          return fs.statSync(itemPath).isDirectory();
        } catch (error) {
          return false;
        }
      })
      .sort(); // 按字母顺序排序

    // 生成导航栏顺序
    const navbarOrder = [];

    folders.forEach((folder) => {
      const displayName = getDisplayName(folder);
      const link = `/${folder}/`;

      navbarOrder.push({
        folder: folder,
        text: displayName,
        link: link,
      });

      console.log(`📁 发现文件夹: ${folder} -> 显示为: "${displayName}"`);
    });

    console.log("=".repeat(60));
    console.log(`✅ 导航栏顺序生成成功！共发现 ${navbarOrder.length} 个文件夹`);

    return navbarOrder;
  } catch (error) {
    console.error("❌ 读取目录失败:", error.message);
    return [];
  }
}

// 生成导航栏顺序
const navbarOrder = generateNavbarOrder();

// ==================== 生成导航栏 ====================
function generateNavbar() {
  const navbar = [
    {
      text: "主页",
      link: "/",
    },
  ];

  // 按顺序添加导航项
  navbarOrder.forEach((item) => {
    navbar.push({
      text: item.text,
      link: item.link,
    });
  });

  return navbar;
}

// ==================== 生成侧边栏 ====================
function generateSidebar() {
  console.log("\n📂 开始扫描目录生成侧边栏:", srcPath);
  console.log("=".repeat(60));

  // 检查目录是否存在
  if (!fs.existsSync(srcPath)) {
    console.error(`❌ 目录不存在: ${srcPath}`);
    return {};
  }

  // 创建导航栏映射，方便查找
  const navbarMap = {};
  navbarOrder.forEach((item) => {
    navbarMap[item.folder] = item;
  });

  // 递归读取目录，生成嵌套结构的侧边栏配置
  function generateSidebarConfig(dirPath = srcPath, basePath = "") {
    const sidebarItems = [];

    try {
      // 读取目录
      const items = fs.readdirSync(dirPath);

      // 过滤出文件夹（排除指定的文件夹）
      const folders = items
        .filter((item) => {
          if (excludeFolders.includes(item)) {
            return false;
          }

          const itemPath = path.join(dirPath, item);
          try {
            return fs.statSync(itemPath).isDirectory();
          } catch (error) {
            return false;
          }
        })
        .sort();

      // 处理每个文件夹
      folders.forEach((folder) => {
        const folderPath = path.join(dirPath, folder);
        const relativePath = path.join(basePath, folder);
        const urlPath = `/${relativePath.replace(/\\/g, "/")}/`;

        // 获取对应的导航栏配置项
        const navbarItem = navbarMap[folder];

        // 如果不是一级目录或者不在导航栏中，跳过
        if (basePath === "" && !navbarItem) {
          return;
        }

        try {
          // 读取文件夹中的文件
          const files = fs.readdirSync(folderPath);

          // 过滤出 .md 文件
          const markdownFiles = files
            .filter((file) => file.endsWith(".md"))
            .sort();

          // 分离出 index.md/README.md 和其他文件
          const indexFile = markdownFiles.find((file) =>
            ["index.md", "README.md"].includes(file),
          );
          const otherFiles = markdownFiles
            .filter((file) => !["index.md", "README.md"].includes(file))
            .map((file) => file.replace(/\.md$/, ""));

          // 获取显示名称
          const displayName = getDisplayName(folder);

          // 创建当前文件夹的侧边栏项
          const sidebarItem = {
            text: displayName,
            link: indexFile ? urlPath : undefined,
            collapsible: true,
            children: [],
          };

          // 添加其他文件作为子项
          otherFiles.forEach((file) => {
            sidebarItem.children.push({
              text: file,
              link: `${urlPath}${file}`,
            });
          });

          // 递归处理子文件夹
          const subItems = generateSidebarConfig(folderPath, relativePath);

          // 将子文件夹的侧边栏项添加到当前项的children中
          if (subItems.length > 0) {
            sidebarItem.children.push(...subItems);
          }

          // 只有当有children或有link时才添加
          if (sidebarItem.children.length > 0 || sidebarItem.link) {
            sidebarItems.push(sidebarItem);
            console.log(
              `📁 处理文件夹: ${folder} -> 显示为: "${displayName}" (${sidebarItem.children.length} 个子项)`,
            );
          }
        } catch (error) {
          console.error(`❌ 处理文件夹 ${folder} 失败:`, error.message);
        }
      });

      return sidebarItems;
    } catch (error) {
      console.error("❌ 读取目录失败:", error.message);
      return [];
    }
  }

  // 生成侧边栏配置
  const sidebarItems = generateSidebarConfig(srcPath, "");

  // 构建最终的配置对象（按导航栏顺序）
  const finalConfig = {};

  navbarOrder.forEach((item) => {
    const folderItem = sidebarItems.find((si) => si.text === item.text);

    if (folderItem) {
      finalConfig[item.link] = [folderItem];
    }
  });

  console.log("=".repeat(60));
  console.log("✅ 侧边栏配置生成成功！");

  return finalConfig;
}

// ==================== 格式化侧边栏配置（确保键名有引号）====================
function formatSidebar(sidebar, indent = 2) {
  const spaces = " ".repeat(indent);
  const result = [];

  result.push("{");

  const entries = Object.entries(sidebar);
  entries.forEach(([key, value], index) => {
    // 键名必须用引号包裹（因为包含 / 字符）
    const formattedKey = `"${key}"`;
    // 格式化值
    const formattedValue = JSON.stringify(value, null, indent + 2)
      .split("\n")
      .map((line) => spaces + "  " + line)
      .join("\n")
      .trim();

    const comma = index < entries.length - 1 ? "," : "";
    result.push(`${spaces}  ${formattedKey}: ${formattedValue}${comma}`);
  });

  result.push(`${spaces}}`);
  return result.join("\n");
}

// ==================== 生成完整的配置文件 ====================
function generateFullConfig() {
  console.log("\n🚀 开始生成 VuePress 配置文件...\n");

  // 生成导航栏
  const navbar = generateNavbar();
  console.log("\n📋 导航栏生成完成");

  // 生成侧边栏
  const sidebar = generateSidebar();

  // 生成完整的配置内容
  const configContent = `import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "${siteConfig.lang}",
  title: "${siteConfig.title}",
  description: "${siteConfig.description}",
  
  theme: defaultTheme({
    logo: "${siteConfig.logo}",
    
    navbar: ${JSON.stringify(navbar, null, 2).replace(/"([^"]+)":/g, "$1:")},
    
    sidebar: ${formatSidebar(sidebar, 2)},
  }),
  
  head: ${JSON.stringify(siteConfig.head, null, 2).replace(/"([^"]+)":/g, "$1:")},
  
  bundler: viteBundler(),
});`;

  return configContent;
}

// ==================== 写入文件 ====================
function writeConfigFile() {
  try {
    // 生成配置内容
    const configContent = generateFullConfig();

    // 确保 .vuepress 目录存在
    const vuepressDir = path.dirname(configPath);
    if (!fs.existsSync(vuepressDir)) {
      console.log(`📁 创建目录: ${vuepressDir}`);
      fs.mkdirSync(vuepressDir, { recursive: true });
    }

    // 写入文件到 config.js
    fs.writeFileSync(configPath, configContent, "utf8");

    console.log("\n" + "=".repeat(60));
    console.log("✅ 配置文件生成成功！");
    console.log(`📄 文件已保存到: ${configPath}`);
    console.log("=".repeat(60));

    // 同时打印到控制台（可选，如果不想看到可以注释掉）
    // console.log("\n📄 生成的配置内容预览:\n");
    // console.log(configContent);
  } catch (error) {
    console.error("❌ 写入文件失败:", error.message);
  }
}

// ==================== 执行生成 ====================
writeConfigFile();
