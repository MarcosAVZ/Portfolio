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
    <footer className="relative z-10 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      {/* CTA band */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, rgba(124,255,232,0.04) 0%, rgba(167,139,250,0.03) 50%, rgba(96,165,250,0.04) 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="section-container py-20 text-center">
          <SectionReveal>
            <h2
              className="font-display font-black mb-4 text-gradient"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              ¿Tenés un proyecto?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
              Estoy disponible para proyectos freelance, colaboraciones y consultas.
              Hablemos.
            </p>
            <a
              href="mailto:marcosavanzatti@gmail.com"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4"
            >
              <Mail size={18} />
              marcosavanzatti@gmail.com
            </a>
          </SectionReveal>
        </div>

        {/* Decorative orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(124,255,232,0.06) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Footer base */}
      <div className="glass-elevated">
        <div className="section-container py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-2">
                <div
                  className="inline-flex size-8 items-center justify-center rounded-lg font-display font-black text-sm"
                  style={{
                    background: 'rgba(124,255,232,0.1)',
                    border: '1px solid rgba(124,255,232,0.2)',
                    color: '#7cffe8',
                  }}
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
                  className="text-muted-foreground hover:text-accent text-sm transition-colors duration-200"
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
                  className="flex items-center justify-center size-9 rounded-xl text-muted-foreground hover:text-accent transition-all duration-200 hover:bg-accent/5"
                  style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <Icon size={15} />
                </a>
              ))}

              <div className="w-px h-6 bg-border/50 mx-1" />

              <motion.button
                onClick={scrollToTop}
                className="flex items-center justify-center size-9 rounded-xl text-muted-foreground hover:text-accent transition-all duration-200 hover:bg-accent/5"
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
              Hecho con <Heart size={11} className="text-accent" fill="#7cffe8" /> en Argentina
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
