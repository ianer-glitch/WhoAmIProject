<script setup lang="ts">
import ProjectShowcaseItem from '@/classes/ProjectShowcaseItem'
import Image from '@/components/atoms/Image.vue'
import LocalStorageAboutViewController from '@/controllers/localStorage/LocalStorageAboutViewController'
import router from '@/router'
import { useAboutProjectStore } from '@/stores/aboutProjectStore'
import { useTranslateStorage } from '@/stores/translate'
import { computed, onMounted, reactive } from 'vue'

const translateStore = useTranslateStorage()

const hasProject = (project : ProjectShowcaseItem) :boolean =>{
  return Object.values(project).length > 0
}
let projectToShow = computed(() => LocalStorageAboutViewController.getProjectAboutView())

let readebleInfoProject = computed(
  () =>{
    if(hasProject(projectToShow.value)){
    return  projectToShow.value.readeableInformation.filter((f) => f.languageName === translateStore.language)[0]
    }
    return new ProjectShowcaseItem().readeableInformation[0]
  } 
)


onMounted(()=>{
  if(!hasProject(projectToShow.value)){
    router.back()
  }
})
</script>

<template>
  <section class="about-project-container">
    <div class="image-title-container">
      <div class="project-banner">
        {{ projectToShow.imageName }}
      </div>
    </div>
    <h1 class="project-name">{{ readebleInfoProject.name }}</h1>
    <h2>{{ readebleInfoProject.description }}</h2>

    
  </section>
</template>

<style scoped>
.about-project-container {
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap:1rem;
}
.image-title-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  /* background-color: tomato; */
  align-items: flex-start;
  justify-content: space-between;
}

.project-banner {
  background-color: aqua;
  width: 100%;
  height: 250px;
  border-radius: 8px;
}

.project-name {
  width: 100%s;
}
</style>
