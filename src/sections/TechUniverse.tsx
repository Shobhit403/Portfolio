import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { skillCategories } from '../data/skills'

export function TechUniverse() {
  const [activeId, setActiveId] = useState(skillCategories[0].id)
  const active = skillCategories.find((c) => c.id === activeId)!

  return (
    <section id="stack" className="relative mx-auto w-[min(92%,80rem)] py-28 sm:py-36">
      <SectionHeading
        eyebrow="Toolkit"
        title="What I build with"
        description="The stack behind every project below — spanning frontend, backend, cloud infrastructure and applied AI."
      />

      <Reveal delay={0.15} className="mt-14">
        <div className="grid grid-cols-1 gap-2 rounded-[2rem] border border-bone-100/10 bg-ink-900/40 p-2 lg:grid-cols-[0.9fr_1.6fr]">
          <ul className="flex flex-row gap-1 overflow-x-auto p-2 lg:flex-col lg:overflow-visible">
            {skillCategories.map((cat) => (
              <li key={cat.id} className="shrink-0 lg:shrink">
                <button
                  onMouseEnter={() => setActiveId(cat.id)}
                  onFocus={() => setActiveId(cat.id)}
                  onClick={() => setActiveId(cat.id)}
                  className={`group relative w-full rounded-2xl px-5 py-4 text-left transition-colors ${
                    activeId === cat.id ? 'text-bone-100' : 'text-bone-400 hover:text-bone-200'
                  }`}
                >
                  {activeId === cat.id && (
                    <motion.span
                      layoutId="tech-active-bg"
                      className="absolute inset-0 -z-10 rounded-2xl bg-bone-100/[0.06]"
                      transition={{ type: 'spring', stiffness: 350, damping: 32 }}
                    />
                  )}
                  <span className="block font-display text-lg font-medium">{cat.label}</span>
                  <span className="mt-1 hidden text-xs text-bone-500 lg:block">{cat.items.length} technologies</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="relative overflow-hidden rounded-[1.5rem] bg-ink-950/60 p-8 sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:40px_40px] opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_20%_20%,black,transparent)]" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <p className="max-w-md text-sm leading-relaxed text-bone-400">{active.description}</p>
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {active.items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.03 }}
                      className="rounded-full border border-bone-100/15 bg-bone-100/[0.04] px-4 py-2 font-mono text-sm text-bone-200"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
