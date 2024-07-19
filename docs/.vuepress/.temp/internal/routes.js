export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/webFaceBook/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/cssMd/css.html", { loader: () => import(/* webpackChunkName: "cssMd_css.html" */"E:/code/webFaceBook/docs/.vuepress/.temp/pages/cssMd/css.html.js"), meta: {"title":"CSS"} }],
  ["/htmlMd/html.html", { loader: () => import(/* webpackChunkName: "htmlMd_html.html" */"E:/code/webFaceBook/docs/.vuepress/.temp/pages/htmlMd/html.html.js"), meta: {"title":"HTML"} }],
  ["/webMd/web.html", { loader: () => import(/* webpackChunkName: "webMd_web.html" */"E:/code/webFaceBook/docs/.vuepress/.temp/pages/webMd/web.html.js"), meta: {"title":"网络与浏览器"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/code/webFaceBook/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
