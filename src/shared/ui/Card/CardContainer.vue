<template>
	<section class="card palette-bg-white">
		<slot />
	</section>
</template>

<script setup lang="ts"></script>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 18px 45px -30px rgba(0, 0, 0, 0.25);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
