import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Mail, ArrowDown, Linkedin, ChevronRight } from 'lucide-react'
import { heroText } from '@/animations/variants'

const TECH_TAGS = ['React', 'Node.js', 'TypeScript', 'MySQL', 'Express', 'APIs RESTful']

const SOCIAL_LINKS = [
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

export function HeroSection() {
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])
  const heroY = useTransform(scrollY, [0, 400], [0, 60])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        className="section-container relative z-10 text-center flex flex-col items-center gap-8 pt-24"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        {/* Status badge */}
        <motion.div
          variants={heroText}
          custom={0}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs"
          style={{
            background: 'rgba(124,255,232,0.07)',
            border: '1px solid rgba(124,255,232,0.2)',
            color: '#7cffe8',
          }}
        >
          <span className="size-2 rounded-full bg-accent animate-glow-pulse inline-block" />
          Disponible para proyectos · Argentina 🇦🇷
        </motion.div>

        {/* Name */}
        <div className="flex flex-col items-center gap-2">
          <motion.h1
            variants={heroText}
            custom={1}
            initial="hidden"
            animate="show"
            className="font-display font-black leading-none tracking-tight text-gradient"
            style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
          >
            Marcos
          </motion.h1>
          <motion.h1
            variants={heroText}
            custom={2}
            initial="hidden"
            animate="show"
            className="font-display font-black leading-none tracking-tight text-gradient"
            style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
          >
            Avanzatti
          </motion.h1>
        </div>

        {/* Role */}
        <motion.div
          variants={heroText}
          custom={3}
          initial="hidden"
          animate="show"
          className="relative"
        >
          <span
            className="font-display font-semibold tracking-wide"
            style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.75rem)',
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            Fullstack Developer
          </span>
          <span
            className="hidden sm:inline ml-3 font-mono text-sm"
            style={{ color: 'rgba(124,255,232,0.5)' }}
          >
            &lt;/&gt;
          </span>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          variants={heroText}
          custom={4}
          initial="hidden"
          animate="show"
          className="max-w-2xl text-center text-muted-foreground leading-relaxed"
          style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}
        >
          Desarrollo aplicaciones web modernas, APIs escalables y experiencias
          digitales premium. Especializado en{' '}
          <span className="text-foreground/80">React</span>,{' '}
          <span className="text-foreground/80">Node.js</span>,{' '}
          <span className="text-foreground/80">TypeScript</span> y arquitecturas
          backend robustas.
        </motion.p>

        {/* Tech tags marquee */}
        <motion.div
          variants={heroText}
          custom={5}
          initial="hidden"
          animate="show"
          className="flex flex-wrap justify-center gap-2 max-w-xl"
        >
          {TECH_TAGS.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full font-mono text-xs"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={heroText}
          custom={6}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="https://github.com/MarcosAVZ"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex items-center gap-2"
          >
            <Github size={16} />
            GitHub
          </a>

          <button
            onClick={scrollToProjects}
            className="btn-primary flex items-center gap-2"
          >
            Ver proyectos
            <ChevronRight size={16} />
          </button>

          <a
            href="mailto:marcosavanzatti@gmail.com"
            className="btn-ghost flex items-center gap-2"
          >
            <Mail size={16} />
            Contacto
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={heroText}
          custom={7}
          initial="hidden"
          animate="show"
          className="flex items-center gap-4"
        >
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="group flex items-center justify-center size-10 rounded-xl transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <Icon
                size={17}
                className="text-muted-foreground group-hover:text-accent transition-colors duration-300"
              />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToProjects}
          className="flex flex-col items-center gap-2 mt-4 group"
          aria-label="Scroll down"
          variants={heroText}
          custom={8}
          initial="hidden"
          animate="show"
        >
          <span className="text-muted-foreground text-xs font-mono tracking-widest uppercase">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown
              size={16}
              className="text-muted-foreground group-hover:text-accent transition-colors"
            />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
