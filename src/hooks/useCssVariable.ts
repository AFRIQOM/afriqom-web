import { useState, useEffect } from 'react'
import { useTab } from '@chakra-ui/react'
import { useTheme } from '@app/components/ThemeProvider/useTheme'

const useCssVariable = (variableName: string) => {
  const { theme } = useTheme()
  const [variableValue, setVariableValue] = useState<string>('#fffff')

  useEffect(() => {
    const getVariableValue = () => {
      const root = document.documentElement
      const value = getComputedStyle(root).getPropertyValue(variableName)
      setVariableValue(value)
    }

    getVariableValue()

    // Optional: Add event listener for dynamic updates (if needed)
    window.addEventListener('resize', getVariableValue) // Example event

    return () => {
      window.removeEventListener('resize', getVariableValue) // Cleanup
    }
  }, [variableName, theme]) // Dependency array for variable name changes

  return variableValue
}

export default useCssVariable
