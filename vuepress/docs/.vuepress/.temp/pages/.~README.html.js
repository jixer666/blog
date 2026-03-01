import comp from "D:/blog/vuepress/docs/.vuepress/.temp/pages/.~README.html.vue"
const data = JSON.parse("{\"path\":\"/.~README.html\",\"title\":\"Jixer的小屋\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Jixer的小屋\",\"tagline\":\"一名Java开发者的学习笔记与项目心得\",\"heroImage\":\"http://q1.qlogo.cn/g?b=qq&nk=2770063826&s=100\",\"footer\":\"<a href=\\\"https://beian.miit.gov.cn/\\\" target=\\\"_blank\\\">蜀ICP备2026006693号</a> | Copyright © 2026-present\",\"footerHtml\":true},\"headers\":[{\"level\":2,\"title\":\"📬 联系方式\",\"slug\":\"📬-联系方式\",\"link\":\"#📬-联系方式\",\"children\":[]}],\"git\":{},\"filePathRelative\":\".~README.md\"}")
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
