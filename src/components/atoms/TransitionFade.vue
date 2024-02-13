<script setup lang="ts">
const props = defineProps({
  duration: {
    default: '.2s',
    type: String
  }
})
</script>

<template>
  <Transition name="fade">
    <slot></slot>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all v-bind('$props.duration') ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
