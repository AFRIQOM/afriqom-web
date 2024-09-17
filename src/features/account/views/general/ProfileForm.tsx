import { User } from '@auth/lib/types'
import ImageBoxInput from '../../components/ImageInput'
import { Button, Divider, Form, Input, Select } from 'antd'

type Props = {
  isSubmitting: boolean
  onSubmit: (value: User) => void
}
function ProfileForm({ isSubmitting, onSubmit }: Props) {
  const [form] = Form.useForm()
  const onFinish = (values: User) => {
    onSubmit(values)
  }
  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item label="Name" name="name" className="font-bold  my-2">
        <Input placeholder="Choco Fam Limited" />
      </Form.Item>
      <span className="text-content-default">
        Your organization or company Name
      </span>
      <Divider className="mt-1" />
      <Form.Item
        name="cover_image"
        label="Logo"
        className="max-w-[20%] font-bold flex items-center justify-center my-2"
      >
        <ImageBoxInput />
      </Form.Item>
      <span className="text-content-default">
        Update organization logo here
      </span>
      <Divider className="mt-1" />
      <Form.Item
        label="Country"
        name="country"
        className="max-w-[40%] font-bold my-2"
      >
        <Input placeholder="Country Name" />
      </Form.Item>
      <span className="text-content-default">
        The location of the company or its based office
      </span>
      <Form.Item name="about" label="About" className="font-bold my-1">
        <Input.TextArea className="text-xs" />
      </Form.Item>
      <span className="text-content-default">
        Short description about your organization
      </span>
      <Divider className="mt-0" />
      <Button htmlType="submit" type="primary">
        Save
      </Button>
    </Form>
  )
}

export default ProfileForm
