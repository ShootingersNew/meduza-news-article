<template>
	<component :is="tag" class="typography-heading" :class="levelClass">
		<slot />
	</component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type HeadingLevel = 1 | 2 | 3 | 4

const props = withDefaults(
	defineProps<{
		readonly level?: HeadingLevel
		tag?: `h${HeadingLevel}`
	}>(),
	{
		level: 1,
		tag: 'h1',
	},
)

const levelClass = computed(() => `typography-heading--h${props.level}`)
const tag = computed(() => props.tag ?? `h${props.level}`)
</script>

<style scoped>
.typography-heading {
	font-weight: 700;
	margin: 0;
}

.typography-heading--h1 {
	font-size: 52px;
	line-height: 1.1;
}

.typography-heading--h2 {
	font-size: 39px;
	line-height: 1.1;
}

.typography-heading--h3 {
	font-size: 30px;
	line-height: 1.15;
}

.typography-heading--h4 {
	font-size: 24px;
	line-height: 1.2;
}
</style>
