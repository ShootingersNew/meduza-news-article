<template>
	<div class="author-badge">
		<strong class="author-badge__name">{{ author.name }}</strong>
		<span v-if="author.position" class="author-badge__position">{{ author.position }}</span>
	</div>
</template>

<script setup lang="ts">
import type { Author } from '../model/types'

const props = defineProps<{
	readonly author: Author
}>()

const { author } = props
</script>

<style scoped>
.author-badge {
	display: flex;
	flex-direction: column;
	gap: 4px;
	color: #6e6e6e;
}

.author-badge__name {
	font-size: 16px;
	line-height: 1.2;
}

.author-badge__position {
	font-size: 14px;
	line-height: 1.2;
}
</style>
