import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { TechTag } from '../components/TechTag'
import { experience } from '../data/experience'

export function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.5'] })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="experience" className="relative mx-auto w-[min(92%,80rem)] overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-[30rem] w-[30rem] rounded-full bg-accent/[0.06] blur-[140px]" />
      <SectionHeading
        eyebrow="Career"
        title="Three years, one throughline"
        description="Shipping full-stack products end to end — from the first UI sketch to the Cloud Build pipeline that deploys it."
      />

      <div ref={ref} className="relative mt-16">
        <div className="absolute left-[10px] top-2 hidden h-full w-px bg-bone-100/10 sm:block" />
        <motion.div
          style={{ scaleY }}
          className="absolute left-[10px] top-2 hidden h-full w-px origin-top bg-accent sm:block"
        />

        <ol className="space-y-16">
          {experience.map((entry) => (
            <li key={entry.id} className="flex gap-6 sm:gap-8">
              <div className="hidden w-5 flex-none justify-center pt-2 sm:flex">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-accent/50 bg-ink-950">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </span>
              </div>

              <Reveal delay={0.05} className="min-w-0 flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-2xl font-semibold text-bone-100">{entry.company}</h3>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-bone-500">{entry.period}</span>
                </div>
                <p className="mt-1 text-sm text-accent">{entry.role} · {entry.location}</p>
                {entry.note && <p className="mt-1 text-xs text-bone-500">{entry.note}</p>}

                <p className="mt-5 max-w-2xl leading-relaxed text-bone-300">{entry.summary}</p>

                <ul className="mt-5 space-y-2.5">
                  {entry.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-relaxed text-bone-300">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-bone-500" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {entry.stack.map((s) => (
                    <TechTag key={s} label={s} />
                  ))}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
