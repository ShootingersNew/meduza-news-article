import type { I18n } from 'vue-i18n'

import i18n from './i18n'

const assignToWindow = (instance: I18n) => {
  if (typeof window === 'undefined') {
    return instance
  }

  if (!window.i18n) {
    window.i18n = instance
  }

  return window.i18n
}

class I18nServiceImpl {
  private readonly defaultInstance: I18n

  constructor() {
    this.defaultInstance = i18n
    assignToWindow(this.defaultInstance)
  }

  private resolveInstance(): I18n {
    return (typeof window !== 'undefined' && window.i18n) ? window.i18n : this.defaultInstance
  }

  get i18n(): I18n {
    return this.resolveInstance()
  }

  changeLocale(locale: string): void {
    const instance = this.resolveInstance()

    if (!instance.global.availableLocales.includes(locale)) {
      const existing = instance.global.getLocaleMessage(locale) ?? {}
      instance.global.setLocaleMessage(locale, existing)
    }

    const localeTarget = instance.global.locale
    if (typeof localeTarget === 'string') {
      instance.global.locale = locale as typeof instance.global.locale
    } else {
      localeTarget.value = locale
    }
  }

  addLocale(locale: string, messages: Record<string, object>): void {
    const instance = this.resolveInstance()
    const existing = instance.global.getLocaleMessage(locale)
    const base = typeof existing === 'object' && existing !== null ? (existing as Record<string, unknown>) : {}
    instance.global.setLocaleMessage(locale, { ...base, ...messages })
  }

  addLocales(locales: Record<string, Record<string, object>>): void {
    for (const [locale, messages] of Object.entries(locales)) {
      this.addLocale(locale, messages)
    }
  }

  hasI18n(): boolean {
    return !!this.resolveInstance()
  }
}

const I18nService = new I18nServiceImpl()

export default I18nService
