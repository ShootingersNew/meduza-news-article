<template>
  <CardContainer tag="section" class="article-bar">
    <slot />
  </CardContainer>
</template>

<script setup lang="ts">
import { CardContainer } from '@/shared/ui'
</script>

<style scoped>
.article-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px; /* базовый интервал */
  min-height: 69px;
  padding: 0 48px;
  box-sizing: border-box;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
</style>
