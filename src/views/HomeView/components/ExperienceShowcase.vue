<script setup lang="ts">
import ExperienceItemProps from '@/classes/ExperienceItemProps'
import ExperienceItem from '@/components/molecules/ExperienceItem.vue'
import { getPageTextsInCurrenctLanguageReactive, languageWatch } from '@/shared/languageCommon'

import { computed, onMounted, reactive, ref } from 'vue'

let text = computed(() => getPageTextsInCurrenctLanguageReactive())

let experienceList: Array<ExperienceItemProps> = reactive([])

const experienceListRef = ref(null)
let listVisible = ref(false)

const yearsString = text.value.experienceShowcase.years
const months = text.value.experienceShowcase.months
const internalExperienceList: Array<ExperienceItemProps> = [
  //ClientSide
  new ExperienceItemProps('HTML', `2 ${yearsString}`, 'HTML5_Logo.svg'),
  new ExperienceItemProps('CSS', `2 ${yearsString}`, 'CSS3_logo_and_wordmark.svg'),
  new ExperienceItemProps('VueJs', `2 ${yearsString}`, 'vue-js-icon.svg'),
  new ExperienceItemProps('PrimeVue', `2 ${yearsString}`, 'primevue-logo.svg'),
  new ExperienceItemProps('JavasScript', `2 ${yearsString}`, 'js-logo.svg'),
  new ExperienceItemProps('Typescript', `6 ${months}`, 'Typescript_logo_2020.svg'),
  new ExperienceItemProps('Tailwind', `8 ${months}`, 'Tailwind-logo.svg'),
  
  //ServerSide
  new ExperienceItemProps('Docker', `8 ${months}`, '01-symbol_primary-blue-docker-logo.svg'),
  new ExperienceItemProps('Google Protobuf', `8 ${months}`, 'protobuff.png.pro'),
  new ExperienceItemProps('C#', `2 ${yearsString}`, 'Logo_C_sharp.svg'),
  new ExperienceItemProps('.Net', `2 ${yearsString}`, 'Net.png'),
  new ExperienceItemProps('LinQ', `2 ${yearsString}`, 'Net.png'),
  new ExperienceItemProps('Entity Framework', `2 ${yearsString}`, 'Net.png'),
  new ExperienceItemProps('Dapper ORM', `2 ${yearsString}`, 'dapper.png'),
  new ExperienceItemProps('SQL', `2 ${yearsString}`, 'sql-server.svg'),
  new ExperienceItemProps('Linux', `4 ${yearsString}`, 'Tux.svg')

  //CI&Cd
  //github
  //azureDevops
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !listVisible.value) {
          listVisible.value = true
          inicializeExperienceList(internalExperienceList)
        }
      })
    },
    { rootMargin: '10px' }
  )
  observer.observe(experienceListRef.value as any)
})

const inicializeExperienceList = (listToGetValues: Array<ExperienceItemProps>): void => {
  listToGetValues.forEach((item, index) => {
    setTimeout(() => {
      experienceList.push(item)
    }, 200 * index)
  })
}

const containerHeigt = computed(() => `calc(4.6rem* ${internalExperienceList.length})`)

const emit = defineEmits(['reloadList'])

let experienceListKey = ref(0)
languageWatch(() => {
  emit('reloadList')
})
</script>

<template>
  <section
    ref="experienceListRef"
    class="experience-container"
  >
    <h2 class="pb-8 font-bold">{{ text.experienceShowcase.title }}</h2>
    <ul class="list-container">
      <TransitionGroup name="exp-list">
        <li
          class="w-full flex items-center justify-center"
          v-for="(exp, index) in experienceList"
          :key="index + experienceListKey"
        >
          <ExperienceItem
            :title="exp.title"
            :subtitle="exp.subtitle"
            :img-name="exp.imgName"
          />
        </li>
      </TransitionGroup>
    </ul>
  </section>
</template>

<style scoped>
.experience-container {
  width: 80%;
  text-align: center;
  height: v-bind('containerHeigt');
}

.list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.6rem;
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
