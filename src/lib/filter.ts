export function AppendFilterPrefix(inputObj: any, prefix = 'filter') {
  if (inputObj) {
    const resultObj: any = {}
    for (const key in inputObj) {
      if (inputObj.hasOwnProperty(key)) {
        resultObj[`${prefix}[${key}]`] = inputObj[key]
      }
    }
    return resultObj
  }
  return {}
}
