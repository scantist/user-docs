import { defineConfig } from 'vitepress'
import { languages } from './utils/lang'
import { getSidebar } from './others/sidebar'
import { nav } from './others/nav'

console.log('get nav', nav)

const locales = {}
languages.forEach((lang) => {
  locales[`/${lang}`] = {
    label: lang,
    lang,
  }
})

console.log('what is my locale', locales);

// // https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Scantist User Docs",  
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
    'en-US': {
      label: 'English',
    },
    'zh-CN': {
      label: '简体中文',
    }
  }  
  // locales:{
  //   '/': {
  //     lang:'en-US',
  //     title: 'Scantist User Docs',
  //     description: 'An useful docs for users',
  //   }
  // },
});
//   description: "An useful docs for users",
//   themeConfig: {
//     // https://vitepress.dev/reference/default-theme-config
//     nav: nav as any,
//     // nav,

//     sidebar: getSidebar() as any,

//     socialLinks: [
//       { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
//     ],
//   },
//   locales,
//   // markdown: {
//   //   config: (md) => mdPlugin(md),
//   // },

//   // vue: {
//   //   template: {
//   //     ssr: true,
//   //     compilerOptions: {
//   //       directiveTransforms: buildTransformers(),
//   //     },
//   //   },
//   // },  
// })
