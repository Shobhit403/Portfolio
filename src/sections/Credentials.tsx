import { useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { CertificateModal } from '../components/CertificateModal'
import { certifications, publication, education } from '../data/misc'

const verified = certifications.filter((c) => c.credential)
const listed = certifications.filter((c) => !c.credential)

export function Credentials() {
  const [openCert, setOpenCert] = useState<string | null>(null)
  const active = verified.find((c) => c.name === openCert)

  return (
    <section id="credentials" className="relative mx-auto w-[min(92%,80rem)] overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-accent/[0.06] blur-[140px]" />
      <SectionHeading eyebrow="Recognition" title="Certifications & research" />

      <p className="mt-14 font-mono text-xs uppercase tracking-[0.3em] text-bone-500">Verified credentials</p>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {verified.map((cert, i) => {
          const isExpired = cert.credential && new Date() > new Date(cert.credential.expires)
          return (
            <Reveal key={cert.name} delay={i * 0.08}>
              <button
                onClick={() => setOpenCert(cert.name)}
                data-cursor-label="View"
                aria-label={`View ${cert.name} certificate`}
                className="group block w-full overflow-hidden rounded-2xl border border-bone-100/10 bg-ink-900/40 text-left transition-colors hover:border-accent/30"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-bone-100/10 bg-bone-100/[0.03]">
                  <img
                    src={cert.credential!.thumbnail}
                    alt={`${cert.name} certificate preview`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent/70">
                    {cert.issuer}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-bone-100">{cert.name}</h3>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-bone-500">
                    <span>Issued {cert.credential!.issued}</span>
                    <span className={`inline-flex items-center gap-1.5 ${isExpired ? 'text-bone-500' : 'text-accent'}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${isExpired ? 'bg-bone-500' : 'bg-accent'}`} />
                      {isExpired ? `Expired ${cert.credential!.expires}` : `Valid through ${cert.credential!.expires}`}
                    </span>
                  </div>
                </div>
              </button>
            </Reveal>
          )
        })}
      </div>

      <p className="mt-14 font-mono text-xs uppercase tracking-[0.3em] text-bone-500">Other certifications</p>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {listed.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 0.06}>
            <div className="group h-full rounded-2xl border border-bone-100/10 bg-ink-900/40 p-6 transition-colors hover:border-accent/30">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent/70">Certification</span>
              <h3 className="mt-3 font-display text-base font-semibold leading-snug text-bone-100">{cert.name}</h3>
              <p className="mt-2 text-sm text-bone-400">{cert.issuer}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl border border-bone-100/10 bg-gradient-to-br from-ink-900/60 to-ink-900/20 p-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent/70">Publication</span>
            <h3 className="mt-3 text-balance font-display text-2xl font-semibold leading-snug text-bone-100">
              {publication.title}
            </h3>
            <p className="mt-3 text-sm text-bone-400">
              {publication.journal} · {publication.date}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone-300">{publication.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="h-full rounded-2xl border border-bone-100/10 bg-ink-900/40 p-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent/70">Education</span>
            <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-bone-100">{education.degree}</h3>
            <p className="mt-2 text-sm text-bone-400">{education.institution}</p>
            <p className="mt-1 text-sm text-bone-500">{education.period} · {education.detail}</p>
          </div>
        </Reveal>
      </div>

      {active?.credential && (
        <CertificateModal
          open={!!openCert}
          onClose={() => setOpenCert(null)}
          name={active.name}
          issuer={active.issuer}
          credential={active.credential}
        />
      )}
    </section>
  )
}
