import { useState } from 'react'

export const useAppContainer = () => {
  const [isLoading, setIsLoading] = useState(true)

  const loadResourcesOnFirstLoad = () => {
    setIsLoading(false)
  }

  return {
    state: { isLoading: isLoading },
    actions: { loadResourcesOnFirstLoad }
  }
}
