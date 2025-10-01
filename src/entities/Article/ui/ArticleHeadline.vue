<template>
  <header class="article-headline">
    <TypographyHeading :level="1" class="article-headline__title">
      {{ article.title }}
    </TypographyHeading>
  </header>
</template>

<script setup lang="ts">
import type { Article } from '../model/types'
import { TypographyHeading } from '@/shared/ui'

defineProps<{
  readonly article: Article
}>()
</script>

<style scoped>
.article-headline {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
