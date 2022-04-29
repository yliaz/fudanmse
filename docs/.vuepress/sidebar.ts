import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig({
  "/posts/": [
    {
      text: "最新消息",
      icon: "note",
      prefix: "/posts/",
      children: "structure"
    },
  ],
  "/articles/": [
    "intro.md",
    {
      text: "数据统计",
      icon: "creative",
      prefix: "/articles/statistics/",
      collapsable: true,
      children: [
        '2022-statistics.md'
      ]
    },
  ]
});
