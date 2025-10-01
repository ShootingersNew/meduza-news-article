<template>
  <p class="typography-text" :class="sizeClass">
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

const sizeClass = computed(() => `typography-text--${props.size}`)
</script>

<style scoped>
.typography-text {
  margin: 0;
  color: #000;
  line-height: 1.5;
}

.typography-text--default {
  font-size: 22px;
}

.typography-text--medium {
  font-size: 18px;
}

.typography-text--small {
  font-size: 16px;
}

.typography-text--caption {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
</style>
