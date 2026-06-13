import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { heroText } from '@/animations/variants'

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        className="section-container relative z-10 text-center flex flex-col items-center gap-6 pt-24"
      >
        {/* Role — massive */}
        <motion.h1
          variants={heroText}
          custom={0}
          initial="hidden"
          animate="show"
          className="font-display font-black leading-[0.9] tracking-[-0.03em] text-foreground"
          style={{ fontSize: 'clamp(5rem, 15vw, 16rem)' }}
        >
          Fullstack<br />Developer
        </motion.h1>

        {/* Name */}
        <motion.p
          variants={heroText}
          custom={1}
          initial="hidden"
          animate="show"
          className="font-display text-muted-foreground"
          style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)' }}
        >
          Marcos Avanzatti
        </motion.p>

        {/* Single CTA */}
        <motion.div
          variants={heroText}
          custom={2}
          initial="hidden"
          animate="show"
        >
          <a
            href="mailto:marcosavanzatti@gmail.com"
            className="btn-ghost inline-flex items-center gap-2"
          >
            Contacto
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToProjects}
          className="flex flex-col items-center gap-2 mt-6 group"
          aria-label="Scroll down"
          variants={heroText}
          custom={3}
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
              size={15}
              className="text-muted-foreground group-hover:text-foreground transition-colors"
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
