<script setup lang="ts">
export interface ExperienceItemProps {
  title: String
  subtitle: String
  imgName?: String
}

const props = defineProps<ExperienceItemProps>()
</script>

<template>
  <div
    class="relative g-orange-500 overflow-hidden w-full h-20 outer-container flex items-center justify-start"
  >
    <div class="circle absolute"></div>
    <div class="flex w-full bg-teal-500 item">
      <h3 class="text">{{ props.title }}</h3>
      <h3 class="text">{{ props.subtitle }}</h3>
    </div>
  </div>
</template>

<style scoped>
.circle {
  border-radius: 999px;
  height: 5rem;
  width: 5rem;
  background-color: tomato;
  display: flex;
  align-items: center;
  justify-content: center;
}
.outer-container {
  border-radius: 60px;
  animation: expand 2s cubic-bezier(0, 0.49, 0.37, 1.16);
}
.item {
  height: calc(100% - 0.2rem);
  border-radius: 999px;
  padding-left: 6rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
