import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <Reveal className={align === 'center' ? 'text-center' : ''}>
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent/80">{eyebrow}</span>
      <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tightest text-bone-100 sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-2xl text-lg leading-relaxed text-bone-300 ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
