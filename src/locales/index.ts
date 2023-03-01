import { createI18n } from 'vue-i18n'
import zh from './zh'
import en from './en'

const messages = {
  zh: { ...zh },
  en: { ...en }
}

const i18n = createI18n({
  locale: 'zh',
  messages
})

export default i18n