<template>
  <CardContainer tag="article" class="recommended-article-card">
    <div v-if="article.imageUrl" class="recommended-article-card__image-container">
      <img :src="article.imageUrl" :alt="article.title" class="recommended-article-card__image" />
    </div>

    <div class="recommended-article-card__content">
      <TypographyText size="default" class="recommended-article-card__title">
        {{ article.title }}
      </TypographyText>

      <TypographyText size="small" class="recommended-article-card__date">
        {{ formattedDate }}
      </TypographyText>
    </div>
  </CardContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { ArticlePreview } from '@/entities/Article'
import { CardContainer, TypographyText } from '@/shared/ui'
import { formatDate } from '@/shared/lib/formatDate'

interface Props {
  article: ArticlePreview
}

const props = defineProps<Props>()

const formattedDate = computed(() => formatDate(props.article.publishedAt))
</script>

<style scoped>
.recommended-article-card {
  display: flex;
  flex-direction: row;
  background: var(--palette-color-gray-10);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  height: 350px;
  width: 100%;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.recommended-article-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.recommended-article-card__image-container {
  width: 350px;
  aspect-ratio: 16 / 9;
  background: var(--palette-color-gray-20);
}

.recommended-article-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.recommended-article-card__content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 40px 50px 41px 49px;
}

.recommended-article-card__title {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.recommended-article-card__date {
  color: var(--palette-color-gray-60);
  margin-top: auto;
}
</style>
