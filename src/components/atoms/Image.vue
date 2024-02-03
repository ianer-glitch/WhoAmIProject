<script setup lang="ts">
import { getImageFilePath } from '@/shared/files';
import { computed } from 'vue';

 
 const props = defineProps({
  imgName:{
    type:String,
    default:"",
  },
  alt:{
    type:String,
    default:"",
  },

  imgDescription:{
    type:String,
    default:"",
  },

  showImgDescription:{
    type:Boolean,
    default:false,
  }

 })

 const src = computed(()=>getImageFilePath(props.imgName))
</script>

<template>
  <figure>
    <img :src="src" :alt="alt">
    <figcaption :class="{'hide-figcaption':!props.showImgDescription}">{{ props.imgDescription }}</figcaption>
  </figure>
</template>

<style scoped>
.hide-figcaption{
  /* hide like this to be useful for accessibility tools */
  position: absolute;
  left:-999px;

}

</style>