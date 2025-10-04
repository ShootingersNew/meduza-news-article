<template>
  <BaseButton @click="toggle">
    {{ isPlaying ? t('audioPlayer.pause') : t('audioPlayer.play') }}
  </BaseButton>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { BaseButton } from '@/shared/ui'

const { t } = useI18n()
const isPlaying = ref(false)

const toggle = () => {
  isPlaying.value = !isPlaying.value
}
</script>
