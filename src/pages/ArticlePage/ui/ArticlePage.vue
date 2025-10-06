<template>
  <div class="article-page">
    <TopicAdditionalsTemplate v-if="article">
      <template #default>
        <ArticleHeadlineWidget :article="article" />
        <ArticleMetaWidget :article="article" />
        <ArticleContentWidget :article="article" />

        <div
          v-if="isLoading"
          class="article-page__placeholder palette-color-secondary palette-bg-white"
        >
          {{ t('articlePage.loading') }}
        </div>
        <ArticleShareWidget />
      </template>

      <template #additionalsMain>
        <div></div>
      </template>

      <template #additionalsSecondary> Второстепенный дополнительный контент </template>

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

.article-page__placeholder {
  padding: 24px;
  text-align: center;
  border: 1px dashed currentColor;
  border-radius: 12px;
}
</style>
