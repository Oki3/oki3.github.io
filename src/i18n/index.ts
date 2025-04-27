import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import zhCN from './locales/zh-CN.json'

const messages = {
  en,
  'zh-CN': zhCN
}

// Get browser language
const getBrowserLanguage = () => {
  const lang = navigator.language
  return messages[lang] ? lang : 'en'
}

export const i18n = createI18n({
  legacy: false, // Set to false to use Composition API
  locale: getBrowserLanguage(),
  fallbackLocale: 'en',
  messages
}) 