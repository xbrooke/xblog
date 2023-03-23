import { defineConfig } from 'vitepress'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'
import { description } from './config/description'


const config = defineConfig({
  title: '徐大兵',
  base: '/xblog/',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: 'https://s2.loli.net/2023/03/03/IduznQDYlVt6MBo.png' }]
  ],
  cacheDir: '../../node_modules',
  description,
  themeConfig: {
    logo: 'https://s2.loli.net/2023/03/03/IduznQDYlVt6MBo.png',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Tyh2001/tyh-blog'
      }
    ],
    nav,
    sidebar,
    outlineTitle: '本页目录',
    editLink: {
      pattern: 'https://github.com/Tyh2001/tyh-blog/blob/master/docs/:path'
    },
    docFooter:{
      prev: '上一篇',
      next: '下一篇',
    }
  },
  
})


export default config

