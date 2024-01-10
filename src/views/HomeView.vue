<script setup lang="ts">
import Icon from '@/components/atoms/Icon.vue'
import ButtonBase from '@/components/atoms/ButtonBase.vue'
import TextFadeAnimation from '@/components/atoms/TextFadeAnimation.vue'
import { ref } from 'vue'
import Header from '@/components/atoms/Header.vue'
import ExperienceItem from '@/components/molecules/ExperienceItem.vue'
import { getPageTextsInCurrenctLanguage } from '@/shared/languageCommon'

let shouldMoveButton = ref(false)
let text = ref(getPageTextsInCurrenctLanguage())
</script>

<template>
  <div class="home-container">
    <section>
      <h2>lorem Ipsum</h2>
      <h2>lorem Ipsum</h2>
      <h2>lorem Ipsum</h2>
    </section>
  </div>
   
</template>
<style scoped>
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


</style>
