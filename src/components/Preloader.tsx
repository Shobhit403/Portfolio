import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function Preloader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(false)
      return
    }
    const timer = setTimeout(() => setVisible(false), 1300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950"
        >
          <motion.div
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.35em' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-sm uppercase text-bone-300"
          >
            Shobhit Srivastava
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
