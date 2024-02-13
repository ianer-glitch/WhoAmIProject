<script setup lang="ts"></script>

<template>
  <button>
    <i class="pi pi-arrow-left"></i>
  </button>
</template>

<style scoped>
button {
  background-color: var(--bg-color-1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 12px;
  color: var(--text-color-1);
  transition: all 0.2s ease-in-out;
}

button:is(:hover, :active) {
  scale: 1.4;
  box-shadow: 0px 0px 8px var(--text-color-1);
}
</style>
