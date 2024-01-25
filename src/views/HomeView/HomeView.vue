<script setup lang="ts">
import { ref } from 'vue'


import HeaderHomeView from './components/HeaderHomeView.vue';
import AboutMe from './components/AboutMe.vue';
import ProjectShowcase from './components/ProjectShowcase.vue';
import ExperienceShowcase from './components/ExperienceShowcase.vue';
import ContactMe from './components/ContactMe.vue';



</script>


<template>
  <div class="home-container">
    <HeaderHomeView/>
    <AboutMe />
    <ProjectShowcase/>
    <ExperienceShowcase/>
    <ContactMe/>
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
