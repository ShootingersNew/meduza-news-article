import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import App from '@/App.vue'
import I18nService from 'host/I18nService'

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('registers locales on mount', () => {
    const addLocalesSpy = vi.spyOn(I18nService, 'addLocales')

    mount(App)

    expect(addLocalesSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        en: expect.any(Object),
        ru: expect.any(Object),
      }),
    )
  })
})
