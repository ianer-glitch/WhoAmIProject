<script setup lang="ts"></script>

<template>
  <div class="rounter-container"
    :class="{'dark-theme':true}"
  >
    <RouterView />
  </div>
</template>
<style>
.rounter-container {
  width: 100%;
  height: 100%;
}
</style>
