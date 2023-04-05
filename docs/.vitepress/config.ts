import { defineConfig } from 'vitepress'
import { languages } from './utils/lang'
import { nav } from './config'

const locales = {}
console.log('language is', languages)
languages.forEach((lang) => {
  console.log('got lang', lang);
  locales[`/${lang}`] = {
    label: lang,
    lang,
  }
})

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Scantist User Docs",
  description: "An useful docs for users",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    // nav,

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  },
  locales,
  // markdown: {
  //   config: (md) => mdPlugin(md),
  // },

  // vue: {
  //   template: {
  //     ssr: true,
  //     compilerOptions: {
  //       directiveTransforms: buildTransformers(),
  //     },
  //   },
  // },  
})
