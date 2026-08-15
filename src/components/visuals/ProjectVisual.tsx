import { motion } from 'framer-motion'
import type { Project } from '../../data/projects'

function GstVisual() {
  const rows = [78, 45, 92, 60, 34]
  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <div className="w-full max-w-sm space-y-2">
        {rows.map((w, i) => (
          <div key={i} className="flex items-center gap-3">
            <motion.div
              className="h-2 rounded-full bg-bone-100/10"
              style={{ width: `${w}%` }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2.4, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.span
              className="h-2 w-2 shrink-0 rounded-full bg-accent"
              animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2.4, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        ))}
        <motion.div
          className="mt-6 flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/[0.06] px-4 py-3"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="font-mono text-[11px] text-accent/90">Gemini · generating notice draft</span>
        </motion.div>
      </div>
    </div>
  )
}

function CivicEyeVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <div className="relative aspect-video w-full max-w-sm overflow-hidden rounded-xl border border-bone-100/10 bg-ink-950/60">
        <div className="absolute inset-0 bg-grid-faint bg-[size:20px_20px] opacity-30" />
        <motion.div
          className="absolute left-0 right-0 h-px bg-accent/60"
          animate={{ top: ['5%', '95%', '5%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute h-14 w-16 rounded border-2 border-accent"
          initial={{ left: '58%', top: '40%' }}
          animate={{ left: ['58%', '30%', '58%'], top: ['40%', '52%', '40%'] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="absolute -top-6 left-0 rounded bg-accent px-1.5 py-0.5 font-mono text-[9px] text-ink-950">
            hazard
          </span>
        </motion.div>
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 font-mono text-[10px] text-bone-400">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-accent"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
          GPS locked
        </div>
      </div>
    </div>
  )
}

function ForesightVisual() {
  const bars = [40, 65, 50, 80, 60, 95, 70]
  return (
    <div className="flex h-full w-full items-end justify-center gap-2.5 p-10">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="w-6 rounded-t-md bg-gradient-to-t from-accent/20 to-accent/70"
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </div>
  )
}

function CountifyVisual() {
  const cells = Array.from({ length: 24 })
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="grid grid-cols-6 gap-2">
        {cells.map((_, i) => (
          <motion.div
            key={i}
            className="h-6 w-6 rounded-md border border-bone-100/15 bg-bone-100/5"
            animate={{
              backgroundColor: ['rgba(246,245,242,0.05)', 'rgba(94,224,196,0.35)', 'rgba(246,245,242,0.05)'],
            }}
            transition={{ duration: 3, delay: (i % 6) * 0.15 + Math.floor(i / 6) * 0.25, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>
    </div>
  )
}

function TechsagarVisual() {
  const nodes = ['Web', 'Scrapy', 'Pipeline', 'MongoDB']
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="flex w-full max-w-sm items-center justify-between">
        {nodes.map((n, i) => (
          <div key={n} className="relative flex flex-1 items-center">
            <div className="flex flex-col items-center gap-2">
              <span className="h-3 w-3 rounded-full border-2 border-accent bg-ink-950" />
              <span className="font-mono text-[10px] text-bone-400">{n}</span>
            </div>
            {i < nodes.length - 1 && (
              <div className="relative mx-1 h-px flex-1 bg-bone-100/10">
                <motion.span
                  className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent"
                  animate={{ left: ['0%', '100%'] }}
                  transition={{ duration: 1.8, delay: i * 0.3, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

const map: Record<Project['visual'], React.ComponentType> = {
  gst: GstVisual,
  'civic-eye': CivicEyeVisual,
  foresight: ForesightVisual,
  countify: CountifyVisual,
  techsagar: TechsagarVisual,
}

export function ProjectVisual({ variant }: { variant: Project['visual'] }) {
  const Comp = map[variant]
  return <Comp />
}
