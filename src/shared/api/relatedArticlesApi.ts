import type { ArticlePreview } from '@/entities/Article'

export interface ArticlePreviewDto {
	readonly id: string
	readonly title: string
	readonly published_at: string
	readonly image_url?: string
	readonly topic?: {
		readonly id: string
		readonly name: string
	}
}

export const relatedArticlesApi = {
	async fetchRelatedArticles(topicId: string): Promise<ArticlePreviewDto[]> {
		// Mock data - имитация API запроса
		await new Promise((resolve) => setTimeout(resolve, 300))

		return [
			{
				id: '1',
				title: '«Тьма окончательно не отступила» Евгения Закирова — о потерях в «Зимней вишне», муже и пятилетнем дочь',
				published_at: '2021-03-25T00:00:00Z',
				topic: { id: topicId, name: 'Пожар в зимней вишне' },
			},
			{
				id: '2',
				title: 'Никто не выступал с речами Годовщина пожара в «Зимней вишне»: как прошла акция памяти в Кемерове',
				published_at: '2019-03-25T00:00:00Z',
				topic: { id: topicId, name: 'Пожар в зимней вишне' },
			},
			{
				id: '3',
				title: 'Всероссийская «Зимняя вишня» Иван Голунов рассказывает, как в Кемерове появился «плохой торговый центр»',
				published_at: '2018-04-02T00:00:00Z',
				topic: { id: topicId, name: 'Пожар в зимней вишне' },
			},
			{
				id: '4',
				title: 'Что сделал Туилев за неделю после пожара в «Зимней вишне». Полная хронология событий',
				published_at: '2018-04-01T00:00:00Z',
				topic: { id: topicId, name: 'Пожар в зимней вишне' },
			},
			{
				id: '5',
				title: 'Как идет следствие по делу о пожаре в «Зимней вишне», возможные причины, показания подозреваемых. И украинский пример',
				published_at: '2018-03-28T00:00:00Z',
				topic: { id: topicId, name: 'Пожар в зимней вишне' },
			},
		]
	},
}

export const mapArticlePreviewDtoToArticlePreview = (dto: ArticlePreviewDto): ArticlePreview => ({
	id: dto.id,
	title: dto.title,
	publishedAt: dto.published_at,
	imageUrl: dto.image_url,
	topic: dto.topic,
})
