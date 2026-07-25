'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, FileText, ExternalLink, Download } from 'lucide-react'

const TOTAL_PAGES = 28

export function ProfileViewer() {
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState(1)

  let base = ''
  if (typeof window !== 'undefined') {
    base = window.location.pathname.startsWith('/FocusOn') ? '/FocusOn' : ''
  }
  const pdfUrl = `${base}/profile.pdf`

  const go = useCallback((n: number) => {
    if (n >= 1 && n <= TOTAL_PAGES) setPage(n)
  }, [])

  const next = useCallback(() => go(page + 1), [go, page])
  const prev = useCallback(() => go(page - 1), [go, page])

  useEffect(() => {
    if (!open) return
    setPage(1)
  }, [open])

  useEffect(() => {
    if (!open) return
    const h = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [open, next, prev])

  return (
    <>
      {/* Floating VIEW PROFILE button */}
      <div className="fixed right-0 top-1/2 z-[60] -translate-y-1/2">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-l-full bg-primary px-3 py-3 text-primary-foreground shadow-xl transition-all duration-300 hover:pl-4 hover:shadow-2xl"
        >
          <FileText className="h-4 w-4 shrink-0" />
          <span className="text-[11px] font-bold tracking-wider leading-tight">VIEW<br />PROFILE</span>
        </button>
        <div className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-sm"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-black/50">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <FileText className="h-4 w-4" />
                FocusOn Profile
              </div>
              <div className="flex items-center gap-2">
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-all"
                  title="Open in new tab">
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a href={pdfUrl} download
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-all"
                  title="Download">
                  <Download className="h-4 w-4" />
                </a>
                <button onClick={() => setOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-all"
                  title="Close">
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* PDF viewer */}
            <div className="flex-1 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={page}
                  initial={{ x: 200, opacity: 0, scale: 0.95 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  exit={{ x: -200, opacity: 0, scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="absolute inset-0 flex items-center justify-center p-2"
                >
                  <div className="w-full h-full max-w-5xl rounded-lg overflow-hidden shadow-2xl bg-white">
                    <object
                      data={pdfUrl}
                      type="application/pdf"
                      className="w-full h-full"
                      title="FocusOn Profile"
                    >
                      <iframe
                        src={pdfUrl}
                        className="w-full h-full border-0"
                        title="FocusOn Profile"
                      />
                    </object>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom bar */}
            <div className="flex items-center justify-center gap-4 px-4 py-3 bg-black/50">
              <button onClick={prev} disabled={page <= 1}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-30 transition-all"
                aria-label="Previous">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2 text-sm">
                <input type="number" value={page}
                  onChange={(e) => { const v = parseInt(e.target.value); if (v >= 1 && v <= TOTAL_PAGES) go(v) }}
                  className="w-12 rounded bg-white/10 px-2 py-1 text-center text-white outline-none focus:ring-1 focus:ring-primary"
                  min={1} max={TOTAL_PAGES} />
                <span className="text-white/60">/ {TOTAL_PAGES}</span>
              </div>
              <button onClick={next} disabled={page >= TOTAL_PAGES}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-30 transition-all"
                aria-label="Next">
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="hidden sm:block w-32 h-1 rounded-full bg-white/10 overflow-hidden ml-4">
                <div className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${(page / TOTAL_PAGES) * 100}%` }} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
