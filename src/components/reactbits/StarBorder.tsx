import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

/**
 * Rotating conic-gradient ring around its children, in the spirit of
 * React Bits' Star Border. The child must have an opaque background so
 * only the thin ring shows.
 */
interface StarBorderProps {
  children: ReactNode
  className?: string
  speed?: number
}

const gradient =
  'conic-gradient(from 0deg, transparent 0%, #5ee0c4 8%, transparent 20%, transparent 80%, #5ee0c4 92%, transparent 100%)'

export function StarBorder({ children, className, speed = 4 }: StarBorderProps) {
  const reduced = usePrefersReducedMotion()

  return (
    <div className={`relative inline-flex rounded-full p-[1.5px] ${className ?? ''}`}>
      {reduced ? (
        <div className="absolute inset-0 rounded-full" style={{ background: gradient }} />
      ) : (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ background: gradient }}
          animate={{ rotate: 360 }}
          transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
        />
      )}
      <div className="relative z-10 flex w-full">{children}</div>
    </div>
  )
}
