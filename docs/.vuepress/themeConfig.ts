import { defineThemeConfig } from "vuepress-theme-hope";
import { redirect, RedirectOptions } from "vuepress-plugin-redirect2";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "https://fdmse.info",

  author: {
    name: "站长小烨",
    url: "https://zhuye.dev",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo.svg",

  repo: "yliaz/fudanmse",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "联系方式：廖老师（计算机学院），微信：13012893863",

  copyright: "Copyright © 2022 <a href='https://zhuye.dev' target='_blank'>站长小烨</a>",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  darkmode: "switch",

  themeColor: false,

  // GitHub
  docsRepo: "yliaz/fudanmse",
  docsBranch: "master",
  docsDir: "docs",

  blog: {
    name: "复旦 MSE 热线",
    description: "复旦大学非全日制MSE信息汇总（非官方）",
    intro: "/intro.html",
    timeline: '今日',
    medias: {
      // Email: "https://example.com",
      // GitHub: "https://example.com",
      // QQ: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Zhihu: "https://example.com",
    },
  },

  encrypt: {
    // config: {
    //   "/guide/encrypt.html": ["1234"],
    // },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 评论相关配置，使用 Giscus
    comment: {
      type: "giscus",
      repo: "yliaz/fudanmse",
      repoId: "R_kgDOHQZ0pQ",
      category: "Announcements",
      categoryId: "DIC_kwDOHQZ0pc4CO2Ux",
    },

    copyright: {
      hostname: "https://fdmse.info",
      author: "站长小烨",
      license: "MIT",
      global: false,
    },

    feed: {
      rss: true,

    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },

    // docsearch: {
    //   apiKey: '',
    //   indexName: '',
    //   appId: '',
    // }
  },
});
