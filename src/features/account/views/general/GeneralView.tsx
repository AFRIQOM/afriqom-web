import { Divider } from 'antd'
import ProfileForm from './ProfileForm'
function GeneralView() {
  return (
    <div className="max-w-2xl my-0">
      <p className="text-[16px]">Organization settings</p>
      <Divider className="mt-1" />
      <ProfileForm isSubmitting onSubmit={() => {}} />
    </div>
  )
}

export default GeneralView
