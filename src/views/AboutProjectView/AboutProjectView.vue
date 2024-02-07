<script setup lang="ts">
import { useAboutProjectStore } from '@/stores/aboutProjectStore'
import { useTranslateStorage } from '@/stores/translate'
import { computed, reactive } from 'vue'

const translateStore = useTranslateStorage()
const aboutProjectStore = useAboutProjectStore()

let projectToShow = reactive(aboutProjectStore.project)
let projectLanguage = computed(
  () => aboutProjectStore.project.readeableInformation.filter((f) => f.languageName === translateStore.language)[0]
)
</script>

<template>
  <div>
    <h1>{{ projectToShow.tecnlogies }}</h1>
    <h1>{{ projectLanguage.description }}</h1>
  </div>
</template>

<style scoped></style>
