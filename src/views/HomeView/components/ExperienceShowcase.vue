<script setup lang="ts">
import ExperienceItemProps from '@/classes/ExperienceItemProps';
import ExperienceItem from '@/components/molecules/ExperienceItem.vue';
import { onMounted, reactive, ref } from 'vue';

let experienceList : Array<ExperienceItemProps> = reactive([])
const experienceListRef = ref(null)
onMounted(()=>{
    const internalExperienceList :Array<ExperienceItemProps> = [
      new ExperienceItemProps("VueJs","1,5"),  
      new ExperienceItemProps("SQL","1,5"),  
      new ExperienceItemProps(".Net","1,5"),  
    ]

    const observer =  new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
      if(entry.isIntersecting && internalExperienceList.length !== experienceList.length){
        inicializeExperienceList(internalExperienceList)
      }
    })
  },{rootMargin:"10px"})
  observer.observe(experienceListRef.value as any)

})

const inicializeExperienceList = (listToGetValues: Array<ExperienceItemProps>) : void => {
  listToGetValues.forEach((item,index) => {
    setTimeout(()=>{
      experienceList.push(item)
    },200 * index)
  })

}

</script>

<template>
<section class="experience-container">
  <h2 class="pb-8">Lorem Ipsum</h2>
  <ul ref="experienceListRef" class="list-container">
    <TransitionGroup name="exp-list">
      <li class="w-full flex items-center justify-center" v-for="(exp,index) in experienceList"
        :key = index
      >
        <ExperienceItem 
          :title="exp.title"
          :subtitle="exp.subtitle"
        />
      </li>
    </TransitionGroup>
  </ul>
</section>
</template>

<style scoped>
.experience-container{
  width: 80%;
  text-align: center;
  
}

.list-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: .6rem;
}

.exp-list-enter-active,
.exp-list-leave-active {
  transition: all 0.5s ease;
}
.exp-list-enter-from,
.exp-list-leave-to {
  opacity: 0;
}
</style>