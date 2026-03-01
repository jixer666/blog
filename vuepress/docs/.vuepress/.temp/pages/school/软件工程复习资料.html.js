import comp from "D:/blog/vuepress/docs/.vuepress/.temp/pages/school/软件工程复习资料.html.vue"
const data = JSON.parse("{\"path\":\"/school/%E8%BD%AF%E4%BB%B6%E5%B7%A5%E7%A8%8B%E5%A4%8D%E4%B9%A0%E8%B5%84%E6%96%99.html\",\"title\":\"软件工程复习资料\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"school/软件工程复习资料.md\"}")
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
