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
  },
  isBackground: {
    type: Boolean,
    default: false
  }
})

const src = computed(() => getImageFilePath(props.imgName))
const bgPath = computed(() => `url(${getImageFilePath(props.imgName)})`)
</script>

<template>
  <img
    :src="!props.isBackground ? src : ''"
    :alt="alt"
    :width="width"
    :height="height"
    :loading="loading as any"
    :class="{ background: isBackground }"
  />
</template>

<style scoped>
.background {
  background-image: v-bind('bgPath');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
