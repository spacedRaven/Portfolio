// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    css: ['~/assets/css/main.css'],
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss', 
        '@nuxt/eslint', 
        '@vueuse/nuxt', 
        '@nuxt/fonts'
    ],
    fonts: {
        devtools: true,
        defaults: {
            weights: [300, 400, 500, 700, 800],
            styles: ['normal', 'italic'],
            subsets: [
              'latin-ext',
              'latin',
            ],
            fallbacks: {
                'serif': ['Times New Roman'],
                'sans-serif': ['Arial'],
            }
        },
        families: [
            {
                name: 'Asap',
                provider: 'google',
                global: true,
            }
        ]
    }
})
