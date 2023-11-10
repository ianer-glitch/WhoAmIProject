<script setup lang="ts">
import ButtonBase from '@/components/atoms/buttonBase.vue'
import TextFadeAnimation from '@/components/atoms/textFadeAnimation.vue'
</script>

<template>
  <div class="home-container">
    <TextFadeAnimation text="Olá," />

    <textFadeAnimation text="Meu nome é Ian R. Malavazi" animation-duration="2s" />

    <textFadeAnimation text="Sou desenvolvedor Web" animation-duration="3s" />

    <ButtonBase class="movement" rounded>
      <h3>Botão</h3>
    </ButtonBase>
  </div>
</template>
<style scoped>
.home-container {
  background-color: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 4rem;
}
.movement {
  animation: moveButton 1s ease-in-out;
}

@keyframes moveButton {
  0% {
    transform: translateY(200px) rotate(0deg);
  }
  100% {
    transform: translateY(0px) rotate(360deg);
  }
}

@media (min-width: 300px) {
}
</style>
