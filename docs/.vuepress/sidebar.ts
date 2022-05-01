import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig({
  "/posts/": [
    {
      text: "报名流程",
      prefix: "signup/",
      collapsable: true,
      icon: "liucheng",
      children: "structure"
    },
    {
      text: "确认流程",
      prefix: "confirm/",
      collapsable: true,
      icon: "confirm",
      children: "structure"
    },
    {
      text: "考试信息",
      prefix: "exam/",
      collapsable: true,
      icon: "exam",
      children: "structure"
    },
    {
      text: "线上宣讲会",
      prefix: "meetings/",
      collapsable: true,
      icon: "teach",
      children: "structure"
    }
  ],
  "/documents": "structure",
  "/statistics": "structure",
  "/experience/": [
    {
      text: "参考书推荐投票数据",
      prefix: "books/",
      collapsable: true,
      icon: "book",
      children: "structure"
    }
  ],
});
