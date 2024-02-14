<script setup lang="ts"></script>

<template>
  <div class="background">
    <div class="item large"></div>
    <div class="item medium"></div>
    <div class="item small"></div>
  </div>
</template>

<style scoped>
.background {
  top: 0;
  left: 0;
  opacity: 0.95;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  position: absolute;
  pointer-events: none;
  background-color: var(--bg-color-1);
}

.item {
  position: absolute;

  right: 0;
  rotate: -45deg;
  width: 120vw;
  border-radius: 80px;
}

.large {
  bottom: 0;
  height: 50px;
  animation: movement 2s ease-in-out infinite;
  opacity: 0;
  background-color: var(--detail-color-1);
}

.medium {
  bottom: 40vh;
  height: 50px;
  animation: movement 2s 0.25s ease-in-out infinite;
  opacity: 0;
  background-color: var(--detail-color-2);
}

.small {
  bottom: 70vh;
  height: 15px;
  animation: movement 2s 0.5s ease-in-out infinite;
  opacity: 0;
  background-color: var(--detail-color-1);
}

@keyframes movement {
  from {
    opacity: 0;
    transform: translate(-100vh, 0);
  }

  to {
    transform: translate(100vh, 0);
    opacity: 1;
  }
}

@media (min-width: 600px) {
  .item {
    width: 50vw;
  }
}
</style>
