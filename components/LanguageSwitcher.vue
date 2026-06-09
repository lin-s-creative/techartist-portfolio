<script setup lang="ts">
import { localeLabels, locales, type Locale } from '~/data/i18n'

const { locale, setLocale, t } = useLocale()

const selectLocale = (value: Locale) => {
  setLocale(value)
}
</script>

<template>
  <div class="language-switcher" :aria-label="t.languageSwitcher.label">
    <button
      v-for="item in locales"
      :key="item"
      class="language-switcher__button"
      :class="{ 'language-switcher__button--active': locale === item }"
      type="button"
      :aria-pressed="locale === item"
      @click="selectLocale(item)"
    >
      {{ localeLabels[item] }}
    </button>
  </div>
</template>
