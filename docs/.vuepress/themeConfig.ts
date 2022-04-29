import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "https://fdmse.info",

  author: {
    name: "站长小烨",
    url: "http://www.mse.fudan.edu.cn/",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo.svg",

  repo: "yliaz/fudanmse",

  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "默认页脚",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "Word"],

  darkmode: "switch",

  themeColor: false,
  blog: {
    name: "复旦MSE热线",
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
      author: "复旦非全MSE",
      license: "MIT",
      global: true,
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
  },
});
