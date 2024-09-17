import ImageBoxInput from '../../../components/ImageInput'
import { Alert, Button, Divider, Form, Input, Select } from 'antd'
import { useAuth } from '@auth/hooks/useAuth'
import { useEffect, useMemo } from 'react'
import { OrganizationToOrganizationDraft } from '@features/organization/lib/dto'
import {
  Organization,
  OrganizationDraft
} from '@features/organization/lib/types'
import { motion } from 'framer-motion'
import { hasPermission } from '@lib/user-roles'
import countryList from 'react-select-country-list'

type Props = {
  isSubmitting: boolean
  onSubmit: (value: OrganizationDraft) => void
  errorMessage: string
  currentOrganisation: Organization
}
function ProfileForm({
  isSubmitting,
  onSubmit,
  currentOrganisation,
  errorMessage
}: Props) {
  const [form] = Form.useForm()
  const allCountries = countryList().getData()
  const onFinish = (values: OrganizationDraft) => {
    onSubmit(values)
  }
  const { state } = useAuth()
  const Draft = useMemo(() => {
    return OrganizationToOrganizationDraft(currentOrganisation)
  }, [currentOrganisation])

  const canEditAccountProfile = hasPermission(
    state.user,
    'canEditAccountProfile'
  )

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      name="profile_form"
      initialValues={Draft}
      className="-mt-8"
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
        label="Name"
        name="name"
        className="font-bold  my-2"
        rules={[
          { required: true, message: 'This field is required' },
          {
            validator: (_, value) => {
              if (value.length > 50) {
                return Promise.reject(
                  'Organization should not exceed 50 characters'
                )
              }
              return Promise.resolve()
            }
          }
        ]}
      >
        <Input
          showCount={true}
          placeholder="Choco Fam Limited"
          disabled={!canEditAccountProfile}
        />
      </Form.Item>
      <span className="text-content-secondary">
        Your organization or company Name
      </span>
      <Divider className="mt-1" />
      <Form.Item
        name="logo"
        label="Logo"
        className="my-2 flex items-center font-bold"
      >
        <ImageBoxInput
          wrapperClassName={'!h-16 !w-16 rounded-full overflow-hidden'}
        />
      </Form.Item>
      <span className="text-content-secondary">
        Update organization logo here
      </span>
      <Divider className="mt-1" />
      <Form.Item
        name="country"
        label="Country"
        rules={[{ required: true, message: 'This field is required' }]}
      >
        <Select
          disabled={!canEditAccountProfile}
          placeholder={'Select a country'}
        >
          <Select.Option key={'All Countries'}>All Countries</Select.Option>
          {allCountries.map((countries) => (
            <Select.Option key={countries.value} value={countries.value}>
              {countries.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <span className="text-content-secondary">
        The location of the company or its based office
      </span>
      <Form.Item
        name="about"
        label="About"
        className="font-bold my-1"
        rules={[{ required: true, message: 'This field is required' }]}
      >
        <Input.TextArea className="text-xs" disabled={!canEditAccountProfile} />
      </Form.Item>
      <span className="text-content-secondary">
        Short description about your organization
      </span>
      <Divider className="mt-0" />
      {canEditAccountProfile && (
        <Button htmlType="submit" type="primary" loading={isSubmitting}>
          Save
        </Button>
      )}
    </Form>
  )
}

export default ProfileForm
