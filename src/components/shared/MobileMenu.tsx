import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { useAuth } from '@auth/hooks/useAuth'

type Props = {
  nav: boolean
  closeNav: () => void
}
function MobileMenu({ nav, closeNav }: Props) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleClick = () => {
    setIsDarkMode((prevState) => !prevState)
  }

  //   const navAnimation = nav ? 'translate-x-0' : 'translate-x-[-100%]'
  const navAnimation = nav ? 'translate-x-0' : '-translate-x-full'
  const { state, actions } = useAuth()
  return (
    <div
      className={`fixed ${navAnimation} transition-transform right-0 left-0 bottom-0 top-0 transform duration-300 z-[1000] bg-white`}
    >
      <div
        className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem]"
        onClick={closeNav}
      >
        <MdClose size="large" />
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="mobile-nav-link">Home</div>
        <div className="mobile-nav-link">Services</div>
        <div className="mobile-nav-link">About</div>
        <div className="mobile-nav-link">Project</div>
        <div className="mobile-nav-link">Blog</div>
        <div className="mobile-nav-link">Contact</div>
      </div>
    </div>
  )
}

export default MobileMenu
