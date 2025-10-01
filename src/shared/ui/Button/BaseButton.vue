<template>
	<button
		class="base-button"
		:type="type"
		:class="[`base-button--${variant}`, { 'base-button--block': block }]"
		@click="handleClick"
	>
		<slot />
	</button>
</template>

<script setup lang="ts">
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

const { variant, type, block } = props
</script>

<style scoped>
.base-button {
	border: none;
	border-radius: 24px;
	padding: 12px 20px;
	font-size: 16px;
	cursor: pointer;
	transition: background-color 0.2s ease, color 0.2s ease;
	font-weight: 600;
}

.base-button--primary {
	background-color: #d78e39;
	color: #000;
}

.base-button--primary:hover {
	background-color: #e19c4b;
}

.base-button--ghost {
	background-color: transparent;
	color: #d78e39;
	border: 1px solid #d78e39;
}

.base-button--ghost:hover {
	background-color: rgba(215, 142, 57, 0.1);
}

.base-button--block {
	width: 100%;
}
</style>
