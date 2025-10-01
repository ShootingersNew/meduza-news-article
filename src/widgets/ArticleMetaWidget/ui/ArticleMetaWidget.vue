<template>
	<CardContainer class="article-meta-widget">
		<ArticleMetaInfo :article="article" />
		<ToolbarContainer>
			<AudioPlayerButton />
			<BookmarkButton />
		</ToolbarContainer>
	</CardContainer>
</template>

<script setup lang="ts">
import type { Article } from '@/entities/Article'
import { ArticleMetaInfo } from '@/entities/Article'
import { AudioPlayerButton, BookmarkButton } from '@/features'
import { CardContainer, ToolbarContainer } from '@/shared/ui'

const props = defineProps<{
	readonly article: Article
}>()

const { article } = props
</script>

<style scoped>
.article-meta-widget {
	gap: 16px;
}
</style>
