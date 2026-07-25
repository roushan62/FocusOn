'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, FileText, ExternalLink, ZoomIn, ZoomOut, RotateCw, Download } from 'lucide-react'

const prefix = typeof window !== 'undefined' && window.location.pathname.startsWith('/FocusOn') ? '/FocusOn' : ''

export function ProfileViewer() {
  const [open, setOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [direction, setDirection] = useState(0)
  const [scale, setScale] = useState(1)
  const [numPages, setNumPages] = useState(0)
  const [pageNum, setPageNum] = useState(1)
  const [loading, setLoading] = useState(true)

  const pdfUrl = `${prefix}/Focus on Updated Deck..pdf`

  // Use iframe-based approach for reliability with static export
  // We track page changes via the direction state for animation

  const totalPagesEstimated = 28 // Estimate based on typical deck size

  const goToPage = useCallback((page: number) => {
    setDirection(page > pageNum ? 1 : -1)
    setPageNum(page)
    setCurrentPage(page)
    setLoading(true)
    // Reset loading after short delay for animation
    setTimeout(() => setLoading(false), 400)
  }, [pageNum])

  const nextPage = useCallback(() => {
    if (pageNum < totalPagesEstimated) goToPage(pageNum + 1)
  }, [pageNum, totalPagesEstimated, goToPage])

  const prevPage = useCallback(() => {
    if (pageNum > 1) goToPage(pageNum - 1)
  }, [pageNum, goToPage])

  // Keyboard shortcuts
  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextPage()
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevPage()
      else if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, nextPage, prevPage])

  // Load PDF info on mount
  useEffect(() => {
    if (!open) return
    setPageNum(1)
    setCurrentPage(1)
    setScale(1)
    setLoading(true)
    setTimeout(() => setLoading(false), 600)
  }, [open])

  return (
    <>
      {/* Floating Profile Button */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
        className="fixed right-0 top-1/2 z-50 -translate-y-1/2"
      >
        <button
          onClick={() => setOpen(true)}
          className="group flex items-center gap-2 rounded-l-full bg-primary px-4 py-3 pl-3 text-sm font-semibold text-primary-foreground shadow-xl transition-all duration-300 hover:pl-5 hover:shadow-2xl hover:scale-105"
          style={{ writingMode: 'vertical-lr' as const, textOrientation: 'mixed' }}
        >
          <FileText className="h-4 w-4 rotate-90 shrink-0" />
          <span className="tracking-wider text-[10px]">VIEW PROFILE</span>
        </button>
        {/* Small glow indicator */}
        <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm"
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:scale-110"
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
                <button
                  onClick={() => setScale((s) => Math.min(s + 0.25, 2))}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-white/20"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => setScale((s) => Math.max(s - 0.25, 0.5))}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-white/20"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="h-3.5 w-3.5" />
                </button>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-white/20"
                  aria-label="Open in new tab"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href={pdfUrl}
                  download="FocusOn-Profile.pdf"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-white/20"
                  aria-label="Download"
                >
                  <Download className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* PDF Viewer Area */}
            <div className="relative flex h-full w-full items-center justify-center pt-16 pb-20 px-4">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={pageNum}
                  custom={direction}
                  initial={{ 
                    x: direction > 0 ? 300 : -300, 
                    opacity: 0,
                    rotateY: direction > 0 ? -15 : 15,
                    scale: 0.95
                  }}
                  animate={{ 
                    x: 0, 
                    opacity: 1, 
                    rotateY: 0,
                    scale: 1
                  }}
                  exit={{ 
                    x: direction > 0 ? -300 : 300, 
                    opacity: 0,
                    rotateY: direction > 0 ? 15 : -15,
                    scale: 0.95
                  }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 300, 
                    damping: 30,
                    mass: 1
                  }}
                  className="flex items-center justify-center"
                  style={{ perspective: 1200 }}
                >
                  {loading ? (
                    <div className="flex flex-col items-center gap-4">
                      <div className="h-12 w-12 rounded-full border-2 border-white/20 border-t-primary animate-spin" />
                      <p className="text-sm text-white/50">Loading page {pageNum}...</p>
                    </div>
                  ) : (
                    <div
                      className="overflow-hidden rounded-2xl shadow-2xl bg-white"
                      style={{
                        width: `${Math.min(90, 50 * scale)}vw`,
                        maxWidth: `${Math.min(900, 500 * scale)}px`,
                        height: `${Math.min(75, 42 * scale)}vh`,
                        maxHeight: '85vh',
                      }}
                    >
                      <iframe
                        src={`${pdfUrl}#page=${pageNum}&toolbar=0&navpanes=0`}
                        className="h-full w-full border-0"
                        title={`Profile page ${pageNum}`}
                        onLoad={() => setLoading(false)}
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center gap-6 px-4 py-4 bg-gradient-to-t from-black/60 to-transparent">
              <button
                onClick={prevPage}
                disabled={pageNum <= 1}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Page counter */}
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={pageNum}
                  onChange={(e) => {
                    const p = parseInt(e.target.value)
                    if (p >= 1 && p <= totalPagesEstimated) goToPage(p)
                  }}
                  className="w-12 rounded-lg bg-white/10 px-2 py-1.5 text-center text-sm font-semibold text-white outline-none focus:ring-2 focus:ring-primary"
                  min={1}
                  max={totalPagesEstimated}
                />
                <span className="text-sm text-white/60">/ {totalPagesEstimated}</span>
              </div>

              <button
                onClick={nextPage}
                disabled={pageNum >= totalPagesEstimated}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next page"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Page progress */}
              <div className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 w-1/3">
                <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-500"
                    style={{ width: `${(pageNum / totalPagesEstimated) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
