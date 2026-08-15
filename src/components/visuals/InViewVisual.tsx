import { useRef } from 'react'
import { useInView } from 'framer-motion'
import type { Project } from '../../data/projects'
import { ProjectVisual } from './ProjectVisual'

export function InViewVisual({ variant }: { variant: Project['visual'] }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { margin: '200px 0px', once: false })

  return (
    <div ref={ref} className="h-full w-full">
      {inView && <ProjectVisual variant={variant} />}
    </div>
  )
}
