import piniaPersist from 'pinia-plugin-persistedstate';

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon','@pinia/nuxt'],
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  hooks: {
    'pinia:state:options': (store) => {
      store.use(piniaPersist)
    },
  },
})
