import { Form, Input } from 'antd'
import React, { useEffect } from 'react'

function ForgotPawordFormOne() {
  return (
    <div className="py-12">
      <p className="py-5">
        Enter your email for the verification process we send 4 digits code to
        your email
      </p>
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
    </div>
  )
}

export default ForgotPawordFormOne
