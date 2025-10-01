<template>
  <button
    class="base-button"
    :type="type"
    :class="[...buttonClasses, { 'base-button--block': block }]"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    readonly variant?: 'primary' | 'ghost'
    readonly type?: 'button' | 'submit' | 'reset'
    readonly block?: boolean
  }>(),
  {
    variant: 'primary',
    type: 'button',
    block: false,
  },
)

const emit = defineEmits<{ click: [MouseEvent] }>()

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}

const { type, block } = props

const buttonClasses = computed(() => {
  if (props.variant === 'ghost') {
    return ['base-button--ghost', 'palette-color-firm']
  }

  return ['base-button--primary', 'palette-bg-firm', 'palette-color-primary']
})
</script>

<style scoped>
.base-button {
  border: 1px solid transparent;
  border-radius: 24px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    opacity 0.2s ease;
  font-weight: 600;
}

.base-button--primary {
  border-color: transparent;
}

.base-button--primary:hover {
  opacity: 0.9;
}

.base-button--ghost {
  background-color: transparent;
  border-color: currentColor;
}

.base-button--ghost:hover {
  opacity: 0.8;
}

.base-button--block {
  width: 100%;
}
</style>
