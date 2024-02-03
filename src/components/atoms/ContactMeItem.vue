<script setup lang="ts">
import { getImageFilePath } from '@/shared/files'

const props = defineProps({
  imageName: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <li>
    <figcaption>
      <img
        class="contact-me-img"
        :src="getImageFilePath(props.imageName)"
        :alt="alt"
      />
    </figcaption>
  </li>
</template>

<style scoped>
.contact-me-img {
  width: 4rem;
  height: auto;
  transition: all 0.2s ease-in-out;
  /* filter:var(--filter-bg-3) */
}

.contact-me-img:is(:hover, :active) {
  scale: 1.2;
  cursor: pointer;
}
</style>
