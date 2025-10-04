<template>
  <BaseButton @click="toggle">
    {{ isBookmarked ? t('bookmarks.saved') : t('bookmarks.save') }}
  </BaseButton>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { BaseButton } from '@/shared/ui'

const { t } = useI18n()
const isBookmarked = ref(false)

const toggle = () => {
  isBookmarked.value = !isBookmarked.value
}
</script>
