import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import aboutImage from '../assets/images/shobhit-google-2.webp'

export function About() {
  const frameRef = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({ target: frameRef, offset: ['start end', 'end start'] })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section id="about" className="relative mx-auto w-[min(92%,80rem)] py-28 sm:py-36">
      <SectionHeading eyebrow="About" title="Beyond the stack" />

      <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <Reveal delay={0.1} className="relative mx-auto w-full max-w-sm md:mx-0">
          <div ref={frameRef} className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
            <motion.div
              style={reduced ? undefined : { y: parallaxY }}
              initial={{ scale: 1.12, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-[-6%]"
            >
              <img
                src={aboutImage}
                alt="Shobhit Srivastava"
                className="h-full w-full origin-right scale-150 object-cover object-[100%_25%] grayscale contrast-[1.15] brightness-[0.9]"
                loading="lazy"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-accent-dim/50 mix-blend-color" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-bone-100/10" />
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={0.15}>
            <p className="text-balance font-display text-2xl font-medium leading-snug text-bone-100 sm:text-3xl">
              A full-stack software engineer building scalable, secure, cloud-native products —
              from React interfaces to Django and Flask APIs to GenAI features running in
              production.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="leading-relaxed text-bone-300">
              I'm a Software Engineer at Valiance Solutions with a B.Tech in Computer Science
              &amp; Engineering. Over the past 3+ years I've worked across GCP-native services —
              Cloud Run, Firestore, BigQuery, Cloud Storage — and AWS, with hands-on experience in
              REST API design, GenAI-integrated modules built on Vertex AI and Gemini, and
              computer-vision features built on YOLO. Most of that work has gone into a
              large-scale government tax platform and several other production applications.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <p className="leading-relaxed text-bone-300">
              I like taking products the full distance — from UX and data modeling through
              scalable backend logic to CI/CD pipelines on Cloud Build — rather than staying on
              one side of the stack. Recently I completed the Google Cloud Professional Cloud
              Developer certification, adding to my existing Professional Cloud Architect
              credential.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="grid grid-cols-2 gap-4 border-t border-bone-100/10 pt-8 sm:grid-cols-3">
              {[
                ['Focus', 'Full-stack + AI/Cloud'],
                ['Based in', 'Noida, India'],
                ['Certified', 'GCP Architect & Developer'],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone-500">{label}</p>
                  <p className="mt-1.5 text-sm text-bone-200">{value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
