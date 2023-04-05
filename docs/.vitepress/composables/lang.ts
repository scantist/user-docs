import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { defaultLang } from '../constant'

export const useLang = () => {
  const route = useRoute()
  return computed(() => {
    // the first part of the first slash
    const path = route.data?.relativePath
    let lang: string
    console.log('path is?', path);
    if (path?.includes('/')) {
      lang = path.split('/').shift()! || defaultLang
    } else {
      lang = defaultLang
    }
    console.log('what is lang', lang);
    return lang
  })
}
