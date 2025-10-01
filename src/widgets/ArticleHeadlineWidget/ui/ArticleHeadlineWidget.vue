<template>
  <CardContainer class="article-headline-widget">
    <ArticleHeadline :article="article" />
    <AuthorBadge :author="article.author" />
  </CardContainer>
</template>

<script setup lang="ts">
import { ArticleHeadline } from '@/entities/Article'
import type { Article } from '@/entities/Article'
import { AuthorBadge } from '@/entities/Author'
import { CardContainer } from '@/shared/ui'

const props = defineProps<{
  readonly article: Article
}>()

const { article } = props
</script>

<style scoped>
.article-headline-widget {
  gap: 20px;
}
</style>
