import comp from "E:/code/webFaceBook/docs/.vuepress/.temp/pages/htmlMd/html.html.vue"
const data = JSON.parse("{\"path\":\"/htmlMd/html.html\",\"title\":\"HTML\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1721200495000,\"contributors\":[{\"name\":\"flycode\",\"email\":\"1821024942@qq.com\",\"commits\":1}]},\"filePathRelative\":\"htmlMd/html.md\"}")
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
