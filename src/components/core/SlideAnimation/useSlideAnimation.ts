import { SlideDirection } from './types'
import React from 'react'

export const useSlideAnimation = <STEP = any>(initial: STEP) => {
  const [[view, direction], setView] = React.useState<[STEP, SlideDirection]>([
    initial,
    'Left'
  ])

  return { view, direction, setView }
}
