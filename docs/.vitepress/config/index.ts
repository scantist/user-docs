import { defineConfig } from 'vitepress'

export * from './sidebars'
export * from './nav'
export default defineConfig ({
  locales: {
    'en-US': {
      label: 'English',
    },
    'zh-CN': {
      label: '简体中文',
    }
  }
})