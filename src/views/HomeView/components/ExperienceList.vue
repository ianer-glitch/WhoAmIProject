<script setup lang="ts">
import ExperienceItemProps from '@/classes/ExperienceItemProps'
import ExperienceItem from '@/components/molecules/ExperienceItem.vue'
import { languageWatch } from '@/shared/languageCommon'

import { computed, onMounted, reactive, ref } from 'vue'

let experienceList: Array<ExperienceItemProps> = reactive([])

const experienceListRef = ref(null)
let listVisible = ref(false)

const props = defineProps({
  internalExperienceList: {
    type: Array<ExperienceItemProps>,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  height:{
    type:String,
    required:true,
  }
})

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !listVisible.value) {
          listVisible.value = true
          inicializeExperienceList(props.internalExperienceList)
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

// const containerHeigt = computed(() => `calc(90px* ${props.internalExperienceList.length})`)

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
    <h3 class="pb-8 pt-4 pt-4containerHeigt font-bold italic w-1/2">{{ props.title }}</h3>
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
  width: 400px;
  text-align: center;
  height: v-bind('height');
  box-shadow: 1px 1px 50px 1px var(--bg-color-1);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 12px;
  /* min-height: 400px; */
}

.experience-container h3::after {
  display: block;
  height: 2px;
  content: '';
  width: 100%;
  margin-top: 0.4rem;
  background-color: var(--detail-color-2);
}

.list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
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
