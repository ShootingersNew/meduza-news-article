<template>
  <component :is="componentTag" class="section-header">
    <TypographyHeading :level="level" class="section-header__title title-main">
      {{ title }}
    </TypographyHeading>
    <div v-if="$slots.action" class="section-header__action">
      <slot name="action" />
    </div>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { TypographyHeading } from '@/shared/ui'

interface Props {
  readonly title: string
  readonly level?: 1 | 2 | 3 | 4
  readonly isMain?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  level: 1,
  isMain: false,
})

const componentTag = computed(() => (props.isMain ? 'h1' : 'header'))
</script>

<style scoped>
.section-header {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  padding: 52px 50px 31px 47px;
  gap: 20px;
}
</style>
