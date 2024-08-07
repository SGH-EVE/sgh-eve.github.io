import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', type: "image/png", href: '/logo.png' }]
  ],
  title: "S.G.H EVE online",
  description: "S.G.H EVE online 在线文档 | Star Guardian Home",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/docs/guide/Introduction' }
    ],
    sidebar: [
      { text: '开始', link: '/docs/guide/Introduction' },
      {
        text: '游戏介绍',
        collapsed: true,
        items: [{ text: '萌新入坑须知', link: '/docs/guide/NewFish' },
        { text: '这是啥', link: '/docs/guide/oldschool' },]
      },
      {
        text: 'BBBBBBBBBBB',
        collapsed: true,
        items: [
          { text: '测试页面1', link: '/docs/guide/markdown-examples' },
          { text: '测试页面2', link: '/docs/guide/api-examples' }]
      }
    ],
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/SGH-EVE/sgh-eve.github.io' }
    // ],
    // 添加自定义文本
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    outlineTitle: '本页内容',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '切换夜间模式',
    sidebarMenuLabel: '菜单'
  }
})
