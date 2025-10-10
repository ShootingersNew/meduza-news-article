<template>
  <div class="article-page">
    <TopicAdditionalsTemplate v-if="article">
      <template #default>
        <ArticleHeadlineWidget :article="article" />
        <ArticleMetaWidget :article="article" />
        <ArticleContentWidget :article="article" />
        <ArticleShareWidget />
        <RelatedArticlesWidget
          v-if="article.topic"
          :topic-id="article.topic.id"
          :topic-name="article.topic.name"
          class="article-page__related-section"
        />

        <div
          v-if="isLoading"
          class="article-page__placeholder palette-color-secondary palette-bg-white"
        >
          {{ t('articlePage.loading') }}
        </div>
      </template>

      <template #additionalsMain>
        <div></div>
      </template>

      <template #additionalsSecondary>
        <RecommendedArticlesWidget />
      </template>

      <template #additionalsFooter> Футер дополнительного контента </template>
    </TopicAdditionalsTemplate>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { mapArticleDtoToArticle, type Article } from '@/entities/Article'
import {
  ArticleContentWidget,
  ArticleHeadlineWidget,
  ArticleMetaWidget,
  ArticleShareWidget,
  RelatedArticlesWidget,
  RecommendedArticlesWidget,
} from '@/widgets'
import { articleApi } from '@/shared/api/articleApi'
import { TopicAdditionalsTemplate } from '@/shared/ui'

const { t } = useI18n()
const article = ref<Article | null>(null)
const isLoading = ref(true)

onMounted(async () => {
  const dto = await articleApi.fetchArticle()
  article.value = mapArticleDtoToArticle(dto)
  isLoading.value = false
})
</script>

<style scoped>
.article-page {
  display: flex;
  flex-direction: column;
}

.article-page__related-section {
  /* margin-top: 48px;
  margin-bottom: 48px; */
}

.article-page__placeholder {
  padding: 24px;
  text-align: center;
  border: 1px dashed currentColor;
  border-radius: 12px;
}
</style>
