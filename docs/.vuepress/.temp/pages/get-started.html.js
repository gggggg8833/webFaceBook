import comp from "D:/前端技术练习/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"CSS\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"1. 什么是BFC？如何触发？有何特点？如何解决margin塌陷？\",\"slug\":\"_1-什么是bfc-如何触发-有何特点-如何解决margin塌陷\",\"link\":\"#_1-什么是bfc-如何触发-有何特点-如何解决margin塌陷\",\"children\":[]},{\"level\":2,\"title\":\"2. CSS如何处理溢出，说一下overflow不同值的区别\",\"slug\":\"_2-css如何处理溢出-说一下overflow不同值的区别\",\"link\":\"#_2-css如何处理溢出-说一下overflow不同值的区别\",\"children\":[]},{\"level\":2,\"title\":\"Configuration\",\"slug\":\"configuration\",\"link\":\"#configuration\",\"children\":[]},{\"level\":2,\"title\":\"Layouts and customization\",\"slug\":\"layouts-and-customization\",\"link\":\"#layouts-and-customization\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"get-started.md\"}")
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
