<template>
  <component :is="tag" class="typography-heading palette-color-primary" :class="headingClass">
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

const headingClass = computed(() => {
  switch (props.level) {
    case 1:
      return 'title-main'
    case 2:
      return 'title-sub'
    case 3:
      return 'title-small'
    case 4:
    default:
      return 'text-medium'
  }
})
const tag = computed(() => props.tag ?? `h${props.level}`)
</script>

<style scoped>
.typography-heading {
  font-weight: 700;
  margin: 0;
}
</style>
