import { useTranslateStorage } from '@/stores/translate'
import translate from '@/assets/translate.json'
import router from '@/router'
import { reactive, watch } from 'vue'

const getPageTextsInCurrenctLanguage = (languageIdentifier: string) => {
  const translateData = translate[languageIdentifier as keyof typeof translate]
  const pageName = router.currentRoute.value.name
  return translateData[pageName as keyof typeof translateData]
}

const getPageTextsInCurrenctLanguageReactive = (): any => {
  const store = useTranslateStorage()
  let pageTexts = reactive(getPageTextsInCurrenctLanguage(store.language))

  watch(
    () => store.language,
    (newValue) => {
      pageTexts = getPageTextsInCurrenctLanguage(newValue)
    }
  )

  return pageTexts
}

const languageWatch = (func : Function):void =>{
  const store = useTranslateStorage()

  watch(
    () => store.language,
    (newValue) => {
      func(newValue)
    }
  )
}

export { getPageTextsInCurrenctLanguageReactive,languageWatch }
