<template>
  <SectionHeader :title="article.title" :level="1" :is-main="true" />
</template>

<script setup lang="ts">
import type { Article } from '../model/types'
import { SectionHeader } from '@/shared/ui'

defineProps<{
  readonly article: Article
}>()
</script>
