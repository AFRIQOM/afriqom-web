import React from 'react'
import { Loader } from './Loaders'

type Props = {
  cover?: 'content'
  message?: string
  defaultMessage?: boolean
}
const Loading = (props: Props) => {
  const { cover = 'content', message } = props
  return (
    <div className={'flex items-center justify-center w-full h-screen'}>
      <Loader message={message} />
    </div>
  )
}

export default Loading
