<script setup lang="ts">
import { useTranslateStorage } from '@/stores/translate';
import { ref } from 'vue';

const store = useTranslateStorage()

let internalValue = ref(true)
</script>
<template>
  
   <div class="language-container">
     <h4 class="item" @click="store.language='pt-br'" :class="{active:store.language=='pt-br'}" >pt-br</h4>
     <h4 class="item" @click="store.language='en'" :class="{active:store.language=='en'}" >en-us</h4>
    </div>
    </template>
<style scoped>

.language-container{
  display: flex;
  align-items: center;
  justify-items: space-between;
  width: fit-content;
  gap:1rem;
  
  border-radius: 16px;
  
  height: 2rem;
}
.item{
cursor: pointer;

}
.active{
  background-color: aqua;
  padding: .2rem;
  height: 100%;
  border-radius: 16px ;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>