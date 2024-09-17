import React, { PropsWithChildren } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import cn from 'classnames'
import { SlideDirection } from '@components/core/SlideAnimation/types'

const variants = {
  enter: (direction: SlideDirection) => {
    return {
      x: direction === 'Right' ? '120px' : '-120px',
      opacity: 0
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: SlideDirection) => {
    return {
      zIndex: 0,
      x: direction === 'Left' ? '120px' : '-120px',
      opacity: 0
    }
  }
}

export function SlideAnimation(
  props: PropsWithChildren<{ view: string; direction: SlideDirection }>
) {
  return (
    <AnimatePresence custom={props.direction}>
      <motion.div
        key={props.view}
        custom={props.direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.3 }
        }}
        className={cn('absolute w-full')}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  )
}
