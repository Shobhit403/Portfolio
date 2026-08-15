import { useEffect, useRef, useState } from 'react'

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [mode, setMode] = useState<'default' | 'hover' | 'label'>('default')
  const [label, setLabel] = useState('')

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isFine || prefersReduced) return
    setEnabled(true)
    document.body.classList.add('cursor-none')

    let ringX = 0
    let ringY = 0
    let targetX = 0
    let targetY = 0

    function onMove(e: MouseEvent) {
      targetX = e.clientX
      targetY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`
      }
      const target = e.target as HTMLElement
      const labelEl = target.closest('[data-cursor-label]') as HTMLElement | null
      if (labelEl) {
        setMode('label')
        setLabel(labelEl.dataset.cursorLabel ?? '')
      } else if (target.closest('a, button, [data-cursor="hover"]')) {
        setMode('hover')
      } else {
        setMode('default')
      }
    }

    let frame: number
    function tick() {
      ringX += (targetX - ringX) * 0.18
      ringY += (targetY - ringY) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      }
      frame = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    frame = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
      document.body.classList.remove('cursor-none')
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        className={`pointer-events-none fixed left-0 top-0 z-[70] h-1.5 w-1.5 rounded-full bg-accent transition-opacity duration-200 ${
          mode === 'label' ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[70] flex items-center justify-center rounded-full border transition-[width,height,border-color,background-color] duration-200 ease-out ${
          mode === 'label'
            ? 'h-16 w-16 border-transparent bg-accent'
            : mode === 'hover'
              ? 'h-10 w-10 border-accent/70'
              : 'h-7 w-7 border-bone-100/30'
        }`}
        aria-hidden
      >
        {mode === 'label' && (
          <span className="font-mono text-[10px] font-medium uppercase tracking-wide text-ink-950">{label}</span>
        )}
      </div>
    </>
  )
}
