import { useTranslateStorage } from '@/stores/translate'
import translate from '@/assets/translate.json'
import router from '@/router'

const  getPageTextsInCurrenctLanguage =  () =>{
  const store = useTranslateStorage()
  const translateData =  translate[store.language as keyof typeof translate]
  const pageName = router.currentRoute.value.name
  return  translateData[pageName as keyof typeof translateData] 
}

export {
  getPageTextsInCurrenctLanguage,

}