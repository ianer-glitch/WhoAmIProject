<!-- <script setup lang="ts">
import getFilePath from '@/shared/files'
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    deafult: ''
  },

  isIconFromPrime: {
    type: Boolean,
    deafult: false
  }
})

const iconPath = computed(() => getFilePath(props.name ?? ''))
</script>
<template>
  <i :class="name" v-if="isIconFromPrime"></i>
  <img :src="iconPath" v-else />
</template> -->
