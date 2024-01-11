<script setup lang="ts">
import { ref } from 'vue'

import { getPageTextsInCurrenctLanguage } from '@/shared/languageCommon'
import HeaderHomeView from './components/HeaderHomeView.vue';
import AboutMe from './components/AboutMe.vue';
import ProjectShowcase from './components/ProjectShowcase.vue';
import ExperienceShowcase from './components/ExperienceShowcase.vue';


let text = ref(getPageTextsInCurrenctLanguage())
</script>
<!-- animations using viewPort -->
<!-- https://www.youtube.com/watch?v=sORoAeGhlj0&t=3s -->
<template>
  <div class="home-container">
    <HeaderHomeView/>
    <AboutMe />
    <ProjectShowcase/>
    <ExperienceShowcase/>
  </div>
   
</template>
<style scoped>
.home-container {
  
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  gap:2rem;
}


</style>
