<template>
  <ArticleBar class="article-meta-widget">
    <ArticleMetaInfo :article="article" />
    <ToolbarContainer class="palette-color-secondary">
      <AudioPlayerButton />
      <BookmarkButton />
      <TopicSubscriptionButton />
    </ToolbarContainer>
  </ArticleBar>
</template>

<script setup lang="ts">
import type { Article } from '@/entities/Article'
import { ArticleMetaInfo } from '@/entities/Article'
import { AudioPlayerButton, BookmarkButton, TopicSubscriptionButton } from '@/features'
import { ArticleBar, ToolbarContainer } from '@/shared/ui'
const props = defineProps<{
  readonly article: Article
}>()

const { article } = props
</script>

<style scoped></style>
