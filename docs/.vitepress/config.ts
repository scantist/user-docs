import { defineConfig } from 'vitepress'
import { languages } from './utils/lang'
import { getSidebar } from './others/sidebar'

// console.log('get sidebar', getSidebar())

const locales = {}
languages.forEach((lang) => {
  locales[`/${lang}`] = {
    label: lang,
    lang,
  }
})

// // https://vitepress.dev/reference/site-config
console.log('what is getsidebar', getSidebar())

export default defineConfig({
  title: "Scantist User Docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    // nav,

    sidebar: getSidebar() as any,
    // sidebar: [
    //   {
    //     text: 'Getting started',
    //     collapsible: true,
    //     collapsed: true,
    //     items: [
    //       { text: 'Introduction', link: '/getting-started/introduction' },
    //     ]
    //   },
    // ],
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     collapsed: true, 
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' },
    //       { 
    //         text: 'childern',  
    //         collapsed: true,            
    //         items: [
    //           { text: 'son', link: '/childern' },
    //         ]
    //       }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  },
  locales,
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
