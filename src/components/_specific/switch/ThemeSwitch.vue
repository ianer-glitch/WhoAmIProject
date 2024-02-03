<script setup lang="ts">
import { ref, watch } from 'vue'
import { useThemeStore } from '@/stores/themeStore'
import { ThemeEnum } from '@/enums/ThemeEnum'
import Switch from '@/components/atoms/Switch.vue'

const handleInitializeSwitch = (initialTheme: ThemeEnum): boolean => {
  return initialTheme === ThemeEnum.Light
}

const store = useThemeStore()
let switchValue = ref(handleInitializeSwitch(store.currenctTheme))

const handleThemeChange = (state: boolean): ThemeEnum => {
  return state ? ThemeEnum.Light : ThemeEnum.Dark
}

watch(
  () => switchValue.value,
  (newValue) => {
    store.currenctTheme = handleThemeChange(newValue)
  }
)
</script>

<template>
  <Switch v-model="switchValue">
    <div class="icon-container">
      <i
        v-if="switchValue"
        class="pi pi-sun"
      ></i>
      <i
        v-else
        class="pi pi-moon"
      ></i>
    </div>
  </Switch>
</template>

<style scoped>
.icon-container {
  color: var(--text-color-1);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
@/stores/themeStore
