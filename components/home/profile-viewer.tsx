'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
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
  const [total, setTotal] = useState(28)
  const [ready, setReady] = useState(false)
  const [dir, setDir] = useState(1)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pdfRef = useRef<any>(null)
  const loadedRef = useRef<Set<number>>(new Set())

  // Load PDF once
  useEffect(() => {
    if (!open) return
    setPage(1)
    setReady(false)
    loadedRef.current.clear()
    let cancelled = false

    ;(async () => {
      try {
        const pdfjsLib = await import('pdfjs-dist')
        pdfjsLib.GlobalWorkerOptions.workerSrc = `${base}/js/pdf.worker.min.mjs`
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise
        if (cancelled) return
        pdfRef.current = pdf
        setTotal(pdf.numPages)
        setReady(true)
      } catch {
        if (!cancelled) setReady(true)
      }
    })()

    return () => { cancelled = true }
  }, [open])

  // Render page to canvas
  useEffect(() => {
    if (!pdfRef.current || !canvasRef.current || !ready) return
    let cancelled = false

    ;(async () => {
      const pdf = pdfRef.current
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const pageObj = await pdf.getPage(page)
      if (cancelled) return

      const viewport = pageObj.getViewport({ scale: 1.5 })
      canvas.width = viewport.width
      canvas.height = viewport.height
      await pageObj.render({ canvasContext: ctx, viewport }).promise

      loadedRef.current.add(page)

      // Preload neighbour pages
      for (const p of [page - 1, page + 1]) {
        if (p >= 1 && p <= total && !loadedRef.current.has(p)) {
          pdf.getPage(p).then((pg: any) => loadedRef.current.add(p)).catch(() => {})
        }
      }
    })()

    return () => { cancelled = true }
  }, [page, ready, total])

  const go = useCallback((n: number) => {
    if (n < 1 || n > total) return
    setDir(n > page ? 1 : -1)
    setPage(n)
  }, [page, total])

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

  return (
    <>
      {/* Floating Button */}
      <div className="fixed right-0 top-1/3 z-[60] -translate-y-1/2">
        <button
          onClick={() => setOpen(true)}
          className="group relative flex items-center gap-2 rounded-l-full bg-primary px-3 py-3 text-primary-foreground shadow-xl transition-all duration-300 hover:pl-5 hover:shadow-2xl"
        >
          <FileText className="h-4 w-4 shrink-0" />
          <span className="text-[11px] font-bold tracking-wider leading-tight text-left">
            VIEW<br />PROFILE
          </span>
          <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-green-400 shadow-lg shadow-green-400/50 animate-pulse" />
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 lg:px-6 py-3 bg-black/30 backdrop-blur-md border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold text-white">FocusOn Profile</p>
                  <p className="text-[10px] text-white/35">Company Profile &amp; Portfolio</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a href={pdfUrl} download="FocusOn-Profile.pdf"
                  className="flex items-center gap-1.5 rounded-full bg-primary/70 hover:bg-primary px-4 py-1.5 text-xs font-semibold text-white transition-all hover:scale-105 active:scale-95"
                  title="Download PDF">
                  <Download className="h-3.5 w-3.5" /> <span className="hidden sm:inline">Download</span>
                </a>
                <button onClick={() => setOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition-all"
                  title="Close (Esc)">
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 relative overflow-hidden flex items-center justify-center p-2 lg:p-6">
              <AnimatePresence mode="wait" custom={dir}>
                {ready ? (
                  <motion.div
                    key={page}
                    custom={dir}
                    initial={{ x: dir * 250, opacity: 0, rotateY: dir * -8, scale: 0.94 }}
                    animate={{ x: 0, opacity: 1, rotateY: 0, scale: 1 }}
                    exit={{ x: dir * -250, opacity: 0, rotateY: dir * 8, scale: 0.94 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 28, mass: 0.8 }}
                    className="flex items-center justify-center w-full h-full"
                    style={{ perspective: 800 }}
                  >
                    <div className="relative max-w-full max-h-full overflow-auto rounded-xl shadow-2xl shadow-black/40 bg-white">
                      <canvas ref={canvasRef} className="block max-w-full max-h-[75vh] w-auto h-auto" />
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <div className="h-8 w-8 rounded-full border-2 border-white/10 border-t-primary animate-spin" />
                    <p className="text-xs text-white/30">Loading…</p>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom bar */}
            <div className="flex items-center justify-center gap-4 lg:gap-6 px-4 py-3 bg-black/30 backdrop-blur-md border-t border-white/5">
              <button onClick={prev} disabled={page <= 1}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/50 hover:bg-white/10 hover:text-white disabled:opacity-15 transition-all active:scale-90"
                aria-label="Previous page">
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-1.5">
                <input type="number" value={page}
                  onChange={(e) => { const v = parseInt(e.target.value); if (v >= 1 && v <= total) go(v) }}
                  className="w-9 bg-transparent text-center text-sm font-bold text-white outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  min={1} max={total} />
                <span className="text-xs text-white/30">/ {total}</span>
              </div>

              <button onClick={next} disabled={page >= total}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/50 hover:bg-white/10 hover:text-white disabled:opacity-15 transition-all active:scale-90"
                aria-label="Next page">
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Progress */}
              <div className="hidden md:block w-28 lg:w-36 h-1 rounded-full bg-white/5 overflow-hidden">
                <div className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
                  style={{ width: `${(page / total) * 100}%` }} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
