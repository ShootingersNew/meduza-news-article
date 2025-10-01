import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages: {},
  legacy: false,
  globalInjection: true,
})

if (typeof window !== 'undefined' && !window.i18n) {
  window.i18n = i18n
}

export default i18n
export const useI18n = () => ({
  t: i18n.global.t,
  locale: i18n.global.locale,
  availableLocales: i18n.global.availableLocales,
  setLocale: (locale: string) => {
    const target = i18n.global.locale
    if (typeof target === 'string') {
      i18n.global.locale = locale as typeof target
    } else {
      target.value = locale
    }
  },
})
