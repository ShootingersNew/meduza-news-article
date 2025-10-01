import { onBeforeUnmount, onMounted, ref } from 'vue'

type MaybeHTMLElement = HTMLElement | null

export const useClickOutside = () => {
	const target = ref<MaybeHTMLElement>(null)
	const isActive = ref(false)

	const handleDocumentClick = (event: MouseEvent) => {
		const currentTarget = target.value

		if (!currentTarget) {
			isActive.value = false
			return
		}

		const clickedOutside = !currentTarget.contains(event.target as Node)
		isActive.value = clickedOutside
	}

	onMounted(() => {
		document.addEventListener('click', handleDocumentClick)
	})

	onBeforeUnmount(() => {
		document.removeEventListener('click', handleDocumentClick)
	})

	return {
		target,
		isActive,
	}
}
