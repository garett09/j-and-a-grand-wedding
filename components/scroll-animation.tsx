'use client'

import * as React from 'react'
import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion'

import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'

type Preset = 'fade' | 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scaleIn'

function presetVariants(preset: Preset, isMobile: boolean): Variants {
  const distance = isMobile ? 30 : 50

  switch (preset) {
    case 'fade':
      return {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      }
    case 'fadeLeft':
      return {
        hidden: { opacity: 0, x: distance },
        show: { opacity: 1, x: 0 },
      }
    case 'fadeRight':
      return {
        hidden: { opacity: 0, x: -distance },
        show: { opacity: 1, x: 0 },
      }
    case 'scaleIn':
      return {
        hidden: { opacity: 0, scale: 0.95 },
        show: { opacity: 1, scale: 1 },
      }
    case 'fadeUp':
    default:
      return {
        hidden: { opacity: 0, y: distance },
        show: { opacity: 1, y: 0 },
      }
  }
}

function transitionConfig(isMobile: boolean, delay: number) {
  return {
    duration: isMobile ? 0.5 : 0.75,
    ease: [0.16, 1, 0.3, 1] as const,
    delay,
  }
}

export function ScrollAnimation({
  children,
  className,
  preset = 'fadeUp',
  delay = 0,
  once = true,
  amount = 0.2,
}: {
  children: React.ReactNode
  className?: string
  preset?: Preset
  delay?: number
  once?: boolean
  amount?: number
}) {
  const reduceMotion = useReducedMotion()
  const isMobile = useIsMobile()
  const ref = React.useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once, amount })

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={presetVariants(preset, isMobile)}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      transition={transitionConfig(isMobile, delay)}
    >
      {children}
    </motion.div>
  )
}

export function ScrollStagger({
  children,
  className,
  preset = 'fadeUp',
  once = true,
  amount = 0.2,
  delayChildren = 0,
  staggerChildren,
}: {
  children: React.ReactNode
  className?: string
  preset?: Preset
  once?: boolean
  amount?: number
  delayChildren?: number
  staggerChildren?: number
}) {
  const reduceMotion = useReducedMotion()
  const isMobile = useIsMobile()
  const ref = React.useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once, amount })

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  const child = presetVariants(preset, isMobile)
  const stagger = isMobile ? 0.06 : (staggerChildren ?? 0.12)

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren,
            staggerChildren: stagger,
          },
        },
      }}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {React.Children.map(children, (node, idx) => (
        <motion.div key={idx} variants={child} transition={transitionConfig(isMobile, 0)}>
          {node}
        </motion.div>
      ))}
    </motion.div>
  )
}
