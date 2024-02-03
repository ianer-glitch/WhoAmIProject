<script setup lang="ts">
import ExperienceItemProps from '@/classes/ExperienceItemProps'
import ExperienceItem from '@/components/molecules/ExperienceItem.vue'
import { getPageTextsInCurrenctLanguageReactive } from '@/shared/languageCommon'
import { computed, onMounted, reactive, ref } from 'vue'

let text = computed(() => getPageTextsInCurrenctLanguageReactive())

let experienceList: Array<ExperienceItemProps> = reactive([])
const experienceListRef = ref(null)
let listVisible = ref(false)

const yearsString = text.value.experienceShowcase.years
const months = text.value.experienceShowcase.months
const internalExperienceList: Array<ExperienceItemProps> = [
  new ExperienceItemProps('VueJs', `1,5 ${yearsString}`, 'vue-js-icon.svg'),
  new ExperienceItemProps('HTML', `1,5 ${yearsString}`, 'HTML5_Logo.svg'),
  new ExperienceItemProps('CSS', `1,5 ${yearsString}`, 'CSS3_logo_and_wordmark.svg'),
  new ExperienceItemProps('Typescript', `6 ${months}`, 'Typescript_logo_2020.svg'),
  new ExperienceItemProps('Docker', `6 ${months}`, '01-symbol_primary-blue-docker-logo.svg'),
  new ExperienceItemProps('JavasScript', `1,5 ${yearsString}`, 'Javascript-shield.svg'),
  new ExperienceItemProps('C#', `1,5 ${yearsString}`, 'Logo_C_sharp.svg'),
  new ExperienceItemProps('.Net', `1,5 ${yearsString}`, 'Net.png'),
  new ExperienceItemProps('LinQ', `1,5 ${yearsString}`, 'Net.png'),
  new ExperienceItemProps('Entity Framework', `1,5 ${yearsString}`, 'Net.png'),
  new ExperienceItemProps('Dapper ORM', `1,5 ${yearsString}`, 'dapper.png'),
  new ExperienceItemProps('Google Protobuf', `8 ${months}`, 'protobuff.png.pro'),
  new ExperienceItemProps('SQL', `1,5 ${yearsString}`, 'sql-server.svg'),
  new ExperienceItemProps('Linux', `4 ${yearsString}`, 'Tux.svg')
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
          :key="index"
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
