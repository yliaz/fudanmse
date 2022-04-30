import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  "/home",
  { text: "通知公告", icon: "creative", link: "/posts/2022-04-25-meeting-announcement" },
  { text: "信息汇总", icon: "creative", link: "/information/first-class-university" },
  { text: "数据统计", icon: "creative", link: "/statistics/2022-statistics" },
]);