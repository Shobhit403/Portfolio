import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { Magnetic } from '../components/MagneticButton'
import { profile } from '../data/profile'

export function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="relative mx-auto w-[min(92%,80rem)] py-28 sm:py-36">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-bone-100/10 bg-ink-900/40 px-8 py-20 text-center sm:px-16">
        <motion.div
          className="pointer-events-none absolute left-1/2 top-0 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[110px]"
          whileInView={{ opacity: [0.4, 0.75, 0.4] }}
          viewport={{ once: false }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />

        <SectionHeading eyebrow="Get in touch" title="Have a product worth building?" align="center" />

        <Reveal delay={0.15}>
          <p className="relative mx-auto mt-4 max-w-xl text-balance text-lg text-bone-300">
            Let's build something intelligent — reach out and I'll get back to you.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <button
                onClick={copyEmail}
                className="rounded-full bg-bone-100 px-8 py-4 text-sm font-medium text-ink-950 transition-transform hover:scale-[1.03]"
              >
                {copied ? 'Copied to clipboard' : profile.email}
              </button>
            </Magnetic>
            <Magnetic>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-bone-100/20 px-8 py-4 text-sm font-medium text-bone-100 transition-colors hover:border-bone-100/50"
              >
                LinkedIn
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-bone-100/20 px-8 py-4 text-sm font-medium text-bone-100 transition-colors hover:border-bone-100/50"
              >
                GitHub
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={0.35}>
          <p className="relative mt-10 font-mono text-xs uppercase tracking-[0.2em] text-bone-500">
            {profile.location}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
