import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  lang: "zh-CN",
  title: "复旦 MSE 热线",
  description: "复旦电子信息非全日制考试相关信息汇总和经验总结",

  base: "/",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_3370533_zhaxjnfdoz.css",
      },
    ],
  ],

  themeConfig,

  
})

