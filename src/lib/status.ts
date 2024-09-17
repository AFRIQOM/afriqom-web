export type AppStatus =
  | 'approved'
  | 'pending'
  | 'active'
  | 'approval request'
  | 'expired'

export const getStatusColorClass = (status: AppStatus) => {
  switch (status) {
    case 'active':
      return 'bg-green-100'
    case 'pending':
      return 'bg-orange-100'
    case 'approved':
      return 'bg-blue-100'
    case 'expired':
      return 'bg-red-100'
    default:
      return 'bg-gray-100'
  }
}

export const getStatusDotColorClass = (status: AppStatus) => {
  switch (status) {
    case 'active':
      return 'bg-green-500'
    case 'pending':
      return 'bg-orange-500'
    case 'approved':
      return 'bg-blue-500'
    case 'expired':
      return 'bg-red-500'
    default:
      return 'bg-gray-300'
  }
}
