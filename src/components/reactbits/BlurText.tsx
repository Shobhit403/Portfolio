import { motion } from 'framer-motion'

/**
 * Letter-by-letter blur-to-sharp reveal, in the spirit of React Bits' Blur Text.
 */
interface BlurTextProps {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
}

export function BlurText({ text, className, delay = 0, staggerDelay = 0.035 }: BlurTextProps) {
  const letters = Array.from(text)

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, filter: 'blur(12px)', y: 14 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.6, delay: delay + i * staggerDelay, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'inline-block', whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
          >
            {letter}
          </motion.span>
        ))}
      </span>
    </span>
  )
}
