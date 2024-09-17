import { Form, Select, SelectProps } from 'antd'
import React, { useState } from 'react'
import { Country } from '@lib/types'
import GlobalSelect from './GlobalSelect'

type Props = {
  name: string
  countries?: Country[]
  label?: string | undefined
  placeholder?: string
} & SelectProps
export default function CountrySelectInput({
  countries,
  name,
  label,
  placeholder,
  ...props
}: Props) {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={[
        {
          required: true,
          message: 'This field is required'
        }
      ]}
    >
      <GlobalSelect
        placeholder={placeholder}
        options={countries?.map((country) => ({
          label: country.name,
          value: country.id
        }))}
        size="large"
        className="w-full"
        allowClear
        {...props}
      />
    </Form.Item>
  )
}
