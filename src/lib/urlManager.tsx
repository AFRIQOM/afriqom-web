const redirectUrlKey = 'redirectUrl'

const urlManager = {
  setRedirectUrl: () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(redirectUrlKey, window.location.href)
    }
  },
  getRedirectUrl: (defaultValue: string = '/') => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(redirectUrlKey) || defaultValue
    }
    return defaultValue
  }
}

export default urlManager
