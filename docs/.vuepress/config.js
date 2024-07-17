import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  base: '/webFaceBook/',
  title: '前端面试宝典',
  description: '一个求职的前端小白总结的面试题',

  theme: defaultTheme({
    navbar: ['/', '/htmlMd/html', '/cssMd/css'],
  }),

  bundler: viteBundler(),
})
