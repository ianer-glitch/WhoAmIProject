<script setup lang="ts">
import ContactMeItem from '@/components/atoms/ContactMeItem.vue';
import { getPageTextsInCurrenctLanguageReactive } from '@/shared/languageCommon';
import { computed } from 'vue';

let text= computed(()=> getPageTextsInCurrenctLanguageReactive())

const redirectToContact = (link:string) :void =>{
  if(link){
    window.open(link)
  }
}
</script>
<template>
  
    <section class="about-container">
        <h2 class="pb-8 contact-title font-bold"  >{{ text.contactMe.title }}</h2>
        <ul class="contact-me-item-container">
          
            <ContactMeItem 
              image-name="LinkedIn_icon.svg"
              @click="redirectToContact('https://www.linkedin.com/in/ian-repker-malavazi-2b440a180')"
            />
          
          <ContactMeItem 
            image-name="github.svg"
            @click="redirectToContact('https://github.com/ianer-glitch')"
          />
        </ul>
    </section>
</template>

<style>


.contact-me-item-container{
  display: flex;
  flex-flow: row wrap;
  width: fit-content;
  height: fit-content;
  align-items: center;
  justify-content: center;
  gap:2rem;
  background-color: #fff;
  padding: .6rem 1rem;
  border-radius: 8px;
  

}
.about-container{
  display:  flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color:var(--bg-color-1);
  width: 100%;
  height: 100%;
  padding: 2rem 0;
}

.contact-title{
  animation: skew 2s ease-in-out infinite backwards;
}

@keyframes skew {
  
  0%{
    transform: skew(0deg);
  }
  30%{
    transform: skew(10deg);
  }
  60%{
    transform: skew(-10deg);
  }
  90%{
    transform: skew(0deg);
  }
}
</style>