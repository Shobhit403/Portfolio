import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { MouseEvent, ReactNode } from 'react'

/**
 * Small particle burst from the click point, in the spirit of React Bits'
 * Click Spark. Wraps any element; fires on click without interfering with
 * the child's own onClick.
 */
interface Spark {
  id: number
  x: number
  y: number
  angle: number
}

let sparkId = 0

export function ClickSpark({ children, className }: { children: ReactNode; className?: string }) {
  const [sparks, setSparks] = useState<Spark[]>([])

  function handleClick(e: MouseEvent<HTMLDivElement>) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const count = 8
    const batch: Spark[] = Array.from({ length: count }, (_, i) => ({
      id: sparkId++,
      x,
      y,
      angle: (360 / count) * i,
    }))
    setSparks((prev) => [...prev, ...batch])
    setTimeout(() => {
      setSparks((prev) => prev.filter((s) => !batch.some((b) => b.id === s.id)))
    }, 500)
  }

  return (
    <div className={`relative ${className ?? ''}`} onClickCapture={handleClick}>
      {children}
      <AnimatePresence>
        {sparks.map((s) => (
          <motion.span
            key={s.id}
            className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(94,224,196,0.9)]"
            style={{ left: s.x, top: s.y }}
            initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            animate={{
              opacity: 0,
              x: Math.cos((s.angle * Math.PI) / 180) * 46,
              y: Math.sin((s.angle * Math.PI) / 180) * 46,
              scale: 0,
            }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
