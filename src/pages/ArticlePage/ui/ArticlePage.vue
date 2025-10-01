<template>
	<TopicAdditionalsTemplate>
		<template #default>
			<div class="article-page">
				<ArticleHeadlineWidget v-if="article" :article="article" />
				<ArticleMetaWidget v-if="article" :article="article" />
				<ArticleContentWidget v-if="article" :article="article" />

				<div v-if="isLoading" class="article-page__placeholder">
					Загружаем материал…
				</div>
			</div>
		</template>

		<template #additionalsFooter>
			<ArticleShareWidget />
		</template>
	</TopicAdditionalsTemplate>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { TopicAdditionalsTemplate } from 'meduza-pet-ui-kit'

import { mapArticleDtoToArticle, type Article } from '@/entities/Article'
import { ArticleContentWidget, ArticleHeadlineWidget, ArticleMetaWidget, ArticleShareWidget } from '@/widgets'
import { articleApi } from '@/shared/api/articleApi'

const article = ref<Article | null>(null)
const isLoading = ref(true)

onMounted(async () => {
	const dto = await articleApi.fetchArticle()
	article.value = mapArticleDtoToArticle(dto)
	isLoading.value = false
})
</script>

<style scoped>
.article-page {
	display: flex;
	flex-direction: column;
	gap: 24px;
	padding: 32px 16px;
}

.article-page__placeholder {
	padding: 24px;
	text-align: center;
	color: #6e6e6e;
	border: 1px dashed #d78e39;
	border-radius: 12px;
}
</style>
