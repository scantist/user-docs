import { defineConfig } from 'vitepress'
import { enUSSidebar, zhCNSidebar } from './others/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SCANTIST",
  // head: ['script', {}, fs.readFileSync(path.resolve(__dirname, 'lang.js'), 'utf-8')],
  // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  head: [],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/scantist_logo.png',
    nav: [],
    i18nRouting: true,
    sidebar: {
      '/en-US/': enUSSidebar() as any,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-SG',
      link: '/en-US/Get-Started-with-Scantist/',
    },
    'zh-CN': {
      label: '简体中文',
      title: '思探明',
      link: '/zh-CN/Get-Started-with-Scantist/',
      themeConfig: {
        sidebar: {
          'zh-CN': zhCNSidebar() as any,
        }
      }
    }
  },
  lastUpdated: true
}); 
