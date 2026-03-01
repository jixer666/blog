import comp from "D:/blog/vuepress/docs/.vuepress/.temp/pages/blog/Kubernetes.html.vue"
const data = JSON.parse("{\"path\":\"/blog/Kubernetes.html\",\"title\":\"Kubernetes\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"blog/Kubernetes.md\"}")
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
