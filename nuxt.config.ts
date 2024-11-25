// https://nuxt.com/docs/api/configuration/nuxt-config
import {routes} from "./routes";

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    hooks: {
        'pages:extend'(pages) {
            routes.forEach(route => {
                pages.push(route);
            });

            function removePagesMatching(pattern: RegExp, pages: NuxtPage[] = []) {
                const pagesToRemove: NuxtPage[] = []
                for (const page of pages) {
                    if (page.file && pattern.test(page.file)) {
                        pagesToRemove.push(page)
                    } else {
                        removePagesMatching(pattern, page.children)
                    }
                }
                for (const page of pagesToRemove) {
                    pages.splice(pages.indexOf(page), 1)
                }
            }

            removePagesMatching(/\.ts$/, pages)
        }
    },
    modules: ['@vueuse/nuxt', '@pinia/nuxt', '@nuxtjs/i18n'],
    i18n: {
        vueI18n: './i18n.config.js',
    },
})