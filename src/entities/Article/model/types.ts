export interface Article {
	readonly id: string
	readonly title: string
	readonly publishedAt: string
	readonly source: string
	readonly content: readonly string[]
	readonly topic?: {
		readonly id: string
		readonly name: string
	}
}

export interface ArticlePreview {
	readonly id: string
	readonly title: string
	readonly publishedAt: string
	readonly imageUrl?: string
	readonly topic?: {
		readonly id: string
		readonly name: string
	}
}
