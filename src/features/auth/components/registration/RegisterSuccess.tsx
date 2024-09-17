import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import { useAuth } from '@auth/hooks/useAuth'
import { AppRoutes } from '@lib/appRoutes'

type Props = {
  email: string
  full_name: string
  message?: string
}
function RegistrationSuccess({ message, full_name }: Props) {
  const navigate = useNavigate()
  return (
    <div className={'flex flex-col gap-y-2 items-start'}>
      <p className="text-gray-400 text-base mt-1">{full_name}</p>
      <p className=" font-bold text-base">
        Unlock the Power of Data Visualization and Insightful Analytics
      </p>
      <p className={''}>
        At Afriqom, we believe in empowering businesses with intuitive,
        customizable dashboard solutions. Whether you're a small startup or a
        large enterprise, our platform is designed to streamline your data
        management and decision-making processes.
        <br /> <br />
        {message ??
          'You will be contacted by our sales team shortly to get you started.'}
      </p>
      <Button
        type={'primary'}
        className={'mb-10 mt-3'}
        onClick={() => navigate(AppRoutes.login)}
        icon={<IoArrowBack />}
      >
        Back to Login
      </Button>
      <div>
        <img
          src={'/assets/registersuccess.png'}
          className="w-full pt-4"
          alt=""
        />
      </div>
    </div>
  )
}

export default RegistrationSuccess
