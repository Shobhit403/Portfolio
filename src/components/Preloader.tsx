import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const NAME = 'SHOBHIT SRIVASTAVA'

// Angles for the converging light beams, echoing the way a cinematic
// wordmark intro draws its letters from sweeping light rather than a
// straight fade — reimplemented natively (CSS/SVG timing), not the
// original studio's asset.
const beamAngles = [-42, -22, -6, 8, 24, 40]

export function Preloader() {
  const [visible, setVisible] = useState(true)
  const [impact, setImpact] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(false)
      return
    }
    const t1 = setTimeout(() => setImpact(true), 1050)
    const t2 = setTimeout(() => setVisible(false), 1750)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden="true"
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-ink-950"
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            {beamAngles.map((angle, i) => (
              <motion.span
                key={angle}
                className="absolute h-px w-[75vw] bg-gradient-to-r from-transparent via-accent/70 to-transparent"
                style={{ rotate: angle }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: [0, 1, 0.5], opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              />
            ))}
          </div>

          {impact && (
            <motion.div
              className="pointer-events-none absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{ background: 'radial-gradient(circle at 50% 50%, rgba(94,224,196,0.35), transparent 60%)' }}
            />
          )}

          <div className="relative px-6">
            <span
              aria-hidden
              className="block select-none whitespace-nowrap text-center font-display text-[clamp(1.5rem,7vw,4.5rem)] font-bold uppercase tracking-[0.04em] text-bone-100/[0.08]"
            >
              {NAME}
            </span>
            <motion.span
              className="absolute inset-0 block select-none whitespace-nowrap text-center font-display text-[clamp(1.5rem,7vw,4.5rem)] font-bold uppercase tracking-[0.04em] text-bone-100"
              style={{ textShadow: '0 0 26px rgba(94,224,196,0.5)' }}
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)', scale: impact ? [1, 1.045, 1] : 1 }}
              transition={{
                clipPath: { duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] },
                scale: { duration: 0.4, ease: 'easeOut' },
              }}
            >
              {NAME}
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
