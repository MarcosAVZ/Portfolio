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
      className="group relative bg-card border border-border rounded-2xl p-6 transition-all duration-300"
      whileHover={{
        y: -4,
        borderColor: 'rgba(255,255,255,0.12)',
        transition: { duration: 0.25 },
      }}
    >
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="inline-flex size-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 bg-muted border-border"
          >
            <Icon size={18} className="text-foreground" />
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
                background: 'rgba(255,255,255,0.06)',
                borderColor: 'rgba(255,255,255,0.2)',
                color: '#fafafa',
                scale: 1.04,
              }}
            >
              {name}
            </motion.span>
          ))}
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
            <span className="font-mono text-muted-foreground text-sm">02.</span>
            <div className="h-px flex-1 bg-border/50 max-w-[80px]" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-foreground">
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

        {/* Bottom text */}
        <SectionReveal delay={0.3} className="mt-16 text-center">
          <p className="text-muted-foreground text-sm">
            Siempre aprendiendo.{' '}
            <span className="text-foreground/80 font-mono">
              En constante evolución.
            </span>
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
