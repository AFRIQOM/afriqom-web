import Layout from '@auth/components/Layout'
import { useLogin } from '@auth/hooks/useLogin'
import LoginForm from '@auth/components/LoginForm'
import { SignInBody, SignInDraft } from '@auth/lib/types'
import { SignInDraftToSignInbody } from '@auth/lib/dto'

const styles = {
  background: 'linear-gradient(to right, #024431 0%, #2BA94C 30%)'
}
const Login = () => {
  const login = useLogin()
  const onLogin = (values: SignInDraft) => {
    const body: SignInBody = SignInDraftToSignInbody(values)
    login.actions.login(body)
  }
  return (
    <Layout title="Log in to Afriqom">
      <LoginForm
        signIn={onLogin}
        loading={login.state.isLoading}
        errorMessage={login.state.errorMessage}
      />
    </Layout>
  )
}

export default Login
