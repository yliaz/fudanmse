import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  "/",
  { text: "通知公告", icon: "creative", link: "/posts" },
  { text: "信息汇总", icon: "creative", link: "/information" },
  { text: "数据统计", icon: "creative", link: "/statistics" },
]);