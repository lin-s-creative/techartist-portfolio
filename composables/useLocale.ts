import { defaultLocale, isLocale, uiText, type Locale } from '~/data/i18n'

export const useLocale = () => {
  const locale = useState<Locale>('locale', () => defaultLocale)

  const setLocale = (value: Locale) => {
    locale.value = value

    if (import.meta.client) {
      window.localStorage.setItem('site-locale', value)
      document.documentElement.lang = value
    }
  }

  const toggleLocale = () => {
    setLocale(locale.value === 'ru' ? 'en' : 'ru')
  }

  const t = computed(() => uiText[locale.value])

  onMounted(() => {
    const savedLocale = window.localStorage.getItem('site-locale')

    if (isLocale(savedLocale)) {
      setLocale(savedLocale)
      return
    }

    document.documentElement.lang = locale.value
  })

  return {
    locale,
    setLocale,
    toggleLocale,
    t
  }
}
