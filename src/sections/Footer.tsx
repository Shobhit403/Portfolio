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

        <div className="flex items-center gap-6 text-sm text-bone-400">
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-accent">
            Email
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
            LinkedIn
          </a>
          <a href={profile.resumeUrl} download className="transition-colors hover:text-accent">
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
