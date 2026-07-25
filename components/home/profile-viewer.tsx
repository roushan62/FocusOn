'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FileText, X, Download } from 'lucide-react'

let base = ''
if (typeof window !== 'undefined') {
  base = window.location.pathname.startsWith('/FocusOn') ? '/FocusOn' : ''
}
const pdfUrl = `${base}/profile.pdf`

export function ProfileViewer() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [open])

  return (
    <>
      {/* Floating Button */}
      <div className="fixed right-0 top-1/3 z-[60] -translate-y-1/2">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-l-full bg-primary px-3 py-3 text-primary-foreground shadow-xl transition-all hover:shadow-2xl"
        >
          <FileText className="h-4 w-4 shrink-0" />
          <span className="text-[11px] font-bold tracking-wider leading-tight text-left">
            VIEW<br />PROFILE
          </span>
        </button>
      </div>

      {/* Modal - Simple PDF Viewer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col bg-white"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-2 border-b bg-gray-50">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <FileText className="h-4 w-4" />
                FocusOn Profile
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={pdfUrl}
                  download="FocusOn-Profile.pdf"
                  className="flex items-center gap-1.5 rounded bg-primary px-3 py-1.5 text-xs font-semibold text-white hover:bg-primary/90"
                >
                  <Download className="h-3.5 w-3.5" /> Download PDF
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-7 w-7 items-center justify-center rounded text-gray-400 hover:text-gray-600 hover:bg-gray-200"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* PDF */}
            <div className="flex-1">
              <iframe
                src={pdfUrl}
                className="h-full w-full border-0"
                title="FocusOn Profile"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
