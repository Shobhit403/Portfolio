import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

/**
 * Ambient drifting glow field, in the spirit of React Bits' Aurora background —
 * reimplemented in CSS/Framer Motion (no WebGL) to keep it viewport-gated and
 * light on the main thread. Uses only the site's accent family, no new hues.
 */
export function Aurora() {
  const reduced = usePrefersReducedMotion()

  if (reduced) {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-accent/10 blur-[120px] opacity-60" />
        <div className="absolute top-1/3 -left-24 h-[28rem] w-[28rem] rounded-full bg-accent-soft/[0.07] blur-[110px] opacity-40" />
        <div className="absolute -bottom-16 right-1/4 h-[24rem] w-[24rem] rounded-full bg-accent-dim/[0.18] blur-[130px] opacity-50" />
      </div>
    )
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-accent/10 blur-[120px]"
        whileInView={{ opacity: [0.5, 0.8, 0.5], x: [0, 40, 0], y: [0, -24, 0] }}
        viewport={{ once: false }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -left-24 h-[28rem] w-[28rem] rounded-full bg-accent-soft/[0.07] blur-[110px]"
        whileInView={{ opacity: [0.3, 0.6, 0.3], x: [0, -32, 0], y: [0, 28, 0] }}
        viewport={{ once: false }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />
      <motion.div
        className="absolute -bottom-16 right-1/4 h-[24rem] w-[24rem] rounded-full bg-accent-dim/[0.18] blur-[130px]"
        whileInView={{ opacity: [0.35, 0.65, 0.35], x: [0, 24, 0] }}
        viewport={{ once: false }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2.4 }}
      />
    </div>
  )
}
