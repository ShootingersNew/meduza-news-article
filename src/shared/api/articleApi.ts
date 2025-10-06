export interface AuthorDto {
	readonly id: string
	readonly name: string
	readonly position?: string
}

export interface TopicDto {
	readonly id: string
	readonly name: string
}

export interface ArticleDto {
	readonly id: string
	readonly title: string
	readonly subtitle?: string
	readonly publishedAt: string
	readonly source: string
	readonly content: readonly string[]
	readonly author: AuthorDto
	readonly topic?: TopicDto
}

const stubArticle: ArticleDto = {
	id: 'demo-article',
	title: 'В Петербурге по делу о наркотиках задержан глава представительства Чечни Ислам Хизриев. Его отправили под домашний арест',
	publishedAt: '2021-10-29T11:16:00+03:00',
	source: '47 news',
	topic: {
		id: 'kemerovo-fire',
		name: 'Пожар в зимней вишне',
	},
	content: [
		'29 октября суд Заводского района Кемерово огласил приговор по первому делу о пожаре в торговом центре «Зимняя вишня», сообщает «Интерфакс».',
		'Самый большой срок получила гендиректор компании-владельца ТЦ Юлия Богданова, которую приговорили к 14 годам лишения свободы. Управляющую «Зимней вишней» Надежду Судденок приговорили к 13 с половиной годам колонии. Техническому директору ТЦ Георгию Соболеву назначили наказание в виде 11 лет лишения свободы. Охранника ТЦ Сергея Антюшина приговорили к восьми годам колонии.',
		'Всех четверых подсудимых признали виновными по статье об оказании услуг, не отвечающих требованиям безопасности жизни и здоровью детей.',
		'Главу компании «Системный интегратор», обслуживавшей пожарную сигнализацию в ТЦ, Игоря Полозиненко приговорили к шести с половиной годам колонии, а его подчиненного Александра Никитина — к пяти с половиной годам заключения. Их признали виновными по статье о нарушении требований пожарной безопасности.',
		'Руководителя тушения пожара в «Зимней вишне» Андрея Бурсина и начальника пожарного караула Сергея Генина осудили на шесть и пять лет лишения свободы соответственно. Обоих пожарных признали виновными по статье о халатности.',
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
