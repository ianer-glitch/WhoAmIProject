<script setup lang="ts">
import getFilePath from '@/shared/files';
import { computed } from 'vue';

const props = defineProps({
  name:{
    type:String,
    deafult:""
  }
}) 

const iconPath = computed(()=>getFilePath(props.name ?? ""))

</script>
<template>
  <img :src="iconPath">
</template>