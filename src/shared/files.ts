const getFilePath = (fileName: string): string => {
  return fileName
}

const getImageFilePath = (fileName: string): string => {
  if (fileName) {
    const path = new URL(`../assets/images/${fileName}`, import.meta.url).href
    return path
  }
  return ''
}

export { getImageFilePath, getFilePath }
