import { defineConfig } from "vitepress";
import { enUSSidebar, zhCNSidebar } from "./others/sidebar.js";
import { companyConfig } from "../../config/companyConfig.js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "User Docs",
  description: "User Docs for DevSecOps Platform",
  themeConfig: {
    logo: `/images/${companyConfig.COMPANY_LOGO}`,
    nav: [],
    i18nRouting: true,
    sidebar: {
      "/en-US/": enUSSidebar() as any,
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  locales: {
    root: {
      label: "English",
      lang: "en-SG",
      link: "/en-US/Get-Started/",
    },
    "zh-CN": {
      label: "简体中文",
      title: "用户文档",
      link: "/zh-CN/Get-Started/",
      themeConfig: {
        sidebar: {
          "zh-CN": zhCNSidebar() as any,
        },
      },
    },
  },
  lastUpdated: true,
  ignoreDeadLinks: ["./Sign-up-for-%7B%7BcompanyConfig.APP_NAME%7D%7D"],
});
