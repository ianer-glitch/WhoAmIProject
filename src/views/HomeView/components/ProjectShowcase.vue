<script setup lang="ts">
import ProjectShowcaseItem from '@/classes/ProjectShowcaseItem'
import { getPageTextsInCurrenctLanguageReactive } from '@/shared/languageCommon';
import { computed, onMounted, reactive, ref } from 'vue'

let projectsToShow: Array<ProjectShowcaseItem> = reactive([])
const mountProjectsArray = () =>{
  for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
      const projectItem = new ProjectShowcaseItem()
      projectItem.link = 'https://picsum.photos/200/200'
      projectItem.name = 'Lorem Picsum'
      projectsToShow.push(projectItem)
    }, i * 100)
  }
}
const projecListRef=ref(null)

onMounted(() => {
  const observer =  new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
      if(entry.isIntersecting && projectsToShow.length <= 5){
        mountProjectsArray()
      }
    })
  },{rootMargin:"-110px"})
  observer.observe(projecListRef.value as any)
})


let text= computed(()=> getPageTextsInCurrenctLanguageReactive())
</script>
<template>
  <section  class="img-outer-container">
    <h2 class="pb-8 font-bold">{{ text.projectShowcase.title }}</h2>
    <ul ref="projecListRef" class="img-containter">
      <TransitionGroup name="list">
        <li v-for="(project, index) in projectsToShow" :key="index">
          <figcaption >
            <!-- <label>{{ project.name }}</label> -->
            <img 
              class="image-project"
              :src="project.link" 
              width="250px" 
              height="250px" 
              loading="lazy" 
            />
          </figcaption>
        </li>
      </TransitionGroup>
    </ul>
  </section>
</template>
<style scoped>
.image-project{
  transition:all .2s ease-in-out;
  border-radius: 12px;
  
}
.image-project:is(:hover,:focus){
  scale:1.1;
  box-shadow: 1px 1px 10px 2px var(--detail-color-1);
}
.img-outer-container {
  background-color: var(--bg-color-1);
  width: 100%;
  text-align: center;
  padding: 2rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 200px;
  
}
.img-containter {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
}
img {
  width: 250px;
  height: 250px;
  border-radius: 4px;
}

@media (min-width: 600px) {
  .img-containter {
    width: 80%;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>
