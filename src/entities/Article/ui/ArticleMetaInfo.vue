<template>
  <div class="article-meta palette-color-secondary">
    <TypographyText size="caption" class="article-meta__date">
      {{ formattedDate }}
    </TypographyText>
    <TypographyText size="caption" class="article-meta__source">
      Источник: {{ article.source }}
    </TypographyText>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { formatDate } from '@/shared/lib'
import { TypographyText } from '@/shared/ui'

import type { Article } from '../model/types'

const props = defineProps<{
  readonly article: Article
}>()

const article = computed(() => props.article)

const formattedDate = computed(() => formatDate(article.value.publishedAt))
</script>

<style scoped>
.article-meta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.article-meta__date,
.article-meta__source {
  text-transform: uppercase;
}
</style>
