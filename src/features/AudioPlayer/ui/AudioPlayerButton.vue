<template>
  <BaseButton @click="toggle" :type="ButtonType.Firm">
    {{ isPlaying ? t('audioPlayer.pause') : t('audioPlayer.play') }}
  </BaseButton>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { BaseButton, ButtonType } from '@/shared/ui'

const { t } = useI18n()
const isPlaying = ref(false)

const toggle = () => {
  isPlaying.value = !isPlaying.value
}
</script>
