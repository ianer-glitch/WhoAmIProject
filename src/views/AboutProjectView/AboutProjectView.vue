<script setup lang="ts">
import ProjectShowcaseItem from '@/classes/ProjectShowcaseItem'
import ButtonBack from '@/components/_specific/button/ButtonBack.vue'
import LocalStorageAboutViewController from '@/controllers/localStorage/LocalStorageAboutViewController'
import router from '@/router'
import { getImageFilePath } from '@/shared/files'
import { getPageTextsInCurrenctLanguageReactive } from '@/shared/languageCommon'
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

const redirectToOutside = (link?: string): void => {
  if (link) {
    window.open(link)
  }
}

let texts = computed(() => getPageTextsInCurrenctLanguageReactive())

const imgBackgroundUrl = computed(() => `url(${getImageFilePath(projectToShow.value.imageName)})`)
</script>

<template>
  <section class="about-project-container">
    <ButtonBack @click="router.back()" />
    <figure class="image-title-container">
      <div class="project-banner"></div>
    </figure>
    <h1 class="project-name">{{ readebleInfoProject.name }}</h1>
    <div v-html="readebleInfoProject.description.join()"></div>
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

    <ul
      v-if="projectToShow.repositoryLink || projectToShow.publishedLink"
      class="redirect-to-project-container"
    >
      <li v-if="projectToShow.repositoryLink">
        <figure
          @click="redirectToOutside(projectToShow.repositoryLink)"
          class="redirect-item"
        >
          <i class="pi pi-github redirect-icon"></i>
          <label>{{ texts.aboutProject.githubLabel }}</label>
        </figure>
      </li>
      <li v-if="projectToShow.publishedLink">
        <figure
          @click="redirectToOutside(projectToShow.publishedLink)"
          class="redirect-item"
        >
          <i class="pi pi-globe redirect-icon"></i>
          <label>{{ texts.aboutProject.publishedLabel }}</label>
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
