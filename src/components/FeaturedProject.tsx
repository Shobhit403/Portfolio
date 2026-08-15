import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Project } from '../data/projects'
import { Reveal } from './Reveal'
import { TechTag } from './TechTag'
import { InViewVisual } from './visuals/InViewVisual'

export function FeaturedProject({ project, reverse = false }: { project: Project; reverse?: boolean }) {
  const [open, setOpen] = useState(false)

  return (
    <Reveal className="border-t border-bone-100/10 py-16 first:border-t-0 first:pt-0 sm:py-20">
      <div className={`grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16 ${reverse ? 'md:[direction:rtl]' : ''}`}>
        <div className={reverse ? 'md:[direction:ltr]' : ''}>
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-accent/80">
            <span>{project.index}</span>
            <span className="h-px w-8 bg-accent/40" />
            <span className="uppercase text-bone-400">{project.tag}</span>
          </div>

          <h3 className="mt-5 text-balance font-display text-3xl font-semibold tracking-tightest text-bone-100 sm:text-4xl">
            {project.name}
          </h3>

          <p className="mt-5 max-w-lg leading-relaxed text-bone-300">{project.summary}</p>
          <p className="mt-4 text-sm text-bone-400">{project.role}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <TechTag key={s} label={s} />
            ))}
          </div>

          <ul className="mt-6 space-y-2.5">
            {project.highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-bone-300">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-bone-500" />
                {h}
              </li>
            ))}
          </ul>

          {project.caseStudy && (
            <button
              onClick={() => setOpen((v) => !v)}
              className="group mt-8 flex items-center gap-2 text-sm font-medium text-bone-100"
              aria-expanded={open}
            >
              {open ? 'Hide Case Study' : 'View Case Study'}
              <span className={`transition-transform ${open ? 'rotate-90' : 'group-hover:translate-x-1'}`}>→</span>
            </button>
          )}
        </div>

        <div className={reverse ? 'md:[direction:ltr]' : ''}>
          {project.caseStudy ? (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={`${open ? 'Hide' : 'View'} case study for ${project.name}`}
              aria-expanded={open}
              data-cursor-label={open ? 'Close' : 'Explore'}
              className="block aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] border border-bone-100/10 bg-ink-900/40 text-left transition-colors hover:border-accent/30"
            >
              <InViewVisual variant={project.visual} />
            </button>
          ) : (
            <div className="aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] border border-bone-100/10 bg-ink-900/40">
              <InViewVisual variant={project.visual} />
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {open && project.caseStudy && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-10 max-w-2xl space-y-7 border-t border-bone-100/10 pt-10">
              {project.caseStudy.map((sec, i) => (
                <motion.div
                  key={sec.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: open ? i * 0.09 : 0, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-5"
                >
                  <span className="mt-1 w-24 shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-accent/80">
                    {sec.label}
                  </span>
                  <p className="text-sm leading-relaxed text-bone-300">{sec.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Reveal>
  )
}
