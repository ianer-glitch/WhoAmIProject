import type { IExperienceItemProps } from "@/components/molecules/ExperienceItem.vue";

export default class ExperienceItemProps implements IExperienceItemProps{
imgName?: String | undefined;

constructor(public title:String,public subtitle:String ) {
  
  
}
}