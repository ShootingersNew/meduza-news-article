export interface AuthorDto {
	readonly id: string
	readonly name: string
	readonly position?: string
}

export interface ArticleDto {
	readonly id: string
	readonly title: string
	readonly subtitle?: string
	readonly publishedAt: string
	readonly source: string
	readonly content: readonly string[]
	readonly author: AuthorDto
}

const stubArticle: ArticleDto = {
	id: 'demo-article',
	title: 'В Петербурге по делу о наркотиках задержан глава представительства Чечни Ислам Хизриев. Его отправили под домашний арест',
	publishedAt: '2021-10-29T11:16:00+03:00',
	source: '47 news',
	content: [
		'29 октября суд заводского района Кемерово огласил приговор по первому делу о пожаре в торговом центре «Зимняя вишня», сообщает «Интерфакс».',
		'Самый большой срок получила гендиректор компании-владельца ТЦ Юлия Богданова, которую приговорили к 14 годам лишения свободы.',
		'Управляющую «Зимней вишней» Надежду Судденок приговорили к 13 с половиной годам колонии.',
		'Охранника ТЦ Сергея Антоншина приговорили к восьми годам колонии.',
	],
	author: {
		id: 'author-1',
		name: 'Медуза',
		position: 'Редакция',
	},
}

export const articleApi = {
	async fetchArticle(): Promise<ArticleDto> {
		return Promise.resolve({
			...stubArticle,
			content: [...stubArticle.content],
			author: { ...stubArticle.author },
		})
	},
}
