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
  },

  disabled: {
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
  
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.primary {
  background-color: var(--detail-color-1);
  transition: all .2s ease-in-out;
  
}
.primary:hover {
  background-color: var(--detail-color-2);
}
.secondary {
}
.rounded {
  border-radius: 5rem;
}

.disabled{

}
</style>
