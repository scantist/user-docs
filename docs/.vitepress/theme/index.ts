// https://vitepress.dev/guide/custom-theme
// https://github.com/vuejs/vitepress/issues/603#issuecomment-1103884818
import { h } from 'vue'
import { install } from 'element-plus'
import DefaultTheme from 'vitepress/theme'
import "element-plus/dist/index.css"
import './style.css'

export default {
  ...DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp: ({ app }) => {
    install(app)
  },
}