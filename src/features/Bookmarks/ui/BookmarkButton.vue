<template>
	<BaseButton :variant="isBookmarked ? 'ghost' : 'primary'" @click="toggle">
		{{ isBookmarked ? 'В закладках' : 'Добавить в закладки' }}
	</BaseButton>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { BaseButton } from '@/shared/ui'

const isBookmarked = ref(false)

const toggle = () => {
	isBookmarked.value = !isBookmarked.value
}
</script>
