import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  "/",
  { text: "通知公告", icon: "article", link: "/posts/" },
  { text: "官方文件", icon: "study", link: "/documents/" },
  { text: "信息汇总", icon: "notes", link: "/information/" },
  { text: "数据统计", icon: "diagram", link: "/statistics/" },
  {
    text: "相关链接",
    icon: "link",
    children: [
      { text: "复旦大学官网", link: "https://www.fudan.edu.cn/", icon: "fudan" },
      { text: "复旦大学研究生招生网", link: "https://gsao.fudan.edu.cn/", icon: "fudan" },
      { text: "复旦大学在职工程硕士管理中心", link: "http://www.mse.fudan.edu.cn/", icon: "fudan" },
      
    ],
  },
]);