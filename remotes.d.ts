type RouteLike = string | { path?: string } | Record<string, unknown>
type ComputedRefLite<T> = { readonly value: T }

declare module 'host/NavigationService' {
  const NavigationService: {
    navigate: (location: RouteLike) => void
    replace: (location: RouteLike) => void
    goBack: () => void
    getCurrentPath: () => string
    isRouterAvailable: () => boolean
    getQuery: () => Record<string, string>
  }
  export default NavigationService
}

declare module 'host/I18nService' {
  const I18nService: {
    readonly i18n: import('vue-i18n').I18n
    changeLocale: (locale: string) => void
    addLocale: (locale: string, translations: Record<string, object>) => void
    addLocales: (locales: Record<string, Record<string, object>>) => void
    hasI18n: () => boolean
  }
  export default I18nService
}

declare module 'host/useCustomRoute' {
  const useCustomRoute: () => { route: ComputedRefLite<Record<string, unknown> | undefined> }
  export default useCustomRoute
}
