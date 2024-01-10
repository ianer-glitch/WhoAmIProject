<script setup lang="ts">
import { ref } from 'vue'

import { getPageTextsInCurrenctLanguage } from '@/shared/languageCommon'
import HeaderHomeView from './components/HeaderHomeView.vue';
import AboutMe from './components/AboutMe.vue';
import ProjectShowcase from './components/ProjectShowcase.vue';

let shouldMoveButton = ref(false)
let text = ref(getPageTextsInCurrenctLanguage())
</script>

<template>
  <div class="home-container">
    <HeaderHomeView/>
    <AboutMe />
    <ProjectShowcase/>

    </div>
   
</template>
<style scoped>
.home-container {
  
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* padding: 1rem; */
  gap:2rem;
}


</style>
