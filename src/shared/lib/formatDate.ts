export interface FormatDateOptions {
	readonly locales?: string | string[]
}

export const formatDate = (value: string | number | Date, options: FormatDateOptions = {}): string => {
	const date = value instanceof Date ? value : new Date(value)

	if (Number.isNaN(date.getTime())) {
		return ''
	}

	const { locales = 'ru-RU' } = options

	return new Intl.DateTimeFormat(locales, {
		year: 'numeric',
		month: 'long',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
	}).format(date)
}
