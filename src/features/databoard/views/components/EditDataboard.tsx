import CountrySelectInput from '@components/shared/CountrySelectInput'
import { SupportedDashboardCountries } from '@lib/data'
import { Alert, Button, DatePicker, Form, Input, Select } from 'antd'
import { Databoard, DataboardDraft } from '@features/databoard/lib/types'
import { useMemo } from 'react'
import { DataboardToDataboardDraft } from '@features/databoard/lib/dto'
import { motion } from 'framer-motion'

type Props = {
  onSubmit: (values: DataboardDraft) => void
  isSubmitting: boolean
  dashboard?: Databoard
  errorMessage: string
}
function EditDataboard({
  onSubmit,
  isSubmitting,
  dashboard,
  errorMessage
}: Props) {
  const [form] = Form.useForm<any>()
  const onFinish = (values: DataboardDraft) => {
    onSubmit(values)
  }
  const Draft = useMemo(() => {
    return DataboardToDataboardDraft(dashboard)
  }, [dashboard])

  return (
    <Form
      layout={'vertical'}
      requiredMark={false}
      name="sign-form"
      className="w-full"
      form={form}
      initialValues={Draft}
      onFinish={onFinish}
    >
      <motion.div
        initial={{ opacity: 0, marginBottom: 0 }}
        animate={{
          opacity: errorMessage ? 1 : 0,
          marginBottom: errorMessage ? 10 : 0
        }}
      >
        <Alert type="error" showIcon message={errorMessage} />
      </motion.div>
      <CountrySelectInput
        placeholder={'Select a country'}
        name="country_id"
        label="Country"
        loading={false}
        countries={SupportedDashboardCountries}
      />
      <Form.Item
        label="Select Tags"
        name="tags"
        rules={[{ required: true, message: 'This field is required' }]}
      >
        <Select
          placeholder="Select tag(s) "
          mode="multiple"
          allowClear
          size="large"
        >
          <Select.Option value="Imports">Imports</Select.Option>
          <Select.Option value="Vessel Traking">Vessel Traking</Select.Option>
          <Select.Option value="Tenders">Tenders</Select.Option>
        </Select>
      </Form.Item>

      {/* Standard Subscription Rate */}
      <p className=" font-medium text-base mb-1 mt-5">Standard Subscription</p>
      <div
        className={
          'border-solid-200 border shadow-sm rounded-sm border-dashed p-5'
        }
      >
        <Form.Item
          label={'Annual Rate'}
          name={'standard_subscription_rate'}
          rules={[
            {
              required: true,
              message: 'This field is required!'
            }
          ]}
        >
          <Input placeholder="Enter Annual Rate" type="number" />
        </Form.Item>
        <div className="grid grid-cols-2 gap-5">
          <Form.Item
            name={'light_mode_s'}
            label="Light Mode Dashboard Url"
            rules={[
              { required: true, message: 'This field is required!' },
              { type: 'url', message: 'Enter a valid URL' }
            ]}
          >
            <Input placeholder=" Light Mode Dashboard Url" />
          </Form.Item>

          <Form.Item
            name={'dark_mode_s'}
            label="Dark Mode Dashboard Url"
            rules={[
              { required: true, message: 'This field is required!' },
              { type: 'url', message: 'Enter a valid URL' }
            ]}
          >
            <Input placeholder=" Dark Mode Dashboard Url" />
          </Form.Item>
        </div>
      </div>

      {/* Advanced Subscription Rate */}
      <p className=" font-medium text-base mt-7 mb-1 ">Advanced Subscription</p>
      <div
        className={
          'border-solid-200 border shadow-sm rounded-sm border-dashed p-5'
        }
      >
        <Form.Item
          label="Annual Rate"
          name={'advance_subscription_rate'}
          rules={[
            {
              required: true,
              message: 'This field is required!'
            }
          ]}
        >
          <Input placeholder="Enter Annual Rate" type="number" />
        </Form.Item>
        <div className="grid grid-cols-2 gap-5">
          <Form.Item
            name={'light_mode_a'}
            label="Light Mode Dashboard Url"
            rules={[
              { required: true, message: 'This field is required!' },
              { type: 'url', message: 'Enter a valid URL' }
            ]}
          >
            <Input placeholder=" Light Mode Dashboard Url" />
          </Form.Item>

          <Form.Item
            name={'dark_mode_a'}
            label="Dark Mode Dashboard Url"
            rules={[
              { required: true, message: 'This field is required!' },
              { type: 'url', message: 'Enter a valid URL' }
            ]}
          >
            <Input placeholder=" Dark Mode Dashboard Url" />
          </Form.Item>
        </div>
      </div>

      {/* Premium Subscription Rate */}
      <p className=" font-medium text-base mt-7 mb-1">Premium Subscription</p>
      <div
        className={
          'border-solid-200 border shadow-sm rounded-sm border-dashed p-5'
        }
      >
        <Form.Item
          label="Annual Rate"
          name={'premium_subscription_rate'}
          rules={[
            {
              required: true,
              message: 'This field is required!'
            }
          ]}
        >
          <Input placeholder="Enter Annual Rate" type="number" />
        </Form.Item>
        <div className="grid grid-cols-2 gap-5">
          <Form.Item
            name={'light_mode_p'}
            label="Light Mode Dashboard Url"
            rules={[
              { required: true, message: 'This field is required!' },
              { type: 'url', message: 'Enter a valid URL' }
            ]}
          >
            <Input placeholder=" Light Mode Dashboard Url" />
          </Form.Item>

          <Form.Item
            name={'dark_mode_p'}
            label="Dark Mode Dashboard Url"
            rules={[
              { required: true, message: 'This field is required!' },
              { type: 'url', message: 'Enter a valid URL' }
            ]}
          >
            <Input placeholder="Dark Mode Dashboard Url" />
          </Form.Item>
        </div>
      </div>
      {/* Last Update */}

      <div className="grid grid-cols-2 gap-5 pt-5 mt-2">
        <Form.Item
          label="Last Updated"
          name={'last_updated'}
          rules={[
            {
              required: true,
              message: 'This field is required!'
            }
          ]}
        >
          <DatePicker placeholder="Last Updated" className="w-full" />
        </Form.Item>
        <Form.Item
          name={'new_country'}
          label="Is New Country?"
          rules={[
            {
              required: true,
              message: 'This field is required!'
            }
          ]}
        >
          <Select placeholder="Yes or No">
            <Select.Option value="Yes">Yes</Select.Option>
            <Select.Option value="No">No</Select.Option>
          </Select>
        </Form.Item>
      </div>
      <Button
        type="primary"
        htmlType="submit"
        loading={isSubmitting}
        className="w-full mt-5"
      >
        Submit
      </Button>
    </Form>
  )
}

export default EditDataboard
