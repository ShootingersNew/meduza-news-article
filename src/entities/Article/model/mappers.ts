import type { ArticleDto } from '@/shared/api/articleApi'
import type { Article } from './types'

export const mapArticleDtoToArticle = (dto: ArticleDto): Article => ({
	id: dto.id,
	title: dto.title,
	subtitle: dto.subtitle,
	publishedAt: dto.publishedAt,
	source: dto.source,
	content: dto.content,
	author: {
		id: dto.author.id,
		name: dto.author.name,
		position: dto.author.position,
	},
})
