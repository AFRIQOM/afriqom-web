import React, { PropsWithChildren } from 'react'
import { ErrorBoundary } from '@components/core/ErrorBoundary'
import AppFooter from '@components/shared/AppFooter'
import classNames from 'classnames'
import { hasPermission } from '@lib/user-roles'
import { useAuth } from '@auth/hooks/useAuth'

type Props = {
  title?: React.ReactNode | string
  rightAddOn?: React.ReactNode
  description?: React.ReactNode | string
  containerClassName?: string
}

export function PageContainer(props: PropsWithChildren<Props>) {
  const { state } = useAuth()
  return (
    <ErrorBoundary>
      <div className="w-full bg-surface-default pt-10">
        <div className="h-[120px] bg-gradient-to-r from-cyan-900 from-40% to-green-500 to-80% px-10 ">
          {(props.title || props.rightAddOn) && (
            <div
              className={'flex h-full w-full  items-center justify-between '}
            >
              {props.title && (
                <div className={'text-md pb-2 font-bold text-white'}>
                  <h1 className={'text-2xl'}>{props.title}</h1>
                  <p>{props.description}</p>
                </div>
              )}
            </div>
          )}
        </div>
        <div
          className={classNames(
            'mx-10 relative -top-8 bg-surface-secondary h-full pb-8',
            props.containerClassName
          )}
        >
          <div className={'w-full px-8 min-h-[79vh]'}>{props.children}</div>
          {state.isClientUser && <AppFooter />}
        </div>
      </div>
    </ErrorBoundary>
  )
}
