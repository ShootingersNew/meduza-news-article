# meduza-template

Базовый шаблон для микрофронтендов Meduza на Vue 3 + Vite + Module Federation.

## Скрипты

- `npm run dev` — локальный стенд на `http://localhost:5007`
- `npm run build` — production-сборка (`dist/`)
- `npm run preview` — предпросмотр production-сборки
- `npm run test:unit` — Vitest (watch); для one-shot: `npm run test:unit -- --run`
- `npm run type-check` / `npm run lint` — строгая типизация и линтинг

## Module Federation

- Remote entry: `meduzaTemplate.js`
- `assetsDir`: `template-assets`
- Shared deps: `vue`, `vue-router`, `pinia`, `vue-i18n`
- В режиме `mode === 'test'` (Vitest) host замещается моками из `src/__mocks__/host`

## Локализация

`src/main.ts` и моки создают локальный экземпляр `vue-i18n`, если host ещё не поднят. Благодаря этому шаблон работает автономно, но автоматически переиспользует `window.i18n`, когда его предоставляет host.

## Docker

Мультистейдж Dockerfile соответствует корпоративному стандарту: билд на Node 22.4.1, рантайм на Nginx 1.27.0 c non-root пользователем и healthcheck. Remote entry проброшен через `nginx.conf` с заголовком `Cache-Control: no-store`.

## Быстрый старт

```bash
npm ci
npm run dev
```

После клонирования замените нейтральные заглушки (порт, docker-образы, локали) под нужды конкретного микрофронта.
