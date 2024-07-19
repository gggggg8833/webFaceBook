import comp from "E:/code/webFaceBook/docs/.vuepress/.temp/pages/webMd/web.html.vue"
const data = JSON.parse("{\"path\":\"/webMd/web.html\",\"title\":\"网络与浏览器\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"1. 在浏览器访问一个网址后会背后渲染的过程？\",\"slug\":\"_1-在浏览器访问一个网址后会背后渲染的过程\",\"link\":\"#_1-在浏览器访问一个网址后会背后渲染的过程\",\"children\":[{\"level\":3,\"title\":\"详细过程\",\"slug\":\"详细过程\",\"link\":\"#详细过程\",\"children\":[]}]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"webMd/web.md\"}")
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
