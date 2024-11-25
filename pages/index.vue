<script setup lang="ts">
import {useDark} from '@vueuse/core'

const { setLocale } = useI18n()
const isDark = useDark({
  onChanged: (isDark) => {
    if (process.client) {
      document.documentElement.classList.toggle('dark', isDark);
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }
  }
})

</script>

<template>
  <div class="underline bg-background">{{ $t('welcome') }}</div>
  <input type="checkbox" v-model="isDark">
  <button class="bg-gray-300 p-3 mx-4" @click="isDark = !isDark">vi</button>
  <button class="bg-gray-300 p-3 mx-4" @click="setLocale('vi')">vi</button>
  <button class="bg-gray-300 p-3 mx-4" @click="setLocale('en')">en</button>
</template>

<style scoped>

</style>