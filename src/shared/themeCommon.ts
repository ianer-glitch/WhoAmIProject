import { useThemeStore } from "@/stores/themeStore"
import { watch } from "vue"

const themeWatch = (func: Function): void => {
  const store = useThemeStore()

  watch(
    () => store.currenctTheme,
    (newValue) => {
      func(newValue)
    }
  )
}

export {themeWatch}