<template>
  <CardContainer class="article-content-widget">
    <ArticleBody :article="article" />
  </CardContainer>
</template>

<script setup lang="ts">
import type { Article } from '@/entities/Article'
import { ArticleBody } from '@/entities/Article'
import { CardContainer } from '@/shared/ui'

const props = defineProps<{
  readonly article: Article
}>()

const { article } = props
</script>

<style scoped>
.article-content-widget {
  padding-bottom: 39px;
  padding-top: 36px;
}
</style>
