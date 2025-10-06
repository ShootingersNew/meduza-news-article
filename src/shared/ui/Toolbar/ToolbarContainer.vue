<template>
  <nav class="toolbar">
    <slot />
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.toolbar {
  display: flex;
  gap: 50px;
  align-items: center;
  line-height: 19px;
}
</style>
