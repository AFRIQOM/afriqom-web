import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'

function RegisterFormOne() {
  return (
    <div>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'This field is required!' }]}
      >
        <Input placeholder="Enter your full name" size="large" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'This field is required!' },
          { type: 'email', message: 'Enter a valid email address' }
        ]}
      >
        <Input placeholder="Email Address" size="large" />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phone_number"
        rules={[
          { required: true, message: 'This field is required!' },
          {
            pattern: /^(\+?\d{1,4})?\d{10,}$/,
            message:
              'Please enter a valid phone number with at least 10 digits.'
          }
        ]}
      >
        <Input placeholder="Enter your Phone number" size="large" />
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
      <Form.Item
        label="Confirm Password"
        name="confirm_password"
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

export default RegisterFormOne
