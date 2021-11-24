import { useState, useRef, ReactNode } from 'react'
import { motion, useViewportScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion'

import { useIsomorphicLayoutEffect } from 'hooks'

type ParallaxProps = {
  children: ReactNode
  offset?: number
}

export function Parallax({ children, offset = 50 }: ParallaxProps) {
  const prefersReducedMotion = useReducedMotion()
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const ref = useRef(null)

  const { scrollY } = useViewportScroll()

  const initial = elementTop - clientHeight
  const final = elementTop + offset

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset])
  const y = useSpring(yRange, { stiffness: 400, damping: 90 })

  useIsomorphicLayoutEffect(() => {
    const element = ref.current
    if (!ref.current) return
    const onResize = () => {
      setElementTop(element.getBoundingClientRect().top + window.scrollY || window.pageYOffset)
      setClientHeight(window.innerHeight)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [ref])

  if (prefersReducedMotion) {
    return <>{children}</>
  }

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  )
}
