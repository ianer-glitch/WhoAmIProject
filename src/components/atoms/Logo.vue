<script setup lang="ts">
import router from '@/router'
import Image from './Image.vue'
import { themeWatch } from '@/shared/themeCommon'
import { ThemeEnum } from '@/enums/ThemeEnum'
import { onMounted, ref } from 'vue'
import { useThemeStore } from '@/stores/themeStore'

let imgName = ref('irm-logo-white.svg')

const setLogo = (currenctTheme: ThemeEnum) => {
  imgName.value = currenctTheme === ThemeEnum.Dark ? 'irm-logo-white.svg' : 'irm-logo.svg'
}

themeWatch((newTheme: ThemeEnum) => {
  setLogo(newTheme)
})

onMounted(() => {
  const store = useThemeStore()
  setLogo(store.currenctTheme)
})
</script>

<template>
  <figure @click="router.push('/')">
    <Image
      class="logo"
      :img-name="imgName"
    />
  </figure>
</template>

<style scoped>
.logo {
  /* padding: .6rem; */
  max-height: 100%;
  color: var(--bg-color-1);
}

figure {
  width: 5rem;
  height: 100%;
  border-radius: 12px;
  /* background-color: var(--bg-color-1); */
  color: var(--text-color-1);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

figure:is(:hover, :active) {
  scale: 1.2;
}

@media (min-width: 600px) {
  figure {
    width: 10rem;
  }
}
</style>
