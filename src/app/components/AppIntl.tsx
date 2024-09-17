import { IntlProvider } from 'react-intl'

function AppIntl(props: any) {
  return (
    <IntlProvider
      // @ts-ignore
      messages={{}}
      locale={'en-GB'}
      key={'en'}
    >
      {props.children}
    </IntlProvider>
  )
}

export default AppIntl
