export * from './sidebar'
export * from './nav'

// console.log('what is sidebar', getSidebar());
// export const sidebar = getSidebar;

// export default defineConfig ({
//   title: 'Scantist',
//   themeConfig: {
//     sidebar: getSidebar( { contentRoot: '/docs/en-US/'}),
//     // sidebar: [
//     //   {
//     //     text: 'User Docs',
//     //     items: [
//     //       { text: 'Markdown Examples', link: '/markdown-examples' },
//     //     ],
//     //   }
//     // ]
//   },
//   locales: {
//     'en-US': {
//       label: 'English',
//     },
//     'zh-CN': {
//       label: '简体中文',
//     }
//   }
// })

// import { defineConfig } from 'vitepress'
// import { languages } from '../utils/lang'
// import { nav } from './nav'
// import { getSidebar } from './sidebar'

// console.log('get sidebar', getSidebar())

// const locales = {}
// languages.forEach((lang) => {
//   locales[`/${lang}`] = {
//     label: lang,
//     lang,
//   }
// })

// // https://vitepress.dev/reference/site-config
// export default defineConfig({
//   title: "Scantist User Docs",
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
