import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { profile } from '../data/profile'
import { Magnetic } from '../components/MagneticButton'
import heroImage from '../assets/images/shobhit-google-1.webp'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />
      <motion.div
        className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-accent/10 blur-[120px]"
        whileInView={{ opacity: [0.5, 0.8, 0.5] }}
        viewport={{ once: false }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto grid w-[min(92%,80rem)] grid-cols-1 items-center gap-y-20 md:grid-cols-[1.05fr_0.95fr] md:gap-x-12 lg:gap-x-16">
        <motion.div variants={container} initial="hidden" animate="visible" className="relative z-10">
          <motion.p variants={item} className="font-mono text-sm tracking-[0.3em] text-accent">
            {profile.stack.join(' · ')}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 text-balance font-display text-[15vw] font-semibold leading-[0.92] tracking-tightest text-bone-100 sm:text-7xl lg:text-[6.2rem]"
          >
            Shobhit
            <br />
            Srivastava
          </motion.h1>

          <motion.p variants={item} className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-bone-300 sm:text-xl">
            {profile.subline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <button
                onClick={() => scrollTo('work')}
                className="rounded-full bg-bone-100 px-7 py-3.5 text-sm font-medium text-ink-950 transition-transform hover:scale-[1.03]"
              >
                View Work
              </button>
            </Magnetic>
            <Magnetic>
              <button
                onClick={() => scrollTo('contact')}
                className="rounded-full border border-bone-100/20 px-7 py-3.5 text-sm font-medium text-bone-100 transition-colors hover:border-bone-100/50"
              >
                Contact Me
              </button>
            </Magnetic>
            <a
              href={profile.resumeUrl}
              download
              className="group flex items-center gap-2 px-2 py-3.5 text-sm font-medium text-bone-300 transition-colors hover:text-accent"
            >
              Download Résumé
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" strokeWidth={1.75} />
            </a>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-14 font-mono text-[11px] uppercase tracking-[0.2em] text-bone-500"
          >
            {profile.yearsExperience} years in production
            <span className="mx-3 text-bone-700">·</span>
            5 applications shipped
            <span className="mx-3 text-bone-700">·</span>
            {profile.location}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto hidden aspect-[3/4] w-full max-w-sm md:-mt-16 md:block md:max-w-none md:justify-self-end lg:w-[26rem]"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[1.75rem]">
            <img
              src={heroImage}
              alt="Shobhit Srivastava"
              className="h-full w-full object-cover object-[38%_12%] grayscale contrast-[1.12] brightness-[0.96]"
            />
            <div className="absolute inset-0 bg-accent-dim/60 mix-blend-color" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/15 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950/65 via-transparent to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-bone-100/10" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-bone-500 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-px bg-gradient-to-b from-bone-500 to-transparent"
        />
      </motion.div>
    </section>
  )
}
