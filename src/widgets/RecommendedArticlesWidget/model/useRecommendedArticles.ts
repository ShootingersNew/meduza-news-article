import { onMounted, ref } from 'vue'

import type { ArticlePreview } from '@/entities/Article'
import {
	mapArticlePreviewDtoToArticlePreview,
	recommendedArticlesApi,
} from '@/shared/api/recommendedArticlesApi'

export const useRecommendedArticles = () => {
	const articles = ref<ArticlePreview[]>([])
	const isLoading = ref(true)
	const error = ref<Error | null>(null)

	const fetchArticles = async () => {
		try {
			isLoading.value = true
			error.value = null

			const dtos = await recommendedArticlesApi.fetchRecommendedArticles()
			articles.value = dtos.map(mapArticlePreviewDtoToArticlePreview)
		} catch (err) {
			error.value = err instanceof Error ? err : new Error('Failed to fetch recommended articles')
		} finally {
			isLoading.value = false
		}
	}

	onMounted(() => {
		fetchArticles()
	})

	return {
		articles,
		isLoading,
		error,
		refetch: fetchArticles,
	}
}
