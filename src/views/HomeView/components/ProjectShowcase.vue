<script setup lang="ts">
import ProjectShowcaseItem from '@/classes/ProjectShowcaseItem'
import { onMounted, reactive, ref } from 'vue'

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
      console.info(entry)
      if(entry.isIntersecting && projectsToShow.length <= 5){
        mountProjectsArray()
      }
    })
  },{rootMargin:"-110px"})
  observer.observe(projecListRef.value as any)
})
</script>
<template>
  <section  class="img-outer-container">
    <h2   class="pb-8 ">Lorem ipsum dolor</h2>
    <ul ref="projecListRef" class="img-containter">
      <TransitionGroup name="list">
        <li v-for="(project, index) in projectsToShow" :key="index">
          <figcaption>
            <!-- <label>{{ project.name }}</label> -->
            <img :src="project.link" width="250px" height="250px" loading="lazy" />
          </figcaption>
        </li>
      </TransitionGroup>
    </ul>
  </section>
</template>
<style scoped>
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
