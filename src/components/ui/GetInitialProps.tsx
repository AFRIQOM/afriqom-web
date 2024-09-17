export function getInitials(inputString: string) {
  const words = inputString.split(' ').filter((word) => word.length >= 2)
  if (words.length === 1) {
    return inputString.slice(0, 2)
  } else if (words.length >= 2) {
    return words[0][0] + words[1][0]
  } else {
    return ''
  }
}
