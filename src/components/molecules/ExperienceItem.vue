<script setup lang="ts">
import { getImageFilePath } from '@/shared/files';
import { computed } from 'vue';


export interface IExperienceItemProps {
  title: string
  subtitle: string
  imgName: string
}

const bgImage=computed(()=> `url(${getImageFilePath(props.imgName)})`)

const props = defineProps<IExperienceItemProps>()
</script>

<template>
  <div
    class="outer-container"
  >
  <div class="item">
      <div class="circle ">
        
      </div>
      <p class="text">{{ props.title }} {{ props.subtitle }}</p>
      
    </div>
  </div>
</template>

<style scoped>
.circle {
  
  height: 3.6rem;
  width: 3.6em;
  border: 2px solid var(--detail-color-1);
  border-radius: 100%;
  background-color:  white;
  transition: all .2s .08s ease-in-out;
  background-image: v-bind('bgImage');

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 120%;
  
  
  
  
  
}
.outer-container {
  animation: expand 2s cubic-bezier(0, 0.49, 0.37, 1.16);
  width: 100%;
  height: fit-content;
}
.item {
  width: 100%;
  background-color: var(--bg-color-1);
  border-radius:  999px  ;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  transition : all .2s ease-in-out;
}

.item:is(:hover,:focus){
  box-shadow: 1px 1px 10px var(--detail-color-2);
  scale: 1.1;
}
.item:is(:hover,:focus) .circle{
  scale: 1.4;
  box-shadow: 1px 1px 10px var(--bg-color-1);
  background-size: 80%;
  border: 1px solid var(--detail-color-1);
}
.text{
  padding: .8rem;
  font-size: 1.2rem;
  font-weight: bold;
}
.item .text {
  animation: opacity 2s ease-in-out;
}

@keyframes expand {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 100%;
    opacity: 1;
  }
}

@keyframes opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
