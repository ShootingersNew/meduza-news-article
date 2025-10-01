import { fileURLToPath, URL } from 'node:url'

import federation from '@originjs/vite-plugin-federation'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig, loadEnv } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd(), '') } as Record<string, string>
  const isTest = mode === 'test'
  const isDev = mode === 'development'
  const hostBase = env.VITE_HOST_REMOTE || ''
  const remotes: Record<string, string> | undefined =
    isTest || !hostBase
      ? undefined
      : {
          host: `${hostBase}${isDev ? '/mf/host.js' : '/host-assets/host.js'}`,
        }

  return {
    preview: {
      port: 5007,
    },
    build: {
      target: 'esnext',
      assetsDir: 'template-assets',
      rollupOptions: {
        output: {
          globals: { vue: 'Vue' },
        },
        external: ['vue', 'vue-router', 'pinia', 'vue-i18n'],
      },
    },
    server: {
      port: 5007,
      host: true,
      strictPort: true,
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      federation({
        name: 'meduza-template',
        filename: 'meduzaTemplate.js',
        exposes: {
          './App': './src/App.vue',
        },
        shared: ['vue', 'vue-router', 'pinia', 'vue-i18n'],
        remotes,
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        ...(isTest && {
          host: fileURLToPath(new URL('./src/__mocks__/host', import.meta.url)),
        }),
      },
    },
  }
})
