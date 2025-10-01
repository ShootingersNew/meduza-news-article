<template>
	<nav class="toolbar">
		<slot />
	</nav>
</template>

<script setup lang="ts">
</script>

<style scoped>
.toolbar {
	display: flex;
	gap: 12px;
	flex-wrap: wrap;
	align-items: center;
}
</style>
