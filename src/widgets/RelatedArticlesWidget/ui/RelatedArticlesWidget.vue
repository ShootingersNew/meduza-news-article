<template>
  <section class="related-articles-widget">
    <SectionHeader :title="t('relatedArticles.title', { topic: topicName })">
      <template #action>
        <BaseButton size="small" class="palette-color-blue" @click="handleViewAll">
          {{ t('relatedArticles.viewAll') }}
        </BaseButton>
      </template>
    </SectionHeader>

    <div v-if="isLoading" class="related-articles-widget__loading palette-color-secondary">
      Загрузка...
    </div>

    <div v-else-if="error" class="related-articles-widget__error palette-color-red">
      Не удалось загрузить статьи
    </div>

    <div v-else class="related-articles-widget__list">
      <RelatedArticleCard v-for="article in articles" :key="article.id" :article="article" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { SectionHeader, BaseButton } from '@/shared/ui'
import { useRelatedArticles } from '../model/useRelatedArticles'
import RelatedArticleCard from './RelatedArticleCard.vue'

const props = defineProps<{
  readonly topicId: string
  readonly topicName: string
}>()

const { t } = useI18n()
const { articles, isLoading, error } = useRelatedArticles(props.topicId)

const handleViewAll = () => {
  // Навигация на страницу темы (TODO: добавить роутинг)
  console.log('Navigate to topic:', props.topicId)
}
</script>

<style scoped>
.related-articles-widget {
  display: flex;
  flex-direction: column;
}

.related-articles-widget__list {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  border-top: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
}

.related-articles-widget__list > * {
  scroll-snap-align: start;
}

/* Кастомный скроллбар */
.related-articles-widget__list::-webkit-scrollbar {
  height: 6px;
}

.related-articles-widget__list::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.related-articles-widget__list::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

.related-articles-widget__list::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.related-articles-widget__loading,
.related-articles-widget__error {
  padding: 24px;
  text-align: center;
  border-radius: 8px;
  background-color: #f5f5f5;
}
</style>
