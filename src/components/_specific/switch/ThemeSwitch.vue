<script setup lang="ts">
import { ref, watch } from 'vue';
import { useThemeStore } from '@/stores/theme'
import { ThemeEnum } from '@/enums/ThemeEnum';
import Switch from '@/components/atoms/Switch.vue';

const store = useThemeStore()
let switchValue = ref(false)

const handleThemeChange = (state : boolean) : ThemeEnum =>{
  return state ? ThemeEnum.Light : ThemeEnum.Dark
}

watch(()=>switchValue.value, (newValue) =>{
  store.currenctTheme = handleThemeChange(newValue)
})

</script>

<template>
  <Switch v-model="switchValue" />
</template>