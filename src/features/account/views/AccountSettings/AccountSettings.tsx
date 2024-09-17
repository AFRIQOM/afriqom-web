import ProfileForm from './components/ProfileForm'
import { useUpdateOrganization } from '@features/account/hooks/useUpdateOrganizations'
import { OrganizationDraft } from '@features/organization/lib/types'
import { OrganizationDraftToOrganizationBody } from '@features/organization/lib/dto'
import { useAuth } from '@auth/hooks/useAuth'
import { useUpdateLogo } from '@features/account/hooks/useSaveLogo'
import { Divider } from 'antd'
import { useQueryClient } from '@tanstack/react-query'

function AccountSettings() {
  const updateOrganization = useUpdateOrganization()
  const {
    state: { currentOrganisation }
  } = useAuth()
  const {
    actions,
    state: { isUploading }
  } = useUpdateLogo()
  const client = useQueryClient()

  const onSubmit = async (values: OrganizationDraft) => {
    const organizationBody = OrganizationDraftToOrganizationBody({
      ...values
    })

    if (values.logo.file) {
      actions.updateLogo(
        {
          body: {
            file: values.logo.file
          }
        },
        {
          onSuccess: (data) => {
            updateOrganization.actions.updateOrganization(
              {
                body: {
                  ...organizationBody,
                  logo: data.url
                },
                id: currentOrganisation?.id
              },
              {
                onSuccess() {
                  client.refetchQueries({ queryKey: ['list', 'organisations'] })
                }
              }
            )
          }
        }
      )
    } else {
      updateOrganization.actions.updateOrganization(
        {
          body: {
            ...organizationBody,
            logo: currentOrganisation?.logo ?? ''
          },
          id: currentOrganisation?.id
        },
        {
          onSuccess() {
            client.refetchQueries({ queryKey: ['list', 'organisations'] })
          }
        }
      )
    }
  }

  return (
    <div className="my-0 max-w-2xl">
      <p className="text-[16px]">Organization settings</p>
      <Divider className="mt-1" />
      {currentOrganisation && (
        <ProfileForm
          currentOrganisation={currentOrganisation}
          isSubmitting={updateOrganization.state.isLoading || isUploading}
          onSubmit={onSubmit}
          errorMessage={updateOrganization.state.errorMessage}
        />
      )}
    </div>
  )
}

export default AccountSettings
