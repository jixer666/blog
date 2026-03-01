import comp from "D:/blog/vuepress/docs/.vuepress/.temp/pages/blog/内部通讯发送消息死锁问题.html.vue"
const data = JSON.parse("{\"path\":\"/blog/%E5%86%85%E9%83%A8%E9%80%9A%E8%AE%AF%E5%8F%91%E9%80%81%E6%B6%88%E6%81%AF%E6%AD%BB%E9%94%81%E9%97%AE%E9%A2%98.html\",\"title\":\"内部通讯发送消息死锁问题\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"问题背景\",\"slug\":\"问题背景\",\"link\":\"#问题背景\",\"children\":[]},{\"level\":2,\"title\":\"问题分析\",\"slug\":\"问题分析\",\"link\":\"#问题分析\",\"children\":[]},{\"level\":2,\"title\":\"解决办法\",\"slug\":\"解决办法\",\"link\":\"#解决办法\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"blog/内部通讯发送消息死锁问题.md\"}")
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
