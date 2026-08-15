import { Mail, Phone, Download } from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa6'
import { profile } from '../data/profile'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Footer() {
  return (
    <footer className="relative mx-auto w-[min(92%,80rem)] border-t border-bone-100/10 py-12">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <button onClick={() => scrollTo('home')} className="font-display text-lg font-semibold text-bone-100">
            {profile.name}
          </button>
          <p className="mt-1 text-sm text-bone-500">{profile.role} · React · Python · AI · Cloud</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-bone-400">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 transition-colors hover:text-accent">
            <Mail className="h-3.5 w-3.5" strokeWidth={1.75} />
            Email
          </a>
          <a href={profile.phoneHref} className="flex items-center gap-1.5 transition-colors hover:text-accent">
            <Phone className="h-3.5 w-3.5" strokeWidth={1.75} />
            Phone
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            <FaLinkedin className="h-3.5 w-3.5" />
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            <FaGithub className="h-3.5 w-3.5" />
            GitHub
          </a>
          <a href={profile.resumeUrl} download className="flex items-center gap-1.5 transition-colors hover:text-accent">
            <Download className="h-3.5 w-3.5" strokeWidth={1.75} />
            Résumé
          </a>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-2 border-t border-bone-100/5 pt-6 text-xs text-bone-500 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <span>Designed &amp; engineered with curiosity.</span>
      </div>
    </footer>
  )
}
