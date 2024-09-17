import { useAuth } from '@auth/hooks/useAuth'
import { RegionboardToRegionBoardDraft } from '@features/databoard/lib/dto'
import {
  RegionDataborad,
  RegionDataboradDraft
} from '@features/databoard/lib/types'
import { useGetRegionCountry } from '@features/databoard/queries/useGetRegionCountry'
import { hasPermission } from '@lib/user-roles'
import { getCountryLabel } from '@lib/utils'
import { Alert, Button, Form, Input, Select } from 'antd'
import { motion } from 'framer-motion'
import { useMemo } from 'react'

type Props = {
  onSubmit: (values: RegionDataboradDraft) => void
  isSubmitting: boolean
  regionBoard?: RegionDataborad
  errorMessage: string
}
function EditRegionBoardForm({
  onSubmit,
  isSubmitting,
  errorMessage,
  regionBoard
}: Props) {
  const [form] = Form.useForm<any>()
  const { data } = useGetRegionCountry()
  const { state } = useAuth()

  const onFinish = (values: RegionDataboradDraft) => {
    onSubmit(values)
  }
  const Draft = useMemo(() => {
    return RegionboardToRegionBoardDraft(regionBoard)
  }, [regionBoard])
  const canEditFullAccess = hasPermission(state.user, 'canEditFullAccess')
  return (
    <Form
      layout={'vertical'}
      requiredMark={false}
      name="add-databoard-form"
      className="w-full"
      initialValues={Draft}
      form={form}
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
      <Form.Item
        label={'Region'}
        name={'name'}
        rules={[
          {
            required: true,
            message: 'This field is required!'
          }
        ]}
      >
        <Input placeholder="Enter Region" disabled={!canEditFullAccess} />
      </Form.Item>
      <Form.Item
        label={'Standard Annual Rate ($)'}
        name={'standard_rate'}
        rules={[
          {
            required: true,
            message: 'This field is required!'
          }
        ]}
      >
        <Input
          placeholder="Enter standard annual rate"
          type="number"
          disabled={!canEditFullAccess}
        />
      </Form.Item>
      <Form.Item
        label={'Advanced Annual Rate ($)'}
        name={'advanced_rate'}
        rules={[
          {
            required: true,
            message: 'This field is required!'
          }
        ]}
      >
        <Input
          placeholder="Enter advanced annual rate"
          type="number"
          disabled={!canEditFullAccess}
        />
      </Form.Item>
      <Form.Item
        label={'Premium Annual Rate ($)'}
        name={'premium_rate'}
        rules={[
          {
            required: true,
            message: 'This field is required!'
          }
        ]}
      >
        <Input
          placeholder="Enter premium annual rate"
          type="number"
          disabled={!canEditFullAccess}
        />
      </Form.Item>
      {canEditFullAccess && (
        <Button
          type="primary"
          loading={isSubmitting}
          htmlType="submit"
          className="w-full mt-5"
        >
          Submit
        </Button>
      )}
    </Form>
  )
}

export default EditRegionBoardForm
