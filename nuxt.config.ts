export default defineNuxtConfig({
  compatibilityDate: '2025-01-15',
  devtools: { enabled: true },
  css: ['~/assets/css/gradients.css', '~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      title: 'Портфолио технического художника',
      meta: [
        { name: 'description', content: 'Производственное портфолио технического художника с разборами света, UI, шейдеров и сборки окружения для игровых проектов.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#101113' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Портфолио технического художника' },
        { property: 'og:description', content: 'Структурированные разборы технической работы в геймдеве с визуальными доказательствами и заметками по реализации.' }
      ]
    }
  },
  nitro: {
    preset: process.env.NITRO_PRESET || 'vercel',
    prerender: {
      crawlLinks: true
    }
  },
  routeRules: {
    '/': { prerender: true },
    '/projects/**': { prerender: true }
  },
  typescript: {
    strict: true,
    typeCheck: true
  }
})
