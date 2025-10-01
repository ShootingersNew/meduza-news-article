import { computed } from 'vue'

const route = computed<Record<string, unknown> | undefined>(() => ({
  name: 'home',
}))

export default function useCustomRoute() {
  return { route }
}
