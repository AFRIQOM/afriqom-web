import AppLogo from '@components/shared/AppLogo'
import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'

type Props = {
  title: string
  children: React.ReactNode
  titleClassName?: string
  onArrowBack?: () => void
}

const styles = {
  background:
    'linear-gradient(to right, #0b3d34ef 22%, #09702d 50%, #2BA94C 60%)'
}
function Layout({ title, children, onArrowBack }: Props) {
  return (
    <div className="flex h-screen w-full flex-row ">
      <div className="w-full md:w-1/2 lg:w-[420px] flex-shrink-0 px-10 py-10 bg-surface-secondary">
        <div className="flex items-center justify-center">
          <AppLogo />
        </div>
        <div className="h-full  pt-[30%]">
          <div className="flex text-primary-default gap-1 items-center">
            {onArrowBack && (
              <span
                className={'text-2xl  cursor-pointer'}
                onClick={onArrowBack}
              >
                <IoArrowBackOutline />
              </span>
            )}
            <h2 className="mb-2">{title}</h2>
          </div>
          {children}
        </div>
      </div>
      <div
        className="hidden h-full flex-1 flex-col justify-start pl-[10%] pt-[10%] md:flex "
        style={styles}
      >
        <div className="text-white">
          <h3 className="mb-10 text-3xl font-bold">
            Leaders in Africa Fertilizer Price Reporting,
            <br />
            Market Data and Business Intelligence
          </h3>
        </div>
        <div
          style={{
            background: `url('/assets/login.png')`
          }}
          className="flex h-full bg-red-500 bg-cover p-5 "
        ></div>
      </div>
    </div>
  )
}

export default Layout
