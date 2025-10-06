<template>
  <div class="article-meta palette-color-primary">
    <TypographyText size="medium" class="article-meta__date">
      {{ formattedDate }}
    </TypographyText>
    <TypographyText size="medium" class="article-meta__source">
      <span class="article-meta__source-label palette-color-secondary">{{
        t('articleMeta.source')
      }}</span
      >: <span class="article-meta__source-value">{{ article.source }}</span>
    </TypographyText>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { formatDate } from '@/shared/lib'
import { TypographyText } from '@/shared/ui'

import type { Article } from '../model/types'

const { t } = useI18n()

const props = defineProps<{
  readonly article: Article
}>()

const article = computed(() => props.article)

const formattedDate = computed(() => formatDate(article.value.publishedAt))
</script>

<style scoped>
.article-meta {
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
}

.article-meta__source-label {
}
</style>
