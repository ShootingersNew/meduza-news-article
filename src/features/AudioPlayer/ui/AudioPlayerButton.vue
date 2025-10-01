<template>
  <BaseButton variant="ghost" @click="toggle">
    {{ isPlaying ? 'Остановить прослушивание' : 'Прослушать новость' }}
  </BaseButton>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { BaseButton } from '@/shared/ui'

const isPlaying = ref(false)

const toggle = () => {
  isPlaying.value = !isPlaying.value
}
</script>
