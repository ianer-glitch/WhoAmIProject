<script setup lang="ts">
import ProjectShowcaseItem,{ProjectShowcaseLinkItem} from '@/classes/ProjectShowcaseItem'
import ButtonBack from '@/components/_specific/button/ButtonBack.vue'
import LocalStorageAboutViewController from '@/controllers/localStorage/LocalStorageAboutViewController'
import type { LanguageEnum } from '@/enums/LanguageEnum'
import router from '@/router'
import { getImageFilePath } from '@/shared/files'
import { getPageTextsInCurrenctLanguageReactive, languageWatch } from '@/shared/languageCommon'
import { useTranslateStorage } from '@/stores/translate'
import { computed, onMounted, reactive, ref } from 'vue'

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

const redirectToOutside = (link?: string): void => {
  if (link) {
    window.open(link)
  }
}

let texts = computed(() => getPageTextsInCurrenctLanguageReactive())

let redirectLinks : Array<ProjectShowcaseLinkItem>= reactive([])

languageWatch((currenctLanguage:LanguageEnum)=>{
  createRedirectList(currenctLanguage)
})

let linksKey = ref(0)

onMounted(()=>{
  const store = useTranslateStorage()
  createRedirectList(store.language)
  
})

const createRedirectList = (currenctLanguage:LanguageEnum) =>{
  redirectLinks = projectToShow.value.links.filter(f=>f.languageName == currenctLanguage).map(m=>m.details).flat()
  linksKey.value++
  
}



const imgBackgroundUrl = computed(() => `url(${getImageFilePath(projectToShow.value.imageName)})`)
</script>

<template>
  <section class="about-project-container">
    <ButtonBack @click="router.back()" />
    <figure class="image-title-container">
      <div class="project-banner"></div>
    </figure>
    <h1 class="project-name">{{ readebleInfoProject.name }}</h1>
    <div class="dynamic-text" v-html="readebleInfoProject.description.join('')"></div>
    
   <ul class="tecnologies-container">
      <li
        class="tec-item"
        v-for="(tec, index) in projectToShow.tecnlogies"
        :key="index"
      >
        <p>
          <em>{{ tec }}</em>
        </p>
      </li>
    </ul>

    
    <ul class="redirect-to-project-container" :key="linksKey">
      <li v-for="link,index in redirectLinks" :key="index">
        <figure
          @click="redirectToOutside(link.link)"
          class="redirect-item"
        >
          <i class="redirect-icon" :class="link.primeIconName"></i>
          <label>{{ link.label }}</label>
        </figure>
      </li>
    </ul>
  </section>
</template>

<style scoped>

.redirect-icon {
  transition: all 0.2s ease-in-out;
  font-size: 2rem;
}
.redirect-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
}

.redirect-item:is(:hover, :active) .redirect-icon {
  scale: 2;
  transform: translateY(-1rem);
}
.redirect-item:is(:hover, :active),
.redirect-item:is(:hover, :active) label {
  cursor: pointer;
}
.redirect-to-project-container {
  background-color: var(--bg-color-1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 16px;
  color: var(--text-color-1);
}
.tecnologies-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
}
.tec-item {
  background-color: var(--bg-color-1);
  padding: 0.8rem;
  font-weight: bold;
  border-radius: 8px;
  /* box-shadow: 1px 1px 2px 1px var(--text-color-1); */
  /* border:1px solid tomato; */
  transition: all 0.2s ease-in-out;
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
  background-color: #fff;
  width: 100%;
  height: 250px;
  border-radius: 8px;
  background-image: v-bind('imgBackgroundUrl');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.project-name {
  width: 100%s;
}
</style>
