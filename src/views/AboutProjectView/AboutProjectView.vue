<script setup lang="ts">
    const props = defineProps({
      projetName:{
        type:String,
        default:""
      },

      description:{
        type:String,
        default:""
      },

      bannerImageName:{
        type:String,
        default:""
      },

      tecnologiesUsed:{
        type:Array<any>
      },

      publishedLink:{
        type:String,
        default:"",
      },

      githubLink:{
        type:String,
        default:""
      }

    })

</script>

<template>
  <div>
    a
  </div>
</template>

<style scoped>
</style>
