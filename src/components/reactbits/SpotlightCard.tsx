import { useRef, useState } from 'react'
import type { MouseEvent, ReactNode } from 'react'

/**
 * Cursor-following radial glow, in the spirit of React Bits' Spotlight Card.
 * Wraps card content; the glow is a sibling overlay so it doesn't interfere
 * with the card's own hover states.
 */
interface SpotlightCardProps {
  children: ReactNode
  className?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export function SpotlightCard({ children, className, onMouseEnter, onMouseLeave }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 50, y: 50 })
  const [opacity, setOpacity] = useState(0)

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => {
        setOpacity(1)
        onMouseEnter?.()
      }}
      onMouseLeave={() => {
        setOpacity(0)
        onMouseLeave?.()
      }}
      className={`relative ${className ?? ''}`}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(280px circle at ${pos.x}% ${pos.y}%, rgba(94,224,196,0.14), transparent 70%)`,
        }}
      />
    </div>
  )
}
