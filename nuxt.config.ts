// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import * as path from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: false
    }
  },  
  modules: ['nuxt-icon', '@vueuse/nuxt', "@nuxt/fonts", "nuxt-primevue"],
  primevue: {
    // cssLayerOrder: 'base, components, primevue, utilities',
    components: {
      include: '*',
      exclude: ['Card', 'Carousel', 'Editor', 'Chart']
    },    
    options: {
      unstyled: true,      
    },
    importPT: { as: 'Lara', from: path.resolve(__dirname, './prime-vue/presets/lara') },
  },  
})
