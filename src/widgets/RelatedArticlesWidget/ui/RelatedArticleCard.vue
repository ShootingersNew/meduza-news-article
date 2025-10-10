<template>
  <CardContainer tag="article" class="related-article-card">
    <a :href="`/article/${article.id}`" class="related-article-card__link">
      <TypographyText class="related-article-card__title palette-color-primary">
        {{ article.title }}
      </TypographyText>
      <TypographyText size="small" class="related-article-card__date palette-color-secondary">
        {{ formattedDate }}
      </TypographyText>
    </a>
  </CardContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { ArticlePreview } from '@/entities/Article'
import { CardContainer, TypographyText } from '@/shared/ui'
import { formatDate } from '@/shared/lib/formatDate'

const props = defineProps<{
  readonly article: ArticlePreview
}>()

const formattedDate = computed(() => formatDate(props.article.publishedAt))
</script>

<style scoped>
.related-article-card {
  min-width: 280px;
  padding: 40px 49px;

  transition: background-color 0.2s ease;
  height: 339px;
}
.related-article-card:not(:last-child) {
  border-right: 1px solid #dcdcdc;
}

.related-article-card__link {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
  height: 100%;
}

.related-article-card__title {
  font-weight: 500;
  line-height: 1.4;
}

.related-article-card__date {
  margin-top: 4px;
}
</style>
