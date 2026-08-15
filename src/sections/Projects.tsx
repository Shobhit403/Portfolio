import { SectionHeading } from '../components/SectionHeading'
import { FeaturedProject } from '../components/FeaturedProject'
import { ProjectCard } from '../components/ProjectCard'
import { featuredProjects, otherProjects } from '../data/projects'

export function Projects() {
  return (
    <section id="work" className="relative mx-auto w-[min(92%,80rem)] overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute -right-40 top-1/3 -z-10 h-[34rem] w-[34rem] rounded-full bg-accent/[0.05] blur-[150px]" />
      <SectionHeading
        eyebrow="Selected work"
        title="Five products, shipped end to end"
        description="An enterprise GenAI tax platform, computer-vision safety tooling, and SaaS products — each owned from UI to infrastructure."
      />

      <div className="mt-14">
        {featuredProjects.map((project, i) => (
          <FeaturedProject key={project.id} project={project} reverse={i % 2 === 1} />
        ))}
      </div>

      <div className="mt-16 border-t border-bone-100/10 pt-16">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-bone-500">More work</p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
