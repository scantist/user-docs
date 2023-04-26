// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import ElementPlus from 'element-plus'
// import { globals } from '../vitepress'
import Theme from 'vitepress/theme'
import './style.css'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp: ({ app }) => {
    app.use(ElementPlus)

    // globals.forEach(([name, Comp]) => {
    //   app.component(name, Comp)
    // })
  },
}
