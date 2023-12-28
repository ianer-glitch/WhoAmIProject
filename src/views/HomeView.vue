<script setup lang="ts">
import Icon from '@/components/atoms/Icon.vue'
import ButtonBase from '@/components/atoms/ButtonBase.vue'
import TextFadeAnimation from '@/components/atoms/TextFadeAnimation.vue'
import { reactive, ref, watch } from 'vue'
import Header from '@/components/atoms/Header.vue'
import translate from '@/../public/assets/translate.json'
import { useTranslateStorage } from '@/stores/translate'
import ExperienceItem from '@/components/molecules/ExperienceItem.vue'

let shouldMoveButton = ref(false)
const store = useTranslateStorage()
let text = ref(translate[store.language as keyof typeof translate].HomeView)

watch(
  () => store.language,
  (language) => (text.value = reactive(translate[language as keyof typeof translate].HomeView))
)
</script>

<template>
  <div class="home-container">
    <ExperienceItem title="VueJs" subtitle="1.5 Anos" />
    <Header></Header>
    <TextFadeAnimation :text="text.title" />

    <TextFadeAnimation :text="text.myName" animation-duration="4s" />

    <ButtonBase
      @click="shouldMoveButton = !shouldMoveButton"
      class="movement"
      rounded
      :class="{ 'transform-button': shouldMoveButton }"
    >
      <Icon class="icon" name="pi pi-arrow-right" is-icon-from-prime />
    </ButtonBase>
  </div>
</template>
<style scoped>
.icon {
  color: #fff;
}
.home-container {
  background-color: var(--bg-color-1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 4rem;
}

.movement {
  animation: moveButton 2s ease-in-out;
}
.transform-button {
  animation: transformToOutside 1s ease-in-out;
}
@keyframes moveButton {
  0% {
    opacity: 0;
    transform: translateY(200px) rotate(0deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0px) rotate(360deg);
  }
}

@keyframes transformToOutside {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-300px) rotate(-180deg);
    opacity: 0;
  }
}
</style>
