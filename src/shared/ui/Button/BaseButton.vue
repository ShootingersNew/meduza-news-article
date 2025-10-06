<template>
  <button :class="['link-button', colorClass, sizeClass]" type="button" @click="handleClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ButtonType } from './types'

const emit = defineEmits<{ click: [MouseEvent] }>()

const props = withDefaults(
  defineProps<{
    readonly type?: ButtonType
    readonly size?: 'small' | 'default' | 'medium' | 'large'
  }>(),
  {
    size: 'small',
  },
)

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}

const colorClass = computed(() => {
  return props.type === ButtonType.Firm ? 'palette-color-firm' : 'palette-color-blue'
})

const sizeClass = computed(() => {
  // Используем классы из UI Kit: text-small (16px), text-default (22px), text-medium (18px), text-large (26px)
  return `text-${props.size}`
})
</script>

<style scoped>
.link-button {
  background-color: transparent;
  border: none;
  border-radius: 0;
  padding: 0;
  line-height: inherit;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  transition:
    color 0.2s ease,
    text-decoration-color 0.2s ease;
  text-decoration: none;
}
.link-button:hover {
  text-decoration: underline;
}
</style>
