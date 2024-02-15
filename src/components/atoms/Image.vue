<script setup lang="ts">
import { getImageFilePath } from '@/shared/files'
import { computed } from 'vue'

const props = defineProps({
  imgName: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },

  imgDescription: {
    type: String,
    default: ''
  },

  showImgDescription: {
    type: Boolean,
    default: false
  },

  width: {
    type: String,
    default: ''
  },

  height: {
    type: String,
    default: ''
  },

  loading: {
    type: String,
    default: ''
  }
})

const src = computed(() => getImageFilePath(props.imgName))
</script>

<template>
    <img
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="loading as any"
    >
</template>

<style scoped>
</style>
