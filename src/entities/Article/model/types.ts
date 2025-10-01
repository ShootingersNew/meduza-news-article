import type { Author } from '@/entities/Author'

export interface Article {
	readonly id: string
	readonly title: string
	readonly subtitle?: string
	readonly publishedAt: string
	readonly source: string
	readonly content: readonly string[]
	readonly author: Author
}
