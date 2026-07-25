'use client'

import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, FileText, ExternalLink, Download } from 'lucide-react'

const TOTAL_PAGES = 28

export function ProfileViewer() {
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState(1)
  const [dir, setDir] = useState(0)
  const [loading, setLoading] = useState(true)

  // Reliable base path detection
  const base = typeof window !== 'undefined' && window.location.pathname.startsWith('/FocusOn') ? '/FocusOn' : ''
  const pdfUrl = `${base}/Focus on Updated Deck..pdf`

  const go = useCallback((p: number) => {
    if (p < 1 || p > TOTAL_PAGES) return
    setDir(p > page ? 1 : -1)
    setPage(p)
    setLoading(true)
  }, [page])

  const next = useCallback(() => go(page + 1), [go, page])
  const prev = useCallback(() => go(page - 1), [go, page])

  useEffect(() => {
    if (!open) return
    setPage(1)
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [open])

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next()
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev()
      else if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, next, prev])

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
        className="fixed right-0 top-1/2 z-50 -translate-y-1/2"
      >
        <button
          onClick={() => setOpen(true)}
          className="group flex items-center gap-2 rounded-l-full bg-primary px-4 py-3 pl-3 text-sm font-semibold text-primary-foreground shadow-xl transition-all duration-300 hover:pl-5 hover:shadow-2xl hover:scale-105"
          style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}
        >
          <FileText className="h-4 w-4 rotate-90 shrink-0" />
          <span className="tracking-wider text-[10px]">VIEW PROFILE</span>
        </button>
        <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm"
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:scale-110"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 md:px-8 py-3 bg-gradient-to-b from-black/60 to-transparent">
              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4 text-white/70" />
                <span className="text-sm font-medium text-white/80">FocusOn Profile</span>
              </div>
              <div className="flex items-center gap-2">
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-white/20"
                  aria-label="Open in new tab">
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a href={pdfUrl} download="FocusOn-Profile.pdf"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-white/20"
                  aria-label="Download">
                  <Download className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="relative flex h-full w-full items-center justify-center pt-16 pb-20 px-4">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={page}
                  custom={dir}
                  initial={{ x: dir > 0 ? 400 : -400, opacity: 0, rotateY: dir > 0 ? -20 : 20, scale: 0.92 }}
                  animate={{ x: 0, opacity: 1, rotateY: 0, scale: 1 }}
                  exit={{ x: dir > 0 ? -400 : 400, opacity: 0, rotateY: dir > 0 ? 20 : -20, scale: 0.92 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                  className="flex items-center justify-center w-full h-full"
                  style={{ perspective: 1200 }}
                >
                  {loading ? (
                    <div className="flex flex-col items-center gap-4">
                      <div className="h-12 w-12 rounded-full border-2 border-white/20 border-t-primary animate-spin" />
                      <p className="text-sm text-white/50">Loading page {page}...</p>
                    </div>
                  ) : (
                    <div className="w-full h-full max-w-[900px] max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl bg-white">
                      <iframe
                        src={pdfUrl}
                        className="h-full w-full border-0"
                        title="FocusOn Profile"
                        onLoad={() => setLoading(false)}
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center gap-6 px-4 py-4 bg-gradient-to-t from-black/60 to-transparent">
              <button onClick={prev} disabled={page <= 1}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous">
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3">
                <input type="number" value={page}
                  onChange={(e) => {
                    const p = parseInt(e.target.value)
                    if (p >= 1 && p <= TOTAL_PAGES) go(p)
                  }}
                  className="w-12 rounded-lg bg-white/10 px-2 py-1.5 text-center text-sm font-semibold text-white outline-none focus:ring-2 focus:ring-primary"
                  min={1} max={TOTAL_PAGES} />
                <span className="text-sm text-white/60">/ {TOTAL_PAGES}</span>
              </div>

              <button onClick={next} disabled={page >= TOTAL_PAGES}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next">
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 w-1/3">
                <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full bg-primary transition-all duration-500"
                    style={{ width: `${(page / TOTAL_PAGES) * 100}%` }} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
