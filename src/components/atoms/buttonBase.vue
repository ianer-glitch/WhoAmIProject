<script setup lang="ts">
const props = defineProps({
  rounded: {
    type: Boolean,
    default: false
  },
  primary: {
    type: Boolean,
    default: true
  },
  secondary: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <button class="button" :class="{ primary: primary, secondary: secondary, rounded: rounded }">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  background-color: tomato;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.primary {
}

.secondary {
}
.rounded {
  border-radius: 5rem;
}
</style>
