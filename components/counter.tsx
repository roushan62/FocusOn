'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export function Counter({
  value,
  suffix,
  duration = 1800,
}: {
  value: number
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start: number | null = null
    let rafId: number
    const tick = (t: number) => {
      if (start === null) start = t
      const progress = Math.min((t - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {display}
      {suffix && <span className="text-primary">{suffix}</span>}
    </span>
  )
}
