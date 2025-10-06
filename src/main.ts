import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import ruMessages from './shared/config/i18n/ru'
import enMessages from './shared/config/i18n/en'

const createLocalI18n = () =>
	createI18n({
		locale: 'ru',
		fallbackLocale: 'en',
		messages: {
			ru: ruMessages,
			en: enMessages,
		},
		legacy: false,
		globalInjection: true,
	})

const resolveI18n = () => {
	if (typeof window === 'undefined') {
		return createLocalI18n()
	}

	if (window.i18n) {
		return window.i18n
	}

	const instance = createLocalI18n()
	window.i18n = instance
	return instance
}

const app = createApp(App)

const i18n = resolveI18n()
app.use(i18n)

app.mount('#app')
