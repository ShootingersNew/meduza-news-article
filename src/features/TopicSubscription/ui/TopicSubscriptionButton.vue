<template>
  <BaseButton @click="subscribe">
    {{ isSubscribed ? t('topicSubscription.subscribed') : t('topicSubscription.subscribe') }}
  </BaseButton>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { BaseButton } from '@/shared/ui'

const { t } = useI18n()
const isSubscribed = ref(false)

const subscribe = () => {
  isSubscribed.value = !isSubscribed.value
}
</script>
