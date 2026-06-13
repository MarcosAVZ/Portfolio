import { motion } from 'framer-motion'
import { Monitor, Server, Database, Plug, Wrench } from 'lucide-react'
import { SectionReveal } from '@/components/SectionReveal'
import { staggerContainer, staggerItem } from '@/animations/variants'
import { skillCategories } from '@/data/skills'
import type { SkillCategory } from '@/types'

const ICON_MAP: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Database,
  Plug,
  Wrench,
}

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const Icon = ICON_MAP[category.icon] ?? Monitor

  return (
    <motion.div
      variants={staggerItem}
      className="group relative glass rounded-2xl p-6 transition-all duration-300"
      style={{ border: '1px solid rgba(255,255,255,0.06)' }}
      whileHover={{
        y: -4,
        borderColor: 'rgba(255,255,255,0.12)',
        transition: { duration: 0.25 },
      }}
    >
      {/* Glow background on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: category.accent }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="inline-flex size-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
            style={{
              background: category.accent,
              border: `1px solid ${category.accent.replace('0.12', '0.3')}`,
            }}
          >
            <Icon
              size={18}
              style={{ color: 'hsl(var(--accent))' }}
            />
          </div>
          <div>
            <h3 className="font-display font-semibold text-sm text-foreground">{category.name}</h3>
            <p className="text-muted-foreground text-xs">{category.description}</p>
          </div>
        </div>

        {/* Skills chips */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map(({ name }, skillIndex) => (
            <motion.span
              key={name}
              className="inline-flex items-center px-3 py-1.5 rounded-lg font-mono text-xs font-medium cursor-default transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.65)',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: index * 0.05 + skillIndex * 0.04,
                  duration: 0.3,
                },
              }}
              viewport={{ once: true }}
              whileHover={{
                background: category.accent,
                borderColor: 'rgba(124,255,232,0.2)',
                color: 'hsl(var(--foreground))',
                scale: 1.04,
              }}
            >
              {name}
            </motion.span>
          ))}
        </div>

        {/* Index decoration */}
        <div
          className="absolute top-4 right-4 font-mono text-xs opacity-20 group-hover:opacity-40 transition-opacity"
        >
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="section-container">
        {/* Header */}
        <SectionReveal className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-accent text-sm">02.</span>
            <div className="h-px flex-1 bg-border/50 max-w-[80px]" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-gradient-warm">
            Stack técnico
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Las tecnologías con las que construyo soluciones reales, de principio a fin.
          </p>
        </SectionReveal>

        {/* Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, index) => (
            <SkillCard key={category.name} category={category} index={index} />
          ))}
        </motion.div>

        {/* Bottom accent line */}
        <SectionReveal delay={0.3} className="mt-16 text-center">
          <p className="text-muted-foreground text-sm">
            Siempre aprendiendo.{' '}
            <span className="text-accent font-mono">
              En constante evolución.
            </span>
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
