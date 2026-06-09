<script setup lang="ts">
const { locale, t } = useLocale()

useHead(() => ({
  htmlAttrs: {
    lang: locale.value
  },
  titleTemplate: (titleChunk) => titleChunk || t.value.app.title,
  meta: [
    {
      name: 'description',
      content: t.value.app.description
    },
    {
      property: 'og:title',
      content: t.value.app.title
    },
    {
      property: 'og:description',
      content: t.value.app.description
    }
  ]
}))
</script>

<template>
  <NuxtPage />
</template>
