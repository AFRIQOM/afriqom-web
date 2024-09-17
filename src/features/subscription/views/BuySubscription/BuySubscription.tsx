import { PageContainer } from '@components/ui/container'
import SubscriptionPicker from '@features/subscription/views/SubscriptionPicker/SubscriptionPicker'
import { AppRoutes } from '@lib/appRoutes'
import { MdClose } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@auth/hooks/useAuth'

function BuySubscription() {
  const { currentOrganisation } = useAuth().state
  const navigate = useNavigate()
  return (
    <PageContainer
      containerClassName={
        'max-w-7xl !mx-auto rounded-sm  !bg-surface-default shadow-md'
      }
    >
      <div className={'mx-auto -mt-2 w-full max-w-7xl text-content-default'}>
        <div className="flex items-center justify-between pt-5 mb-10">
          <h1>Buy Databoard</h1>
          <Link
            to={`${AppRoutes.dashboard}`}
            className="text-content-default hover:text-primary-default"
          >
            <MdClose className="text-4xl" />
          </Link>
        </div>
        {currentOrganisation && (
          <SubscriptionPicker
            onCompleted={() => {
              navigate(AppRoutes.dashboard)
            }}
            organization={currentOrganisation}
          />
        )}
      </div>
    </PageContainer>
  )
}

export default BuySubscription
