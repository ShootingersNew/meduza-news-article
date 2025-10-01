export interface Article {
	readonly id: string
	readonly title: string
	readonly publishedAt: string
	readonly source: string
	readonly content: readonly string[]
}
