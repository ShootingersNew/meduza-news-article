<template>
  <CardContainer class="article-meta-widget">
    <ArticleMetaInfo :article="article" />
    <ToolbarContainer class="palette-color-secondary">
      <AudioPlayerButton />
      <BookmarkButton />
      <TopicSubscriptionButton />
    </ToolbarContainer>
  </CardContainer>
</template>

<script setup lang="ts">
import type { Article } from '@/entities/Article'
import { ArticleMetaInfo } from '@/entities/Article'
import { AudioPlayerButton, BookmarkButton, TopicSubscriptionButton } from '@/features'
import { CardContainer, ToolbarContainer } from '@/shared/ui'
const props = defineProps<{
  readonly article: Article
}>()

const { article } = props
</script>

<style scoped>
.article-meta-widget {
  padding: 16px 24px;
  gap: 50px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}
</style>
