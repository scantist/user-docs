import { defineConfig, loadEnv } from "vitepress";
import { enUSSidebar, zhCNSidebar } from "./others/sidebar";
import { companyConfig } from "../../config/companyConfig.js";
const env = loadEnv("", process.cwd());
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: companyConfig.TITLE,
  // head: ['script', {}, fs.readFileSync(path.resolve(__dirname, 'lang.js'), 'utf-8')],
  // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  head: [],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: companyConfig.COMPANY_LOGO,
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
  ignoreDeadLinks: true,
});
