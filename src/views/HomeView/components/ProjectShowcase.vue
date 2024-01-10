<script setup lang=ts>
import ProjectShowcaseItem from '@/classes/ProjectShowcaseItem';
import { onMounted, reactive } from 'vue';


let projectsToShow : Array<ProjectShowcaseItem> = reactive([])
onMounted(()=>{
  for(let i = 0 ; i<=5 ; i++){
    setTimeout(()=>{
      const projectItem =  new ProjectShowcaseItem()
      projectItem.link = "https://picsum.photos/200/200"
      projectItem.name="Lorem Picsum"
      projectsToShow.push(projectItem)

    },i*200)

  }
  

})
</script>
<template>
  <section class="img-outer-container" >
    <h2 class="p-8">Lorem ipsum dolor</h2>
    <div class="img-containter">
      <figcaption v-for="(project,index) in projectsToShow"
        :key="index"
      >
        <!-- <label>{{ project.name }}</label> -->
        <img  
          :src="project.link" 
          width="250px" 
          height="250px" 
          loading="lazy"
        >
      </figcaption>

    </div>
  </section>
</template>
<style scoped>
.img-outer-container{
  background-color:var(--bg-color-1) ;
  width: 100%;
  text-align: center;


}
.img-containter{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  
}
img{
  width: 250px;
  height: 250px;
  

}
</style>