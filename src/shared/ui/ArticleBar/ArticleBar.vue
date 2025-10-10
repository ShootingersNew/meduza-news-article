<template>
  <div class="article-bar-wrapper">
    <CardContainer tag="section" class="article-bar">
      <slot />
    </CardContainer>
  </div>
</template>

<script setup lang="ts">
import { CardContainer } from '@/shared/ui'
</script>

<style scoped>
.article-bar-wrapper {
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.article-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  min-height: 69px;
  padding: 0 48px;
  box-sizing: border-box;
}
</style>
