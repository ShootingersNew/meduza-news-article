<template>
  <div class="article-body">
    <TypographyText v-for="paragraph in article.content" :key="paragraph">
      {{ paragraph }}
    </TypographyText>
  </div>
</template>

<script setup lang="ts">
import type { Article } from '../model/types'
import { TypographyText } from '@/shared/ui'

const props = defineProps<{
  readonly article: Article
}>()

const { article } = props
</script>

<style scoped>
.article-body {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
