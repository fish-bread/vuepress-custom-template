import { blogPlugin } from '@vuepress/plugin-blog'
import { path } from '@vuepress/utils' // 添加路径工具
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'VuePress',
  description: '我的第一个vuepress自定义设置',
  
  // 1. 指定自定义主题目录
  theme: path.resolve(__dirname, './theme'), // 指向本地主题目录
  
  // 2. 主题配置会传递给自定义主题
  themeConfig: {
    // 你的自定义配置
    logo: 'https://vuejs.press/images/hero.png', // 建议使用相对路径
    navbar: [
      '/',// 首页链接（自动指向 README.md）
      {
        text: 'first',
        link: '/posts/first.html'  // 注意路径需使用生成的 HTML 路径
      }// 其他导航项
    ],
  },
  
  plugins: [
    blogPlugin({
      // Only files under posts are articles 只将 posts/目录下的 Markdown 文件识别为博客文章
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith('posts/') : false,
      //热更新
      hotReload: true,
    }),
  ],
  bundler: viteBundler(),
})
