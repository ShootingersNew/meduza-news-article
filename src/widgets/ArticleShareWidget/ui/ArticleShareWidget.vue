<template>
	<CardContainer class="article-share-widget">
		<TypographyHeading :level="3">Поделиться</TypographyHeading>
		<ToolbarContainer>
			<BaseButton
				v-for="network in networks"
				:key="network.id"
				variant="ghost"
				@click="handleShare(network.id)"
			>
				<IconPlaceholder :name="network.id" />
				<span class="article-share-widget__label">{{ network.label }}</span>
			</BaseButton>
		</ToolbarContainer>
		<TopicSubscriptionButton />
	</CardContainer>
</template>

<script setup lang="ts">
import { BaseButton, CardContainer, IconPlaceholder, ToolbarContainer, TypographyHeading } from '@/shared/ui'
import { TopicSubscriptionButton } from '@/features'

interface ShareNetwork {
	readonly id: string
	readonly label: string
}

const networks: ShareNetwork[] = [
	{ id: 'facebook', label: 'Facebook' },
	{ id: 'vk', label: 'VK' },
	{ id: 'telegram', label: 'Telegram' },
	{ id: 'whatsapp', label: 'WhatsApp' },
]

const handleShare = (networkId: string) => {
	console.info(`[share] ${networkId}`)
}
</script>

<style scoped>
.article-share-widget {
	gap: 16px;
}

.article-share-widget__label {
	margin-left: 8px;
}
</style>
