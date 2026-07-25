'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import Link from 'next/link'
import { useRef, type ReactNode, type MouseEvent } from 'react'
import { cn } from '@/lib/utils'

export function MagneticButton({
  children,
  href,
  variant = 'primary',
  className,
}: {
  children: ReactNode
  href: string
  variant?: 'primary' | 'outline' | 'light'
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 18 })
  const springY = useSpring(y, { stiffness: 200, damping: 18 })

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left - rect.width / 2) * 0.28)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.28)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const variants = {
    primary:
      'bg-primary text-primary-foreground hover:bg-foreground hover:text-background',
    outline:
      'border border-foreground/25 text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground',
    light:
      'bg-background text-foreground hover:bg-primary hover:text-primary-foreground',
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      <Link
        href={href}
        className={cn(
          'group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300',
          variants[variant],
          className,
        )}
      >
        {children}
        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
    </motion.div>
  )
}
