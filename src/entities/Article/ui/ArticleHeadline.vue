<template>
	<header class="article-headline">
		<TypographyHeading :level="1" class="article-headline__title">
			{{ article.title }}
		</TypographyHeading>
		<TypographyText v-if="article.subtitle" size="medium" class="article-headline__subtitle">
			{{ article.subtitle }}
		</TypographyText>
	</header>
</template>

<script setup lang="ts">
import type { Article } from '../model/types'
import { TypographyHeading, TypographyText } from '@/shared/ui'

const props = defineProps<{
	readonly article: Article
}>()

const { article } = props
</script>

<style scoped>
.article-headline {
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.article-headline__title {
	color: #000;
}

.article-headline__subtitle {
	color: #6e6e6e;
}
</style>
