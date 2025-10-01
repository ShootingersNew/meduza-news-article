<template>
  <span class="icon" :aria-label="name">
    <slot>{{ computedLabel }}</slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  readonly name: string
}>()

const computedLabel = computed(() => props.name.slice(0, 2).toUpperCase())
</script>

<style scoped>
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #000;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
}
</style>
