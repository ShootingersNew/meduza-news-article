<template>
  <section class="card">
    <slot />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 18px 45px -30px rgba(0, 0, 0, 0.25);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
