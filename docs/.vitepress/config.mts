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
  lastUpdated: true,
  ignoreDeadLinks: ["./Sign-up-for-%7B%7BcompanyConfig.APP_NAME%7D%7D"],
});
