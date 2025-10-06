<template>
  <ArticlePage />
</template>

<script setup lang="ts">
import 'meduza-pet-ui-kit/styles'

import I18nService from 'host/I18nService'

import { ArticlePage } from '@/pages'
import en from '@/shared/config/i18n/en'
import ru from '@/shared/config/i18n/ru'

I18nService.addLocales({
  en,
  ru,
})
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
