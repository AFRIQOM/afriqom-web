import { Form, Input, Button, Alert } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AppRoutes } from '@lib/appRoutes'
import { SignInDraft } from '@auth/lib/types'

type Props = {
  signIn: (credential: SignInDraft) => void
  loading: boolean
  errorMessage: string
}

export const LoginForm = ({ signIn, loading, errorMessage }: Props) => {
  const onFinish = (values: SignInDraft) => {
    signIn(values)
  }

  return (
    <div>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
        requiredMark="optional"
      >
        <motion.div
          initial={{ opacity: 0, marginBottom: 0 }}
          animate={{
            opacity: errorMessage ? 1 : 0,
            marginBottom: errorMessage ? 10 : 0
          }}
        >
          <Alert type="error" showIcon message={errorMessage}></Alert>
        </motion.div>

        <Form.Item
          label="Email"
          name="username"
          rules={[{ required: true, message: 'This field is required!' }]}
        >
          <Input placeholder="Enter Email Address" size="large" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'This field is required!' }]}
        >
          <Input.Password
            placeholder="Enter Password"
            size="large"
            iconRender={(visible: any) =>
              visible ? (
                <EyeTwoTone rev={undefined} />
              ) : (
                <EyeInvisibleOutlined rev={undefined} />
              )
            }
          />
        </Form.Item>

        <Form.Item>
          <Button
            loading={loading}
            type={'primary'}
            size="large"
            htmlType="submit"
            className="w-full  text-white"
          >
            Sign in
          </Button>
        </Form.Item>
        <div className=" text-center">
          <Link to="/forgotPassword" className="text-[#047857] font-normal">
            Forget your password? Click here
          </Link>

          <p>
            Don&apos;t have an account?{' '}
            <Link
              to={AppRoutes.register}
              className="text-[#047857] font-semibold"
            >
              Create an account
            </Link>
          </p>
        </div>
      </Form>
    </div>
  )
}

export default LoginForm
