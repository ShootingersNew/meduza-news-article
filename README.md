# meduza-news-article — Remote (Article)

- Module Federation:
  - name: `meduza-template` (для совместимости примеров)
  - filename: `meduzaTemplate.js`
  - assetsDir: `template-assets`
  - exposes: `./App` → `src/App.vue`
  - shared: `['vue','vue-router','pinia','vue-i18n']`
  - remotes: `host` → `${VITE_HOST_REMOTE}/(mf/host.js | host-assets/host.js)`
- Dev/Preview порт: `5007`
- Экосистема: host мапит remote как `meduza-news-article` (dev-заглушка), контент — демо-виджеты и страницы.
