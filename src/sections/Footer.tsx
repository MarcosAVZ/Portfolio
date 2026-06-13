import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react'
import { SectionReveal } from '@/components/SectionReveal'

const SOCIAL = [
  {
    label: 'GitHub',
    href: 'https://github.com/MarcosAVZ',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/marcos-avanzatti-903b15274/',
    icon: Linkedin,
  },
  {
    label: 'Email',
    href: 'mailto:marcosavanzatti@gmail.com',
    icon: Mail,
  },
]

const NAV_LINKS = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative z-10 bg-[#0d0d0d] border-t border-border/40">
      {/* Footer base */}
      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div
                className="inline-flex size-8 items-center justify-center rounded-lg font-display font-black text-sm bg-muted border-border text-foreground"
              >
                MA
              </div>
              <span className="font-display font-semibold text-foreground/80">
                Marcos Avanzatti
              </span>
            </div>
            <p className="text-muted-foreground text-xs">
              Fullstack Developer · Argentina
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => {
                  e.preventDefault()
                  const id = href.replace('#', '')
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social + back-to-top */}
          <div className="flex items-center gap-3">
            {SOCIAL.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="flex items-center justify-center size-9 rounded-xl text-muted-foreground hover:text-foreground transition-all duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <Icon size={15} />
              </a>
            ))}

            <div className="w-px h-6 bg-border/50 mx-1" />

            <motion.button
              onClick={scrollToTop}
              className="flex items-center justify-center size-9 rounded-xl text-muted-foreground hover:text-foreground transition-all duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.07)' }}
              aria-label="Volver arriba"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={15} />
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Marcos Avanzatti. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-xs flex items-center gap-1">
            Hecho con <Heart size={11} className="text-muted-foreground" /> en Argentina
          </p>
        </div>
      </div>
    </footer>
  )
}
