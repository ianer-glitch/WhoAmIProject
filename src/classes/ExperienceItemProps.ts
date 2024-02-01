import type { IExperienceItemProps } from "@/components/molecules/ExperienceItem.vue";

export default class ExperienceItemProps implements IExperienceItemProps{


constructor(public title:string,public subtitle:string,public imgName:string ) {
  
  
}
}