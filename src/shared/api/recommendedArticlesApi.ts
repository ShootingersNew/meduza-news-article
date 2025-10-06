import type { ArticlePreview } from '@/entities/Article'

export interface ArticlePreviewDto {
	readonly id: string
	readonly title: string
	readonly published_at: string
	readonly image_url?: string
}

export const recommendedArticlesApi = {
	async fetchRecommendedArticles(): Promise<ArticlePreviewDto[]> {
		// Mock data - имитация API запроса
		await new Promise((resolve) => setTimeout(resolve, 300))

		return [
			{
				id: 'rec1',
				title:
					'Новейшая технология виртуальной реальности от Microsoft способна передать ощущения и даже запахи. Мы убедились в этом на собственном опыте',
				published_at: '2024-10-05T18:00:00Z',
				image_url: 'https://picsum.photos/seed/vr/400/300',
			},
			{
				id: 'rec2',
				title:
					'Существует ли настоящая магия? Объясняем подробно, почему во многих культурах до сих пор верят в сверхъестественное',
				published_at: '2024-10-05T12:00:00Z',
				image_url: 'https://picsum.photos/seed/magic/400/300',
			},
			{
				id: 'rec3',
				title:
					'Греческие скульптуры больше не являются эталоном? Насколько далеко мы ушли от великих предков в этом ремесле, рассказывает специалист Spectral',
				published_at: '2024-10-04T18:00:00Z',
				image_url: 'https://picsum.photos/seed/sculpture/400/300',
			},
			{
				id: 'rec4',
				title: 'Оформите подписку на «Вечернюю Медузу»',
				published_at: '2024-10-04T12:00:00Z',
				image_url: 'https://picsum.photos/seed/subscription/400/300',
			},
		]
	},
}

export const mapArticlePreviewDtoToArticlePreview = (dto: ArticlePreviewDto): ArticlePreview => ({
	id: dto.id,
	title: dto.title,
	publishedAt: dto.published_at,
	imageUrl: dto.image_url,
})
