import { Alert, Button, Form } from 'antd'
import { useState } from 'react'
import RegisterFormOne from './RegisterFormOne'
import cn from 'classnames'
import RegisterFormTwo from './RegisterFormTwo'
import { appConfig } from '@lib/appConfig'
import { Link } from 'react-router-dom'
import { AccountFormDraft } from '@auth/lib/types'
import { motion } from 'framer-motion'

type RegisterFormStep = 'Form1' | 'Form2' | 'Success'
type Props = {
  signUp: (credential: AccountFormDraft) => void
  loading: boolean
  errorMessage: string
}
const RegistrationForm = ({ signUp, loading, errorMessage }: Props) => {
  const [step, setStep] = useState<RegisterFormStep>('Form1')
  const [form] = Form.useForm<any>()

  const handlePrev = () => {
    let currentStep = step
    if (step === 'Form2') {
      currentStep = 'Form1'
    }
    setStep(currentStep)
  }

  const handleNext = (e: any) => {
    e.preventDefault()
    form.validateFields().then(() => {
      let currentStep = step
      if (step === 'Form1') {
        currentStep = 'Form2'
      }
      setStep(currentStep)
    })
  }

  const onFinish = (values: AccountFormDraft) => {
    form.validateFields().then(() => {
      signUp(form.getFieldsValue(true))
    })
  }

  return (
    <div>
      <Form
        name="sign-form"
        form={form}
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
        {step === 'Form1' && <RegisterFormOne />}
        {step === 'Form2' && <RegisterFormTwo />}
        <div className={cn('py-4  flex justify-between items-center gap-10')}>
          {step == 'Form2' && <Button onClick={handlePrev}>Previous</Button>}
          {step === 'Form1' && (
            <Button className={'w-full'} type="primary" onClick={handleNext}>
              Next
            </Button>
          )}
          {step === 'Form2' && (
            <Button type={'primary'} htmlType="submit" loading={loading}>
              Create
            </Button>
          )}
        </div>

        {step !== 'Success' && (
          <div className="text-center">
            <p>
              Already have an account?{' '}
              <Link
                to={`/${appConfig.authPrefix}/login`}
                className="font-semibold text-[#047857]"
              >
                Login
              </Link>
            </p>
          </div>
        )}
      </Form>
    </div>
  )
}

export default RegistrationForm
