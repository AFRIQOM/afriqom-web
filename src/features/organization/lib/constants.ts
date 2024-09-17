import { AppStatus } from '@lib/status'

export const AppApprovalStatus: { key: AppStatus; label: string }[] = [
  {
    key: 'pending',
    label: 'Pending'
  },
  {
    key: 'approval request',
    label: 'Approval request'
  },
  {
    key: 'active',
    label: 'Approved'
  }
]
