export interface FormatDateOptions {
	readonly locales?: string | string[]
}

export const formatDate = (value: string | number | Date, options: FormatDateOptions = {}): string => {
	const date = value instanceof Date ? value : new Date(value)

	if (Number.isNaN(date.getTime())) {
		return ''
	}

	const { locales = 'ru-RU' } = options

	const formatter = new Intl.DateTimeFormat(locales, {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})

	const timeFormatter = new Intl.DateTimeFormat(locales, {
		hour: '2-digit',
		minute: '2-digit',
	})

	const datePart = formatter.format(date).replace(' г.', '')
	const timePart = timeFormatter.format(date)

	return `${timePart} ${datePart}`
}
