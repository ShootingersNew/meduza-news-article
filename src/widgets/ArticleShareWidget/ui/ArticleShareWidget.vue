<template>
  <CardContainer class="article-share-widget">
    <TypographyHeading :level="3">{{ t('articleShare.title') }}</TypographyHeading>
    <ToolbarContainer>
      <BaseButton v-for="network in networks" :key="network.id" @click="handleShare(network.id)">
        <IconPlaceholder :name="network.id" />
        <span class="article-share-widget__label">{{ t(network.labelKey) }}</span>
      </BaseButton>
    </ToolbarContainer>
  </CardContainer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import {
  BaseButton,
  CardContainer,
  IconPlaceholder,
  ToolbarContainer,
  TypographyHeading,
} from '@/shared/ui'

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

<style scoped>
.article-share-widget {
  padding: 20px 24px;
  gap: 16px;
}

.article-share-widget__label {
  margin-left: 8px;
}
</style>
