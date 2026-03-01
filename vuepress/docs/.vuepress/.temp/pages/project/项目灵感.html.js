import comp from "D:/blog/vuepress/docs/.vuepress/.temp/pages/project/项目灵感.html.vue"
const data = JSON.parse("{\"path\":\"/project/%E9%A1%B9%E7%9B%AE%E7%81%B5%E6%84%9F.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"project/项目灵感.md\"}")
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
