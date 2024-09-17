import { ConfigProvider, theme as antdTheme } from 'antd'
import useCssVariable from '@hooks/useCssVariable'
import { ThemeProvider } from '@app/components/ThemeProvider/context'
import { useTheme } from '@app/components/ThemeProvider/useTheme'

const ThemeProviderBody = (props: any) => {
  const { isDark } = useTheme()
  const colorPrimary = useCssVariable('--primary-default')
  const surfaceDefault = useCssVariable('--surface-default')
  const contentDefault = useCssVariable('--content-default')
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colorPrimary,
          borderRadius: 4,
          fontSize: 14,
          colorBgBase: surfaceDefault,
          colorTextBase: contentDefault
        }, //"#fab005"
        algorithm: isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm
        // algorithm: antdTheme.darkAlgorithm,
      }}
    >
      {props.children}
    </ConfigProvider>
  )
}

function AppThemeProvider(props: any) {
  return (
    <ThemeProvider>
      <ThemeProviderBody>{props.children}</ThemeProviderBody>
    </ThemeProvider>
  )
}

export default AppThemeProvider
