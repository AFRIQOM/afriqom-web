import React, { useEffect, useMemo, useState } from 'react'
import { Alert, Avatar, Button, Form, Input, Modal, Select, Spin } from 'antd'
import { User, UserDraft } from '@auth/lib/types'
import { getInitials } from '@components/ui/GetInitialProps'
import { UserToUserDraft } from '@auth/lib/dto'
import { RoleT, hasPermission } from '@lib/user-roles'
import { useAuth } from '@auth/hooks/useAuth'
import { motion } from 'framer-motion'
import { useOrganizationHandler } from '@features/account/hooks/useOrganizationHandler'
import { getCountryLabel } from '@lib/utils'
import countryList from 'react-select-country-list'
import { useGetUserAssignedDatabaord } from '@features/databoard/queries/useGetUserAssignedDatabaord'
import { IoKey, IoArrowBackOutline } from 'react-icons/io5'
import { getDashboardState } from '@features/databoard/lib/helper'
type Props = {
  onSubmit: (value: UserDraft) => void
  isSubmitting: boolean
  errorMessage: string
  user?: User
  isAdminUser: boolean
}
function EditUserForm({
  onSubmit,
  isSubmitting,
  user,
  errorMessage,
  isAdminUser
}: Props) {
  const [view, setView] = useState<'Form' | 'Password'>('Form')
  const { state } = useAuth()
  const [form] = Form.useForm<UserDraft>()
  const accountType: RoleT = Form.useWatch('account_type', form)
  const isEditMode = Boolean(user)
  const allCountries = countryList().getData()
  const onFinish = () => {
    onSubmit(form.getFieldsValue(true))
  }
  const { organizationBoards } = useOrganizationHandler()
  const { data, isLoading } = useGetUserAssignedDatabaord({
    params: { user_id: user?.id },
    enabled: Boolean(user)
  })

  const accessibleDashboardOptions = useMemo(() => {
    return organizationBoards
      .filter((el) => Boolean(el.license))
      .map((el) => {
        return {
          label: el.country_name,
          value: el.databoard_id
        }
      })
  }, [organizationBoards])

  const Draft = useMemo(() => {
    return UserToUserDraft(user)
  }, [user])

  useEffect(() => {
    form.setFieldsValue({
      databoards: data ? data.map((el) => el.databoard_id) : []
    })
  }, [data, form])

  return (
    <Spin spinning={isLoading || isSubmitting}>
      {user && (
        <div className="flex  gap-2 mt-3">
          <Avatar
            style={{ background: '#ccdaea', color: '#173659' }}
            className="text-2xl font-bold p-5"
          >
            {getInitials(user.full_name)}
          </Avatar>
          <span className="text-content-default">
            <p className="font-bold -my-1 ">{user?.full_name}</p>
            <p>{user.email}</p>
            {view === 'Form' && (
              <div
                onClick={() => {
                  setView('Password')
                }}
                className={
                  'cursor-pointer flex gap-1 items-center text-blue-700'
                }
              >
                <IoKey />
                <span>Edit Password</span>
              </div>
            )}
          </span>
        </div>
      )}
      <Form
        requiredMark={false}
        form={form}
        onFinish={onFinish}
        layout="vertical"
        name="edit_user"
        initialValues={Draft}
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
        <div className={'min-h-[500px]'}>
          {view == 'Form' ? (
            <React.Fragment>
              <div className={'grid grid-cols-2 gap-2'}>
                <Form.Item
                  label="First Name"
                  name="first_name"
                  rules={[
                    { required: true, message: 'This field is required' }
                  ]}
                >
                  <Input placeholder="First Name" />
                </Form.Item>
                <Form.Item
                  label="Last Name"
                  name="last_name"
                  rules={[
                    { required: true, message: 'This field is required' }
                  ]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'This field is required',
                      type: 'email'
                    }
                  ]}
                >
                  <Input placeholder="Input email" />
                </Form.Item>
                {!isEditMode && (
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      { required: true, message: 'This field is required' }
                    ]}
                  >
                    <Input.Password placeholder="Password" />
                  </Form.Item>
                )}

                <Form.Item
                  label="Account Type"
                  name="account_type"
                  rules={[
                    { required: true, message: 'This field is required' }
                  ]}
                >
                  <Select placeholder="Select Account Type">
                    {isAdminUser ? (
                      <>
                        <Select.Option value="Super Administrator">
                          Super Administrator
                        </Select.Option>
                        <Select.Option value="Sales Administrator">
                          Sales Administrator
                        </Select.Option>
                        <Select.Option value="Data Administrator">
                          Data Administrator
                        </Select.Option>
                      </>
                    ) : (
                      <>
                        <Select.Option value="Administrator">
                          Administrator
                        </Select.Option>
                        <Select.Option value="User">User</Select.Option>
                      </>
                    )}
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Phone Number"
                  name="phone_number"
                  rules={[
                    {
                      required: true,
                      message: 'This field is required'
                    }
                  ]}
                >
                  <Input placeholder="Phone Number" />
                </Form.Item>
                <Form.Item
                  label="Whatsapp Number"
                  name="whatsapp_number"
                  rules={[
                    {
                      required: true,
                      message: 'This field is required'
                    }
                  ]}
                >
                  <Input placeholder="Whatsapp Number" />
                </Form.Item>
                {hasPermission(state.user, 'canEditAccountUserStatus') && (
                  <Form.Item
                    label="Status"
                    name="status"
                    rules={[
                      { required: true, message: 'This field is required' }
                    ]}
                  >
                    <Select placeholder="Select status">
                      <Select.Option value="pending">Pending</Select.Option>
                      <Select.Option value="approval request">
                        Approval request
                      </Select.Option>
                      {hasPermission(state.user, 'canApproveAccountUsers') && (
                        <Select.Option value="active">Approved</Select.Option>
                      )}
                    </Select>
                  </Form.Item>
                )}
                {!isAdminUser && accountType !== 'Administrator' && (
                  <div className={'col-span-2'}>
                    <Form.Item label="Dashboard Access" name="databoards">
                      <Select
                        defaultValue={['1', '2']}
                        placeholder="Select Dashboard(s) "
                        mode="multiple"
                        allowClear
                        options={accessibleDashboardOptions}
                      />
                    </Form.Item>
                  </div>
                )}

                {!isAdminUser && (
                  <div className={'col-span-2'}>
                    <Form.Item
                      label="Country of Access"
                      name="access_country_restriction"
                      rules={[
                        { required: true, message: 'This field is required' }
                      ]}
                    >
                      <Select
                        placeholder="Select Country of Access"
                        mode="multiple"
                        allowClear
                        options={[
                          {
                            label: 'All Countries',
                            value: 'All Countries'
                          },
                          ...allCountries.map((el) => ({
                            label: el.label,
                            value: el.value
                          }))
                        ]}
                        filterOption={(inputValue, option) => {
                          return String(option?.label ?? '')
                            .toLowerCase()
                            .includes(inputValue.toLowerCase())
                        }}
                      />
                    </Form.Item>
                  </div>
                )}
              </div>

              <Button
                htmlType="submit"
                className="w-full my-7"
                type="primary"
                loading={isSubmitting}
              >
                Update
              </Button>
            </React.Fragment>
          ) : (
            <div className={'md:max-w-[300px]'}>
              <div
                className={'flex gap-1 text-2xl font-bold items-center mb-5'}
              >
                <span
                  onClick={() => {
                    setView('Form')
                    form.setFieldsValue({ password: '' })
                  }}
                >
                  <IoArrowBackOutline />
                </span>
                <span className={'mb-1'}>Change Password</span>
              </div>
              <Form.Item
                label="New Password"
                name="password"
                rules={[{ required: true, message: 'This field is required' }]}
              >
                <Input.Password placeholder="New Password" />
              </Form.Item>
              <Form.Item
                label="Confirm Password"
                name={'confirm_password'}
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
                        new Error(
                          'The new password that you entered do not match!'
                        )
                      )
                    }
                  })
                ]}
              >
                <Input.Password placeholder="Confirm Password" />
              </Form.Item>
              <Button
                htmlType="submit"
                className="w-full mt-3"
                type="primary"
                loading={isSubmitting}
              >
                Change Password
              </Button>
            </div>
          )}
        </div>
      </Form>
    </Spin>
  )
}

export default EditUserForm
