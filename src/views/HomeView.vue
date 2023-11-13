<script setup lang="ts">
import Icon from '@/components/atoms/Icon.vue';
import ButtonBase from '@/components/atoms/ButtonBase.vue'
import TextFadeAnimation from '@/components/atoms/TextFadeAnimation.vue'
import { ref } from 'vue';
import Header from '@/components/atoms/Header.vue';


let shouldMoveButton = ref(false)


</script>



<template>
  <div class="home-container">
    <Header/>
    <TextFadeAnimation text="Olá" />

    <TextFadeAnimation text="Meu nome é Ian R. Malavazi" animation-duration="4s" />

      <ButtonBase 
        @click="shouldMoveButton = !shouldMoveButton" 
        class="movement" 
        rounded
        :class="{'transform-button':shouldMoveButton}"
      >
        <Icon name="pi pi-arrow-right" is-icon-from-prime/>
    </ButtonBase>
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

.movement {
  animation: moveButton 2s ease-in-out;
}
.transform-button{
  animation: transformToOutside 1s ease-in-out ;
    
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

@keyframes transformToOutside{
  from{
    transform: translateX(0);
    opacity: 1;

  }
  to{
    
    transform: translateX(-300px) rotate(-180deg);
    opacity: 0;

  }

}
</style>
