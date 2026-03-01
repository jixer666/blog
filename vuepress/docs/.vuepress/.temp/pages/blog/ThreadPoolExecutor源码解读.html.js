import comp from "D:/blog/vuepress/docs/.vuepress/.temp/pages/blog/ThreadPoolExecutor源码解读.html.vue"
const data = JSON.parse("{\"path\":\"/blog/ThreadPoolExecutor%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html\",\"title\":\"ThreadPoolExecutor 源码解读\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"问题思考\",\"slug\":\"问题思考\",\"link\":\"#问题思考\",\"children\":[]},{\"level\":2,\"title\":\"原理实现\",\"slug\":\"原理实现\",\"link\":\"#原理实现\",\"children\":[{\"level\":3,\"title\":\"构造方法\",\"slug\":\"构造方法\",\"link\":\"#构造方法\",\"children\":[]},{\"level\":3,\"title\":\"线程池的状态\",\"slug\":\"线程池的状态\",\"link\":\"#线程池的状态\",\"children\":[]},{\"level\":3,\"title\":\"线程池中的属性\",\"slug\":\"线程池中的属性\",\"link\":\"#线程池中的属性\",\"children\":[]},{\"level\":3,\"title\":\"execute 方法\",\"slug\":\"execute-方法\",\"link\":\"#execute-方法\",\"children\":[]},{\"level\":3,\"title\":\"submit 方法\",\"slug\":\"submit-方法\",\"link\":\"#submit-方法\",\"children\":[]},{\"level\":3,\"title\":\"addWork 方法\",\"slug\":\"addwork-方法\",\"link\":\"#addwork-方法\",\"children\":[]},{\"level\":3,\"title\":\"Worker 对象\",\"slug\":\"worker-对象\",\"link\":\"#worker-对象\",\"children\":[]},{\"level\":3,\"title\":\"runWorker 方法\",\"slug\":\"runworker-方法\",\"link\":\"#runworker-方法\",\"children\":[]},{\"level\":3,\"title\":\"getTask 方法\",\"slug\":\"gettask-方法\",\"link\":\"#gettask-方法\",\"children\":[]},{\"level\":3,\"title\":\"拒绝策略\",\"slug\":\"拒绝策略\",\"link\":\"#拒绝策略\",\"children\":[]}]},{\"level\":2,\"title\":\"参考文章\",\"slug\":\"参考文章\",\"link\":\"#参考文章\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"blog/ThreadPoolExecutor源码解读.md\"}")
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
