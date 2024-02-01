<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

let internalValue = ref(false)

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    default: false,
    type: Boolean
  }
})

onMounted(() => {
  internalValue.value = props.modelValue
})

watch(
  () => props.modelValue,
  (modelValue : boolean) => {
    internalValue.value = modelValue
  }
)

const handleValueChange = () => {
  internalValue.value = !internalValue.value
  emit('update:modelValue', internalValue.value)
}
</script>
<template>
  
  <div @click="handleValueChange()" class="switch-container">
    <div
      class="dot-slider"
      :class="{ 'dot-slider-left': !internalValue, 'dot-slider-right': internalValue }"
    ></div>
  </div>
</template>
<style scoped>
.switch-container {
  background-color: var(--bg-color-1);
  width: 4rem;
  height: 2rem;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.1rem;
  position: relative;
  cursor: pointer;
  transition: all 0.2s;
}
.switch-container:hover {
  box-shadow: 0px 0px 15px var(--detail-color-1);
}
.dot-slider {
  background-color: var(--detail-color-2);
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 999px;
  position: absolute;
  transition: all 0.4s ease-in-out;
}
.dot-slider-left {
  transform: translateX(-1rem);
}

.dot-slider-right {
  transform: translateX(1rem);
}
</style>
