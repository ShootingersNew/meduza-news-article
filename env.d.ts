/// <reference types="vite/client" />

import type { I18n } from 'vue-i18n'

declare global {
	interface Window {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		i18n?: I18n<any, any, any, any, any>
	}
}
