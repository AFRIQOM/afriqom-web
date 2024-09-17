import { isArray, isNull, isObject, isUndefined } from 'lodash'
export function convertModelToFormData(model: any) {
  const formData = new FormData()
  if (isObject(model)) {
    for (const [key, value] of Object.entries(model)) {
      if (isArray(value)) {
        // @ts-ignore
        for (let i = 0; i < value.length; i++) {
          // @ts-ignore
          formData.append(`${key}[${i}]`, value[i])
        }
      } else if (isObject(value) && !(value instanceof File)) {
        // formData.append(`${key}`, JSON.stringify(value))
        for (const [objectKey, objectValue] of Object.entries(value)) {
          // @ts-ignore
          formData.append(`${key}[${objectKey}]`, objectValue)
        }
      } else if (value instanceof File) {
        formData.append(key, value, value.name)
      } // @ts-ignore
      else if (!isNull(value) && !isUndefined(value)) {
        // @ts-ignore
        formData.append(key, value)
      }
    }
  }
  return formData
}
