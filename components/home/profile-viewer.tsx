'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, FileText, Download } from 'lucide-react'

let base = ''
if (typeof window !== 'undefined') {
  base = window.location.pathname.startsWith('/FocusOn') ? '/FocusOn' : ''
}
const pdfUrl = `${base}/profile.pdf`

export function ProfileViewer() {
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pdfDocRef = useRef<any>(null)

  // Load PDF.js and render page
  useEffect(() => {
    if (!open) return
    setPage(1)
    setLoading(true)
    pdfDocRef.current = null

    const loadPdf = async () => {
      try {
        // Load pdfjs-dist and set worker
        const pdfjsLib = await import('pdfjs-dist')
        const workerUrl = `${base}/js/pdf.worker.min.mjs`
        pdfjsLib.GlobalWorkerOptions.workerSrc = workerUrl
        
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise
        pdfDocRef.current = pdf
        setTotalPages(pdf.numPages)
        setLoading(false)
      } catch (err) {
        console.error('PDF load error:', err)
        setLoading(false)
      }
    }
    loadPdf()
  }, [open])

  // Render current page to canvas
  useEffect(() => {
    if (!pdfDocRef.current || !canvasRef.current) return
    const renderPage = async () => {
      const pdf = pdfDocRef.current
      const canvas = canvasRef.current
      if (!canvas) return
      
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const pageObj = await pdf.getPage(page)
      const viewport = pageObj.getViewport({ scale: 1.5 })
      canvas.width = viewport.width
      canvas.height = viewport.height
      
      await pageObj.render({ canvasContext: ctx, viewport }).promise
    }
    renderPage()
  }, [page, loading])

  const go = useCallback((n: number) => {
    if (n >= 1 && (!totalPages || n <= totalPages)) setPage(n)
  }, [totalPages])

  const next = useCallback(() => go(page + 1), [go, page])
  const prev = useCallback(() => go(page - 1), [go, page])

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

  const total = totalPages || 28

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
            className="fixed inset-0 z-[100] flex flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-black/40 backdrop-blur-sm border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">FocusOn Profile</p>
                  <p className="text-[10px] text-white/40">Company Profile &amp; Portfolio</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a href={pdfUrl} download="FocusOn-Profile.pdf"
                  className="flex items-center gap-1.5 rounded-full bg-primary/80 hover:bg-primary px-4 py-1.5 text-xs font-semibold text-white transition-all hover:scale-105"
                  title="Download PDF">
                  <Download className="h-3.5 w-3.5" /> PDF
                </a>
                <button onClick={() => setOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/50 hover:bg-white/10 hover:text-white transition-all"
                  title="Close (Esc)">
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* PDF Canvas Viewer */}
            <div className="flex-1 relative overflow-hidden flex items-center justify-center p-2 md:p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={page}
                  initial={{ x: 200, opacity: 0, rotateY: -10, scale: 0.92 }}
                  animate={{ x: 0, opacity: 1, rotateY: 0, scale: 1 }}
                  exit={{ x: -200, opacity: 0, rotateY: 10, scale: 0.92 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                  className="flex items-center justify-center w-full h-full"
                  style={{ perspective: 1000 }}
                >
                  {loading ? (
                    <div className="text-center">
                      <div className="inline-block h-10 w-10 rounded-full border-2 border-white/10 border-t-primary animate-spin" />
                      <p className="mt-4 text-sm text-white/40">Loading profile...</p>
                    </div>
                  ) : (
                    <div className="relative max-w-full max-h-full overflow-auto rounded-xl shadow-2xl shadow-black/50 bg-white">
                      <canvas ref={canvasRef} className="block max-w-full max-h-[80vh] w-auto h-auto" />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom bar */}
            <div className="flex items-center justify-center gap-4 md:gap-6 px-4 py-3 bg-black/40 backdrop-blur-sm border-t border-white/5">
              <button onClick={prev} disabled={page <= 1}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white disabled:opacity-20 transition-all"
                aria-label="Previous">
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 bg-white/5 rounded-lg px-3 py-1.5">
                  <input type="number" value={page}
                    onChange={(e) => { const v = parseInt(e.target.value); if (v >= 1 && v <= total) go(v) }}
                    className="w-10 bg-transparent text-center text-sm font-bold text-white outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    min={1} max={total} />
                  <span className="text-xs text-white/40">/ {total}</span>
                </div>
              </div>

              <button onClick={next} disabled={page >= total}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white disabled:opacity-20 transition-all"
                aria-label="Next">
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Progress bar */}
              <div className="hidden md:block absolute bottom-5 left-1/2 -translate-x-1/2 w-1/4 max-w-[200px]">
                <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
                    style={{ width: `${(page / total) * 100}%` }} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
