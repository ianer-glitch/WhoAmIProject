<script setup lang="ts">
export interface IExperienceItemProps {
  title: String
  subtitle: String
  imgName?: String
}

const props = defineProps<IExperienceItemProps>()
</script>

<template>
  <div
    class="outer-container"
  >
  <div class="item">
      <div class="circle "></div>
      <p class="text">{{ props.title }} {{ props.subtitle }}</p>
      
    </div>
  </div>
</template>

<style scoped>
.circle {
  
  height: 3.6rem;
  width: 3.6em;
  background-color: var(--detail-color-1);
  border-radius: 100%;
  
  
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
}
.text{
  padding: 1.2rem;
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
