<script setup lang="ts">
import ProjectShowcaseItem from '@/classes/ProjectShowcaseItem'
import ButtonBack from '@/components/_specific/button/ButtonBack.vue'
import LocalStorageAboutViewController from '@/controllers/localStorage/LocalStorageAboutViewController'
import router from '@/router'
import { useTranslateStorage } from '@/stores/translate'
import { computed, onMounted } from 'vue'

const translateStore = useTranslateStorage()

const hasProject = (project: ProjectShowcaseItem): boolean => {
  return Object.values(project).length > 0
}
let projectToShow = computed(() => LocalStorageAboutViewController.getProjectAboutView())

let readebleInfoProject = computed(() => {
  if (hasProject(projectToShow.value)) {
    return projectToShow.value.readeableInformation.filter((f) => f.languageName === translateStore.language)[0]
  }
  return new ProjectShowcaseItem().readeableInformation[0]
})

onMounted(() => {
  if (!hasProject(projectToShow.value)) {
    router.back()
  }
})
</script>

<template>
  <section class="about-project-container">
    <ButtonBack @click="router.back()" />
    <figure class="image-title-container">
      <div class="project-banner">
        {{ projectToShow.imageName }}
      </div>
    </figure>
    <h1 class="project-name">{{ readebleInfoProject.name }}</h1>
    <p v-for="paragraph,index in readebleInfoProject.description "
     :key="index">
      {{ paragraph }}
    </p>

    <ul class="tecnologies-container" >
      <li class="tec-item" 
      v-for="tec,index in projectToShow.tecnlogies" 
      :key="index">
        <p><em>{{ tec }}</em></p>
      </li>
    </ul>

    
  </section>
</template>

<style scoped>
.tecnologies-container{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;;
}
.tec-item{
  background-color: var(--bg-color-1);
  padding: .8rem;
  font-weight: bold;
  border-radius: 8px;
  /* box-shadow: 1px 1px 2px 1px var(--text-color-1); */
  /* border:1px solid tomato; */
  transition: all .2s ease-in-out;
  pointer-events: none;
}




.about-project-container {
  width: 90%;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.image-title-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
}

.project-banner {
  background-color: var(--detail-color-2);
  width: 100%;
  height: 250px;
  border-radius: 8px;
}

.project-name {
  width: 100%s;
}
</style>
