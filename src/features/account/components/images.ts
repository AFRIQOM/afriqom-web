export type PickedImageList = {
  file?: File
  image?: string
  id?: string
}[]

export type ImageEntity = PickedImageList[0]

export const getBase64 = (file: File): Promise<string> => {
  const reader = new FileReader()
  return new Promise((resolve) => {
    reader.addEventListener('load', () => resolve(String(reader.result)))
    reader.readAsDataURL(file)
  })
}

export const getListFiles = (files: FileList): Promise<PickedImageList> => {
  const promiseFiles: Array<Promise<string>> = []
  for (let i = 0; i < files.length; i += 1) {
    promiseFiles.push(getBase64(files[i]))
  }
  return Promise.all(promiseFiles).then((fileListBase64: Array<string>) => {
    const fileList: PickedImageList = fileListBase64.map((base64, index) => ({
      image: base64,
      id: new Date().toISOString(),
      file: files[index]
    }))
    return fileList
  })
}
