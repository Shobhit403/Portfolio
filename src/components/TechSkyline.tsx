import { motion } from 'framer-motion'
import { Sparkle } from 'lucide-react'
import {
  SiReact,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiVite,
  SiPython,
  SiDjango,
  SiFlask,
  SiGooglecloud,
  SiDocker,
  SiGit,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'

const stack = [
  { Icon: SiReact, label: 'React', size: 26 },
  { Icon: SiTypescript, label: 'TypeScript', size: 38 },
  { Icon: SiRedux, label: 'Redux', size: 22 },
  { Icon: SiTailwindcss, label: 'Tailwind CSS', size: 30 },
  { Icon: SiVite, label: 'Vite', size: 42 },
  { Icon: SiPython, label: 'Python', size: 24 },
  { Icon: SiDjango, label: 'Django', size: 34 },
  { Icon: SiFlask, label: 'Flask', size: 20 },
  { Icon: SiGooglecloud, label: 'Google Cloud', size: 40 },
  { Icon: FaAws, label: 'AWS', size: 28 },
  { Icon: SiDocker, label: 'Docker', size: 44 },
  { Icon: SiGit, label: 'Git', size: 26 },
]

export function TechSkyline() {
  return (
    <div className="mt-10 border-t border-bone-100/5 pt-8">
      <div className="relative flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-accent/70">
        <Sparkle className="h-3 w-3" strokeWidth={1.75} />
        Built with
        <motion.span
          className="absolute -top-1 left-20 h-1 w-1 rounded-full bg-accent"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          className="absolute -top-2 left-36 h-[3px] w-[3px] rounded-full bg-accent/70"
          animate={{ opacity: [1, 0.15, 1] }}
          transition={{ duration: 3.1, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        />
      </div>

      <div
        className="mt-6 flex items-end justify-between gap-2 overflow-x-auto border-b border-bone-100/10 pb-4 sm:gap-4"
        tabIndex={0}
        role="list"
        aria-label="Technologies used to build this site"
      >
        {stack.map(({ Icon, label, size }) => (
          <div key={label} className="group flex shrink-0 flex-col items-center" title={label} role="listitem">
            <Icon
              size={size}
              className="text-bone-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-accent"
              aria-hidden
            />
            <span className="sr-only">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
