<script setup lang="ts">
import ExperienceItemProps from '@/classes/ExperienceItemProps';
import ExperienceItem from '@/components/molecules/ExperienceItem.vue';
import { getPageTextsInCurrenctLanguageReactive } from '@/shared/languageCommon';
import { computed, onMounted, reactive, ref } from 'vue';

let text= computed(()=> getPageTextsInCurrenctLanguageReactive())

let experienceList : Array<ExperienceItemProps> = reactive([])
const experienceListRef = ref(null)
let listVisible  = ref(false)
onMounted(()=>{
  const yearsString = text.value.experienceShowcase.years
  const months = text.value.experienceShowcase.months
  const internalExperienceList :Array<ExperienceItemProps> = [
    new ExperienceItemProps("VueJs",`1,5 ${yearsString}`),  
    new ExperienceItemProps("HTML",`1,5 ${yearsString}`),  
    new ExperienceItemProps("CSS",`1,5 ${yearsString}`),  
    new ExperienceItemProps("Typescript",`6 ${months}`),
    new ExperienceItemProps("JavasScript",`1,5 ${yearsString}`),
    new ExperienceItemProps("C#",`1,5 ${yearsString}`),  
    new ExperienceItemProps(".Net",`1,5 ${yearsString}`),
    new ExperienceItemProps("LinQ",`1,5 ${yearsString}`),
    new ExperienceItemProps("Dapper ORM",`1,5 ${yearsString}`),
    new ExperienceItemProps("Google Protobuf",`8 ${months}`),
    new ExperienceItemProps("Entity Framework",`1,5 ${yearsString}`),
    new ExperienceItemProps("SQL",`1,5 ${yearsString}`), 
    new ExperienceItemProps("Linux",`4 ${yearsString}`),   
    ]

    const observer =  new IntersectionObserver((entries)=>{
      entries.forEach(entry =>{
      if(entry.isIntersecting && !listVisible.value ){
        listVisible.value=true
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
  <h2 class="pb-8">{{ text.experienceShowcase.title }}</h2>
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