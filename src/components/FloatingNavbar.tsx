import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useActiveSection } from '@/hooks/useIntersection'

const NAV_LINKS = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
]

const SECTION_IDS = ['about', 'skills', 'projects', 'experience']

export function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled ? 'py-3' : 'py-5',
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={cn(
            'section-container transition-all duration-500',
            scrolled
              ? 'max-w-5xl mx-auto px-4'
              : 'max-w-6xl mx-auto px-6 md:px-8',
          )}
        >
          <div
            className={cn(
              'flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500',
              scrolled && 'bg-background shadow-lg shadow-black/30 border-b border-border/40',
            )}
          >
            {/* Logo */}
            <motion.a
              href="#"
              className="font-display font-bold text-lg tracking-tight group flex items-center gap-2"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              whileHover={{ scale: 1.02 }}
            >
              <span
                className="inline-flex size-8 items-center justify-center rounded-lg text-sm font-black bg-muted border-border text-foreground"
              >
                MA
              </span>
              <span className="text-foreground/90 group-hover:text-foreground transition-colors">
                Marcos<span className="text-foreground">.</span>
              </span>
            </motion.a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
              {NAV_LINKS.map(({ label, href }) => {
                const id = href.replace('#', '')
                const isActive = active === id
                return (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                    className={cn(
                      'relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300',
                      isActive
                        ? 'text-foreground bg-muted border border-border'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    <span className="relative z-10">{label}</span>
                  </a>
                )
              })}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="mailto:marcosavanzatti@gmail.com"
                className="hidden md:inline-flex btn-ghost items-center gap-2 text-sm"
              >
                Contacto
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="md:hidden flex items-center justify-center size-9 rounded-xl transition-all"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-background backdrop-blur-xl"
              onClick={() => setMenuOpen(false)}
            />
            {/* Menu panel */}
            <motion.div
              className="absolute top-20 left-4 right-4 bg-[#0d0d0d] border border-border rounded-2xl p-6 flex flex-col gap-2"
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                  className="flex items-center px-4 py-3 rounded-xl font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  {label}
                </motion.a>
              ))}
              <div className="border-t border-border/50 my-2" />
              <a
                href="mailto:marcosavanzatti@gmail.com"
                className="btn-ghost text-center"
                onClick={() => setMenuOpen(false)}
              >
                Contacto
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
