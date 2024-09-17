import CountrySelectInput from '@components/shared/CountrySelectInput'
import GlobalSelect from '@components/shared/GlobalSelect'
import { potentialPositions } from '@lib/data'
import { Form, Input } from 'antd'
import countryList from 'react-select-country-list'
import { useMemo } from 'react'

function RegisterFormTwo() {
  const allCountries = useMemo(
    () =>
      countryList()
        .getData()
        .map((country) => ({
          label: country.label,
          value: country.value
        })),
    []
  )

  return (
    <div>
      <Form.Item
        label="Company name"
        name="company_name"
        rules={[{ required: true, message: 'This field is required!' }]}
      >
        <Input placeholder="Enter your company name" size="large" />
      </Form.Item>

      <Form.Item
        label="Company Position"
        name="company_position"
        rules={[{ required: true, message: 'This field is required!' }]}
      >
        <GlobalSelect
          options={potentialPositions?.map((position) => ({
            label: position,
            value: position
          }))}
          allowClear
          size="large"
          placeholder="Enter Position in Company"
        />
      </Form.Item>
      <Form.Item
        label="Country"
        name="country_id"
        rules={[{ required: true, message: 'This field is required!' }]}
      >
        <GlobalSelect
          placeholder={'Select a country'}
          loading={false}
          options={allCountries}
        />
      </Form.Item>
    </div>
  )
}

export default RegisterFormTwo
