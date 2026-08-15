import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { CredentialDoc } from '../data/misc'

interface CertificateModalProps {
  open: boolean
  onClose: () => void
  name: string
  issuer: string
  credential: CredentialDoc
}

export function CertificateModal({ open, onClose, name, issuer, credential }: CertificateModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink-950/85 p-4 backdrop-blur-sm sm:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex h-full max-h-[42rem] w-full max-w-3xl flex-col overflow-hidden rounded-[1.75rem] border border-bone-100/10 bg-ink-900"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-bone-100/10 p-6">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent/80">{issuer}</span>
                <h3 id="cert-modal-title" className="mt-1.5 font-display text-xl font-semibold text-bone-100">
                  {name}
                </h3>
                {credential.credentialId && (
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-bone-500">
                    <span className="font-mono text-[11px] text-bone-600">ID {credential.credentialId}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={credential.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-bone-100/20 px-4 py-2 text-xs font-medium text-bone-100 transition-colors hover:border-accent/40 hover:text-accent"
                >
                  Open in new tab
                </a>
                <a
                  href={credential.fileUrl}
                  download
                  className="rounded-full bg-bone-100 px-4 py-2 text-xs font-medium text-ink-950 transition-transform hover:scale-[1.03]"
                >
                  Download
                </a>
                <button
                  ref={closeRef}
                  onClick={onClose}
                  aria-label="Close certificate viewer"
                  className="ml-1 flex h-8 w-8 items-center justify-center rounded-full text-bone-400 transition-colors hover:bg-bone-100/10 hover:text-bone-100"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-auto bg-bone-100">
              {credential.kind === 'image' ? (
                <img src={credential.fileUrl} alt={`${name} certificate`} className="mx-auto h-full w-full object-contain" />
              ) : (
                <iframe title={`${name} certificate PDF`} src={credential.fileUrl} className="h-full w-full" />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
