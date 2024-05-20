<script setup lang="ts">
import ExperienceItemProps from '@/classes/ExperienceItemProps'
import { getPageTextsInCurrenctLanguageReactive } from '@/shared/languageCommon'

import { computed } from 'vue'
import ExperienceList from './ExperienceList.vue'

const emit = defineEmits(['reloadList'])

let text = computed(() => getPageTextsInCurrenctLanguageReactive())

const yearsString = text.value.experienceShowcase.years
const months = text.value.experienceShowcase.months
const learning = text.value.experienceShowcase.learning

const expListClientSide: Array<ExperienceItemProps> = [
  new ExperienceItemProps('HTML', `2 ${yearsString}`, 'HTML5_Logo.svg'),
  new ExperienceItemProps('CSS', `2 ${yearsString}`, 'CSS3_logo_and_wordmark.svg'),
  new ExperienceItemProps('VueJs', `2 ${yearsString}`, 'vue-js-icon.svg'),
  new ExperienceItemProps('PrimeVue', `2 ${yearsString}`, 'primevue-logo.svg'),
  new ExperienceItemProps('JavasScript', `2 ${yearsString}`, 'js-logo.svg'),
  new ExperienceItemProps('Tailwind', `8 ${months}`, 'Tailwind-logo.svg'),
  new ExperienceItemProps('Typescript', `6 ${months}`, 'Typescript_logo_2020.svg')
]

const expListServerSide: Array<ExperienceItemProps> = [
  new ExperienceItemProps('Linux', `4 ${yearsString}`, 'Tux.svg'),
  new ExperienceItemProps('C#', `2 ${yearsString}`, 'Logo_C_sharp.svg'),
  new ExperienceItemProps('.Net', `2 ${yearsString}`, 'Net.png'),
  new ExperienceItemProps('LinQ', `2 ${yearsString}`, 'Net.png'),
  new ExperienceItemProps('Entity Framework', `2 ${yearsString}`, 'Net.png'),
  new ExperienceItemProps('Dapper ORM', `2 ${yearsString}`, 'dapper.png'),
  new ExperienceItemProps('SQL', `2 ${yearsString}`, 'sql-server.svg'),
  new ExperienceItemProps('Docker', `8 ${months}`, '01-symbol_primary-blue-docker-logo.svg'),
  new ExperienceItemProps('Google Protobuf', `8 ${months}`, 'protobuff.png.pro')
]

const expListCiCd: Array<ExperienceItemProps> = [
  new ExperienceItemProps('GitHub', `3 ${yearsString}`, 'github.svg'),
  new ExperienceItemProps('GitLab', `2 ${yearsString}`, 'gitlab-logo-500.svg'),
  new ExperienceItemProps('Microsoft Azure DevOps', `6 ${months}`, 'azure-devops-svgrepo-com.svg'),
  new ExperienceItemProps('Microsoft Azure', `6 ${months}`, 'Microsoft_Azure.svg')
]

const expListLearning : Array<ExperienceItemProps> =[
  new ExperienceItemProps('Python', "", 'python.svg'),
  new ExperienceItemProps('Vitest', "", 'vitest.svg'),
  new ExperienceItemProps('xUnity', "", 'Net.png'),
]


</script>

<template>
  <div class="flex items-center justify-center w-full flex-col">
    <h2 class="pb-8 font-bold">{{ text.experienceShowcase.title }}</h2>

    <ul class="experience-list-container">
      <li>
        <ExperienceList
          :internal-experience-list="expListClientSide"
          title="Client Side"
          @reload-list="emit('reloadList')"
          height="600px"
        />
      </li>
      <li>
        <ExperienceList
          :internal-experience-list="expListServerSide"
          title="Server Side"
          @reload-list="emit('reloadList')"
          height="700px"
          />
      </li>
      <li>
        <ExperienceList
          :internal-experience-list="expListCiCd"
          title="Cloud & CI / CD"
          @reload-list="emit('reloadList')"
          height="400px"
          />
      </li>
      <li>
        <ExperienceList
          :internal-experience-list="expListLearning"
          :title="learning"
          @reload-list="emit('reloadList')"
          height="300px"
          />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.experience-list-container {
  display: flex;
  width: 80%;
  height: fit-content;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 2.8rem;
}

@media (min-width: 1024px) {
  .experience-list-container {
    justify-content: space-between;
    gap: 0rem;
  }
}
</style>
