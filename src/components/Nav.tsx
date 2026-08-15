import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useActiveSection } from '../hooks/useActiveSection'

const links = [
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(['home', ...links.map((l) => l.id)])

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function go(id: string) {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-500 ${
        scrolled ? 'pt-3' : 'pt-6'
      }`}
    >
      <nav
        className={`flex w-[min(92%,64rem)] items-center justify-between rounded-full border border-bone-100/10 px-5 transition-all duration-500 ${
          scrolled ? 'h-12 bg-ink-900/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.04)]' : 'h-16 bg-transparent'
        }`}
      >
        <button
          onClick={() => go('home')}
          className="font-mono text-sm font-medium tracking-wide text-bone-100"
        >
          SS<span className="text-accent">.</span>
          <span className="sr-only"> — back to top</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active === link.id ? 'text-bone-100' : 'text-bone-400 hover:text-bone-100'
                }`}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-bone-100/[0.06]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => go('contact')}
          className="hidden rounded-full border border-accent/40 px-4 py-2 text-sm text-accent transition-colors hover:bg-accent/10 md:block"
        >
          Let's talk
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`h-px w-5 bg-bone-100 transition-transform ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
          <span className={`h-px w-5 bg-bone-100 transition-transform ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <div className="absolute left-1/2 top-20 w-[88%] -translate-x-1/2 md:hidden">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl border border-bone-100/10 bg-ink-900/95 p-3 backdrop-blur-xl"
            >
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => go(link.id)}
                  className={`block w-full rounded-2xl px-4 py-3 text-left text-base ${
                    active === link.id ? 'bg-bone-100/[0.06] text-bone-100' : 'text-bone-300'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  )
}
