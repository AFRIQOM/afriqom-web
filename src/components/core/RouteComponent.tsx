import React, { Suspense } from 'react'
import Loading from '@components/ui/Loading'

export const RouteComponent = ({ component: Component, ...props }: any) => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Component {...props} />
    </Suspense>
  )
}
