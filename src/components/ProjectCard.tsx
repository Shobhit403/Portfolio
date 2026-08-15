import { useState } from 'react'
import type { Project } from '../data/projects'
import { Reveal } from './Reveal'
import { TechTag } from './TechTag'
import { InViewVisual } from './visuals/InViewVisual'
import { SpotlightCard } from './reactbits/SpotlightCard'

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Reveal delay={delay}>
      <SpotlightCard
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group overflow-hidden rounded-[1.5rem] border border-bone-100/10 bg-ink-900/40 transition-colors hover:border-accent/30"
      >
        <div data-cursor-label="View" className="aspect-[16/10] overflow-hidden border-b border-bone-100/10">
          <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]">
            <InViewVisual variant={project.visual} />
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-bone-500">
            <span>{project.index}</span>
            <span>{project.tag}</span>
          </div>
          <h4 className="mt-3 font-display text-xl font-semibold text-bone-100">{project.name}</h4>
          <p className="mt-2 text-sm leading-relaxed text-bone-400">{project.summary}</p>

          <div
            className={`grid transition-[grid-template-rows] duration-400 ease-out ${hovered ? 'grid-rows-[1fr] mt-4' : 'grid-rows-[0fr]'}`}
          >
            <div className="overflow-hidden">
              <ul className="space-y-1.5 border-t border-bone-100/10 pt-4">
                {project.highlights.slice(0, 2).map((h) => (
                  <li key={h} className="flex gap-2 text-xs leading-relaxed text-bone-400">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((s) => (
              <TechTag key={s} label={s} />
            ))}
          </div>
        </div>
      </SpotlightCard>
    </Reveal>
  )
}
