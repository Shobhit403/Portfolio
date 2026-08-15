import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'

const stages = [
  { label: 'React / TypeScript', detail: 'Frontend UI' },
  { label: 'Django · Flask', detail: 'REST API layer' },
  { label: 'Vertex AI · Gemini', detail: 'GenAI reasoning' },
  { label: 'Firestore · BigQuery · GCS', detail: 'Data & storage' },
  { label: 'Cloud Run', detail: 'Deployment' },
  { label: 'Cloud Build', detail: 'CI/CD' },
]

export function EngineeringFlow() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { margin: '200px 0px', once: false })

  return (
    <section className="relative mx-auto w-[min(92%,80rem)] py-28 sm:py-36">
      <SectionHeading
        eyebrow="System design"
        title="How it fits together"
        description="The path a request takes through the systems I build — from interface to inference to infrastructure."
      />

      <Reveal delay={0.15} className="mt-16">
        <div
          ref={ref}
          className="relative overflow-x-auto rounded-2xl"
          tabIndex={0}
          role="group"
          aria-label="Request flow: React and TypeScript, to Django and Flask, to Vertex AI and Gemini, to Firestore, BigQuery and Cloud Storage, to Cloud Run, to Cloud Build"
        >
          <div className="flex min-w-[860px] items-stretch gap-0 lg:min-w-0">
            {stages.map((stage, i) => (
              <div key={stage.label} className="relative flex flex-1 items-center">
                <div className="flex w-full flex-col items-center gap-3 rounded-2xl border border-bone-100/10 bg-ink-900/40 px-4 py-6 text-center">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-sm font-semibold text-bone-100 sm:text-base">{stage.label}</span>
                  <span className="text-xs text-bone-400">{stage.detail}</span>
                </div>
                {i < stages.length - 1 && (
                  <div className="relative mx-2 h-px w-8 shrink-0 bg-bone-100/10 sm:w-10">
                    {inView && (
                      <motion.span
                        className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent"
                        animate={{ left: ['0%', '100%'] }}
                        transition={{ duration: 1.6, delay: i * 0.25, repeat: Infinity, ease: 'linear' }}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
