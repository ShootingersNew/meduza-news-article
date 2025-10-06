<template>
  <ArticleBar class="article-share-widget">
    <span class="article-share-widget__title" role="text">
      {{ t('articleShare.title') }}
    </span>
    <ToolbarContainer>
      <BaseButton
        v-for="network in networks"
        :key="network.id"
        class="article-share-widget__button palette-color-blue"
        @click="handleShare(network.id)"
      >
        <span class="article-share-widget__label">{{ t(network.labelKey) }}</span>
      </BaseButton>
    </ToolbarContainer>
  </ArticleBar>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { BaseButton, ArticleBar, ToolbarContainer } from '@/shared/ui'

const { t } = useI18n()

interface ShareNetwork {
  readonly id: string
  readonly labelKey: string
}

const networks: ShareNetwork[] = [
  { id: 'facebook', labelKey: 'articleShare.facebook' },
  { id: 'vk', labelKey: 'articleShare.vk' },
  { id: 'telegram', labelKey: 'articleShare.telegram' },
  { id: 'whatsapp', labelKey: 'articleShare.whatsapp' },
]

const handleShare = (networkId: string) => {
  console.info(`[share] ${networkId}`)
}
</script>

<style scoped></style>
