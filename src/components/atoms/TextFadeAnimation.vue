<script setup lang="ts">
const props = defineProps({
  text: String,
  animationDuration: {
    default: '0.6s',
    type: String
  }
})
</script>

<template>
  <div class="text-container">
    <div class="flex items-center justify-start text-center">
      <h1>{{ props.text }}</h1>
    </div>
  </div>
</template>

<style scoped>
.text-container {
  animation: expand v-bind('animationDuration') ease-in-out;
  overflow: hidden;
}

@keyframes expand {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
