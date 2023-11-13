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
  <button class="button" :class="{ primary: props.primary, secondary: props.secondary, rounded: props.rounded }">
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
  transition: all .4s ease-in-out  ;
  
}
.primary:hover {
  background-color: var(--detail-color-2);
  box-shadow: 0px 0px 15px var(--detail-color-1);
}
.secondary {
}
.rounded {
  border-radius: 5rem;
}

.disabled{

}
</style>
