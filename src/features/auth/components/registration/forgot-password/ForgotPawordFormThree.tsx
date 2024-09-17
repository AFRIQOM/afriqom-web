import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Form, Input } from 'antd'
import React, { useEffect } from 'react'
type Props = {
  setTitle: any
}
function ForgotPawordFormThree({ setTitle }: Props) {
  useEffect(() => {
    setTitle('New Password')
  }, [])
  return (
    <div>
      <p className="py-5">
        Set the new password for your account so you can login and access all
        features
      </p>
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
      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        rules={[
          {
            required: true,
            message: 'This field is required'
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(
                new Error('The new password that you entered do not match!')
              )
            }
          })
        ]}
      >
        <Input.Password
          placeholder="Confirm your password"
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
    </div>
  )
}

export default ForgotPawordFormThree
