<template>
	<BaseButton @click="subscribe" :block="true">
		{{ isSubscribed ? 'Вы подписаны на тему' : 'Подписаться на тему' }}
	</BaseButton>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { BaseButton } from '@/shared/ui'

const isSubscribed = ref(false)

const subscribe = () => {
	isSubscribed.value = !isSubscribed.value
}
</script>
