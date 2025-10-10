<template>
  <section class="recommended-articles-widget">
    <SectionHeader :title="t('recommendedArticles.title')" :level="2" />

    <div v-if="isLoading" class="recommended-articles-widget__loading">
      <TypographyText>{{ t('common.loading') }}</TypographyText>
    </div>

    <div v-else-if="error" class="recommended-articles-widget__error">
      <TypographyText>{{ t('common.error') }}</TypographyText>
    </div>

    <div v-else-if="articles.length" class="recommended-articles-widget__grid">
      <RecommendedArticleCard v-for="article in articles" :key="article.id" :article="article" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { SectionHeader, TypographyText } from '@/shared/ui'
import { useRecommendedArticles } from '../model/useRecommendedArticles'
import RecommendedArticleCard from './RecommendedArticleCard.vue'

const { t } = useI18n()
const { articles, isLoading, error } = useRecommendedArticles()
</script>

<style scoped>
.recommended-articles-widget {
  display: flex;
  flex-direction: column;
}

.recommended-articles-widget__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 768px) {
  .recommended-articles-widget__grid {
    grid-template-columns: 1fr;
  }
}

.recommended-articles-widget__loading,
.recommended-articles-widget__error {
  padding: 32px;
  text-align: center;
  color: var(--palette-color-gray-60);
}
</style>
