import type { IExperienceItemProps } from "@/components/molecules/ExperienceItem.vue";

export default class ExperienceItemProps implements IExperienceItemProps{


constructor(public title:String,public subtitle:String,public imgName:String ) {
  
  
}
}