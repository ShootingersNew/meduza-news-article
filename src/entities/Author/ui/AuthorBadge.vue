<template>
	<div class="author-badge palette-color-secondary">
		<strong class="author-badge__name text-small">{{ author.name }}</strong>
		<span v-if="author.position" class="author-badge__position text-smallest">{{ author.position }}</span>
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
}

.author-badge__name,
.author-badge__position {
  line-height: 1.2;
}
</style>
