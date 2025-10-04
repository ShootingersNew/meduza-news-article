<template>
  <button class="link-button palette-color-firm" type="button" @click="handleClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{ click: [MouseEvent] }>()

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>

<style scoped>
.link-button {
  background-color: transparent;
  border: none;
  border-radius: 0;
  padding: 0;
  font-size: 16px;
  cursor: pointer;
  transition:
    color 0.2s ease,
    text-decoration-color 0.2s ease;
  font-weight: 600;
  text-decoration: none;
}
.link-button:hover {
  text-decoration: underline;
}
</style>
