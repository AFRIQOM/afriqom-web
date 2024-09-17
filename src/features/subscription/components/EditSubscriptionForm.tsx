import React, { useMemo, useState } from 'react'
import {
  Alert,
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select
} from 'antd'
import { Rule } from 'antd/lib/form'
import { motion } from 'framer-motion'
import { SubscriptionToSubscriptionDraft } from '@features/subscription/lib/dto'
import { hasPermission } from '@lib/user-roles'
import { useAuth } from '@auth/hooks/useAuth'
import {
  Subscription,
  SubscriptionDraft,
  SubscriptionLicenseType,
  SubscriptionType
} from '@features/subscription/lib/types'
import { useGetDataboards } from '@features/databoard/queries/useGetDataboards'
import { useOrganizationHandler } from '@features/account/hooks/useOrganizationHandler'
import { SubscriptionLicenseOptions } from '@features/subscription/lib/constants'
import dayjs from 'dayjs'

type Props = {
  isSubmitting: boolean
  onSubmit: (value: SubscriptionDraft) => void
  errorMessage: string
  subscription?: Subscription
  packageType?: SubscriptionType
}
function EditSubscriptionForm({
  isSubmitting,
  onSubmit,
  errorMessage,
  subscription,
  packageType
}: Props) {
  const isEditMode = Boolean(subscription)
  const { organizationBoards } = useOrganizationHandler()
  const { databoardOptions, isLoading: loadingDataboard } = useGetDataboards()
  const filteredDataboardOptions = useMemo(() => {
    if (isEditMode) return databoardOptions
    //only returns databased that are not already in the organization
    return databoardOptions.filter((el) => {
      return organizationBoards.some(
        (board) => board.databoard_id === el.value && !board.license
      )
    })
  }, [databoardOptions, organizationBoards, isEditMode])

  const { state } = useAuth()
  const [form] = Form.useForm()
  const license: SubscriptionLicenseType =
    Form.useWatch('license', form) ?? 'Individual Access'

  const canEditField = hasPermission(state.user, 'canEditAccountSubscription')
  const canEditDashboardUrl = hasPermission(
    state.user,
    'canEditAccountSubscriptionDashboardUlr'
  )
  const canViewAccountPaidRateForSubscription = hasPermission(
    state.user,
    'canViewAccountPaidRateForSubscription'
  )

  const onFinish = (values: SubscriptionDraft) => {
    onSubmit(values)
  }
  const Draft = useMemo(() => {
    return subscription ? SubscriptionToSubscriptionDraft(subscription) : {}
  }, [subscription])

  const validateEndDate: Rule = {
    validator: async (_: any, value: any) => {
      const start_date = form.getFieldValue('start_date')

      if (value && start_date && dayjs(value).isBefore(start_date, 'day')) {
        return Promise.reject('Expiry date must be greater than start date')
      }

      return Promise.resolve()
    }
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      requiredMark={false}
      name="edit_subscription"
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
      {packageType == 'Individual Access' && (
        <Form.Item name={'databoard_id'} label={'Databoard'}>
          <Select
            disabled={isEditMode}
            placeholder={'Select Databoard'}
            loading={loadingDataboard}
            options={filteredDataboardOptions}
          />
        </Form.Item>
      )}
      <Form.Item
        label="License"
        name="license"
        rules={[{ required: true, message: 'This field is required' }]}
      >
        <Select
          options={SubscriptionLicenseOptions}
          disabled={!canEditField}
          placeholder="Select license"
        />
      </Form.Item>
      <Form.Item
        label="Start Date"
        name="start_date"
        rules={[{ required: true, message: 'This field is required' }]}
      >
        <DatePicker
          disabled={!canEditField}
          placeholder="Start Date"
          className="w-full"
        />
      </Form.Item>
      <Form.Item
        label="Expiry Date"
        name="expiry_date"
        rules={[
          { required: true, message: 'This field is required' },
          validateEndDate
        ]}
      >
        <DatePicker
          disabled={!canEditField}
          placeholder="Expiry Date"
          className="w-full"
        />
      </Form.Item>
      {hasPermission(state.user, 'canEditAccountSubscriptionStatus') && (
        <Form.Item
          label="Status"
          name="status"
          rules={[{ required: true, message: 'This field is required' }]}
        >
          <Select disabled={!canEditField} placeholder="Select status">
            <Select.Option value="pending">Pending</Select.Option>
            <Select.Option value="approval request">
              Approval request
            </Select.Option>
            {hasPermission(state.user, 'canApprovedAccountSubscription') && (
              <Select.Option value="active">Approved</Select.Option>
            )}
          </Select>
        </Form.Item>
      )}

      {license == 'Custom' && packageType !== 'Full Access' && (
        <React.Fragment>
          {hasPermission(
            state.user,
            'canEditAccountSubscriptionDashboardUlr'
          ) && (
            <div className="flex  gap-5">
              <Form.Item
                label="Custom Light Mode Dashboard Url"
                name="Light_mode_Dashboard_Url"
                className="w-full"
              >
                <Input
                  disabled={!canEditDashboardUrl && !canEditField}
                  placeholder="Light Mode Dashboard Url"
                />
              </Form.Item>
              <Form.Item
                label="Custom Dark Mode Dashboard Url"
                name="dark_mode_Dashboard_Url"
                className="w-full"
              >
                <Input
                  disabled={!canEditDashboardUrl && !canEditField}
                  placeholder="Dark Mode Dashboard Url"
                />
              </Form.Item>
            </div>
          )}
        </React.Fragment>
      )}
      {canViewAccountPaidRateForSubscription &&
        (isEditMode || license == 'Custom') && (
          <Form.Item
            label="Annual Cost Paid ($)"
            name="rate_paid"
            rules={[{ required: true, message: 'This field is required' }]}
          >
            <InputNumber
              disabled={license !== 'Custom'}
              maxLength={10}
              style={{ width: '100%' }}
              placeholder="Enter Annual Cost Paid ($)"
            />
          </Form.Item>
        )}

      <Button
        htmlType="submit"
        loading={isSubmitting}
        type="primary"
        className="w-full"
      >
        Save
      </Button>
    </Form>
  )
}

export default EditSubscriptionForm
