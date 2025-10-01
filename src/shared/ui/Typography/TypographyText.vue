<template>
  <p class="typography-text" :class="[sizeClass, toneClass, { 'typography-text--caption': isCaption }]">
		<slot />
	</p>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type TextSize = 'default' | 'medium' | 'small' | 'caption'

const props = withDefaults(
  defineProps<{
    readonly size?: TextSize
  }>(),
  {
    size: 'default',
  },
)

const sizeClass = computed(() => {
  switch (props.size) {
    case 'medium':
      return 'text-medium'
    case 'small':
      return 'text-small'
    case 'caption':
      return 'text-smallest'
    case 'default':
    default:
      return 'text-default'
  }
})

const toneClass = computed(() => (props.size === 'caption' ? 'palette-color-secondary' : 'palette-color-primary'))
const isCaption = computed(() => props.size === 'caption')
</script>

<style scoped>
.typography-text {
  margin: 0;
  line-height: 1.5;
}

.typography-text--caption {
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
</style>
