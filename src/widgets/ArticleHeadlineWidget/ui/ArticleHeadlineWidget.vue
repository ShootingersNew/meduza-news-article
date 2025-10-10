<template>
  <CardContainer class="article-headline-widget">
    <ArticleHeadline :article="article" />
  </CardContainer>
</template>

<script setup lang="ts">
import { ArticleHeadline } from '@/entities/Article'
import type { Article } from '@/entities/Article'
import { CardContainer } from '@/shared/ui'

const props = defineProps<{
  readonly article: Article
}>()

const { article } = props
</script>

<style scoped></style>
