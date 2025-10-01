import type { TEventBus } from 'meduza-bus/src/types'
import type { I18n } from 'vue-i18n'
import type { Router } from 'vue-router'
declare global {
  interface Window {
    eventBus: TEventBus
    router: Router
    i18n?: I18n
  }
}
