'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '@/lib/data'
import { cn } from '@/lib/utils'

const prefix = process.env.NEXT_PUBLIC_STATIC_EXPORT === '1' ? '/FocusOn' : ''

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  // On the home page the hero is dark, so the transparent navbar needs light text
  const onDarkHero = pathname === '/' && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <nav
          className={cn(
            'flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 md:px-7',
            scrolled ? 'glass shadow-lg shadow-foreground/5' : 'bg-transparent',
          )}
          aria-label="Main navigation"
        >
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src={`${prefix}/images/logo.png`}
              alt="FocusOn Interiors logo"
              width={40}
              height={40}
              className="h-9 w-9 rounded-full object-contain"
            />
            <span
              className={cn(
                'font-heading text-sm font-bold uppercase tracking-[0.18em] transition-colors duration-500',
                onDarkHero && 'text-secondary-foreground',
              )}
            >
              FocusOn <span className="text-primary">Interiors</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-500 hover:text-primary',
                    pathname === link.href
                      ? 'text-primary'
                      : onDarkHero
                        ? 'text-secondary-foreground/85'
                        : 'text-foreground/80',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pl-2">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground"
              >
                Book a Consultation
              </Link>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span
              className={cn(
                'h-0.5 w-6 transition-transform duration-300',
                onDarkHero && !open ? 'bg-secondary-foreground' : 'bg-foreground',
                open && 'translate-y-1 rotate-45',
              )}
            />
            <span
              className={cn(
                'h-0.5 w-6 transition-transform duration-300',
                onDarkHero && !open ? 'bg-secondary-foreground' : 'bg-foreground',
                open && '-translate-y-1 -rotate-45',
              )}
            />
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mx-4 mt-2 md:hidden"
          >
            <ul className="glass flex flex-col gap-1 rounded-3xl p-4 shadow-xl shadow-foreground/10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block rounded-2xl px-4 py-3 font-heading text-lg font-semibold transition-colors',
                      pathname === link.href
                        ? 'text-primary'
                        : 'hover:bg-muted',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="block rounded-2xl bg-primary px-4 py-3 text-center font-medium text-primary-foreground"
                >
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
