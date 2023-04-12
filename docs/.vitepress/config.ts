import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vitepress'
import { languages } from './utils/lang'
import { getSidebar } from './others/sidebar'
import { nav } from './others/nav'

console.log('get nav', nav)

// const locales = {}
// languages.forEach((lang) => {
//   locales[`/${lang}`] = {
//     label: lang,
//     lang,
//   }
// })

// console.log('what is my locale', locales);

// // https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Scantist",
  head: [
    // [
    //   'script',
    //   {},
    //   `;(() => {
    //     window.supportedLangs = ${JSON.stringify(languages)}
    //   })()`,
    // ],
  
    // ['script', {}, fs.readFileSync(path.resolve(__dirname, 'lang.js'), 'utf-8')],
      // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [],
    i18nRouting: true,
    sidebar: getSidebar() as any,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ], 
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-SG',
      link: '/en-US/'
    },
    //'en-US': {
    //  label: 'English',
    //},
    'zh-CN': {
      label: '简体中文',
    }
  },
  lastUpdated: true
}); 
