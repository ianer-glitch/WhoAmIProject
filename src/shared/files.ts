const getFilePath = (fileName: string): string => {
  return fileName
}

const getImageFilePath = ( fileName : string ) : string  =>{
  if(fileName){
    return `@/../public/assets/images/${fileName}`
  }
 return ""
} 

export {
  getImageFilePath,
  getFilePath

}
