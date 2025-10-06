<template>
  <article class="related-article-card">
    <a :href="`/article/${article.id}`" class="related-article-card__link">
      <TypographyText class="related-article-card__title palette-color-primary">
        {{ article.title }}
      </TypographyText>
      <TypographyText size="small" class="related-article-card__date palette-color-secondary">
        {{ formattedDate }}
      </TypographyText>
    </a>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { ArticlePreview } from '@/entities/Article'
import { TypographyText } from '@/shared/ui'
import { formatDate } from '@/shared/lib/formatDate'

const props = defineProps<{
  readonly article: ArticlePreview
}>()

const formattedDate = computed(() => formatDate(props.article.publishedAt))
</script>

<style scoped>
.related-article-card {
  min-width: 280px;
  max-width: 320px;
  padding: 16px;
  border-radius: 8px;
  background-color: #f5f5f5;
  transition: background-color 0.2s ease;
}

.related-article-card:hover {
  background-color: #ebebeb;
}

.related-article-card__link {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.related-article-card__title {
  font-weight: 500;
  line-height: 1.4;
}

.related-article-card__date {
  margin-top: 4px;
}
</style>
