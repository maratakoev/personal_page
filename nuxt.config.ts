// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/base.css'],

  // --- Настройки для SEO ---
  app: {
    head: {
      // Глобальный заголовок по умолчанию
      title: 'Мой Прекрасный Nuxt-Проект',
      
      meta: [
        { 
          // Мета-описание для поисковых систем
          name: 'description', 
          content: 'Официальный сайт моего Nuxt-проекта. Здесь вы найдете самую полезную информацию.' 
        },
        { 
          // Open Graph (для социальных сетей: Facebook, Telegram и т.д.)
          property: 'og:title', 
          content: 'Мой Прекрасный Nuxt-Проект' 
        },
        { 
          property: 'og:description', 
          content: 'Официальный сайт моего Nuxt-проекта.' 
        },
        { 
          name: 'twitter:card', 
          content: 'summary_large_image' 
        },
      ],
      
      // Добавление ссылки на Favicon
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
  // -------------------------
})