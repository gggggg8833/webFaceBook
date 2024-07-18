import comp from "E:/code/webFaceBook/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"这是一份适合前端小白参考的面试题\",\"slug\":\"这是一份适合前端小白参考的面试题\",\"link\":\"#这是一份适合前端小白参考的面试题\",\"children\":[]}],\"git\":{\"updatedTime\":1721196409000,\"contributors\":[{\"name\":\"会飞的代码\",\"email\":\"1821024942@qq.com\",\"commits\":5}]},\"filePathRelative\":\"README.md\"}")
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
