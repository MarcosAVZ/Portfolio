import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react'
import { SectionReveal } from '@/components/SectionReveal'
import type { TimelineEntry } from '@/types'

const TIMELINE: TimelineEntry[] = [
  {
    year: '2023 — Actualidad',
    title: 'Desarrollador Fullstack Autónomo',
    company: 'Freelance / Proyectos propios',
    type: 'work',
    description: [
      'Diseño y desarrollo de APIs RESTful con Node.js + Express en arquitectura MVC con dependency injection y schema validation.',
      'Construcción de plataformas e-commerce completas: carrito, checkout, gestión de pedidos y lógica de envíos dinámica.',
      'Implementación de sistemas de autenticación JWT con RBAC, recuperación de credenciales y flujos seguros.',
      'Integración de servicios cloud: Cloudinary para imágenes, Nodemailer para emails transaccionales y pasarelas de pago.',
      'Frontend con React + TypeScript + TailwindCSS: SPAs, paneles admin y componentes accesibles.',
      'MySQL: modelado relacional, relaciones many-to-many, queries optimizadas y connection pooling.',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'JWT', 'Cloudinary'],
  },
  {
    year: '2022 — 2024',
    title: 'Tecnicatura en Programación',
    company: 'Universidad Tecnológica Nacional (UTN)',
    type: 'education',
    description: [
      'Formación técnica en desarrollo de software, algoritmia, estructuras de datos y bases de datos.',
      'Fundamentos de ingeniería de software, patrones de diseño y arquitecturas de sistemas.',
      'Proyecto final integrador con tecnologías fullstack.',
    ],
    tech: [],
  },
]

interface TimelineEntryCardProps {
  entry: TimelineEntry
  index: number
  isLast: boolean
}

function TimelineEntryCard({ entry, index, isLast }: TimelineEntryCardProps) {
  const isWork = entry.type === 'work'

  return (
    <div className="relative flex gap-6 md:gap-8">
      {/* Left: line + icon */}
      <div className="flex flex-col items-center shrink-0">
        {/* Icon */}
        <motion.div
          className="relative z-10 flex items-center justify-center size-10 rounded-xl shrink-0"
          style={{
            background: isWork ? 'rgba(124,255,232,0.1)' : 'rgba(167,139,250,0.1)',
            border: `1px solid ${isWork ? 'rgba(124,255,232,0.25)' : 'rgba(167,139,250,0.25)'}`,
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {isWork ? (
            <Briefcase size={17} style={{ color: '#7cffe8' }} />
          ) : (
            <GraduationCap size={17} style={{ color: '#a78bfa' }} />
          )}
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-xl opacity-50 blur-md"
            style={{ background: isWork ? 'rgba(124,255,232,0.15)' : 'rgba(167,139,250,0.15)' }}
          />
        </motion.div>

        {/* Connecting line */}
        {!isLast && (
          <motion.div
            className="w-px flex-1 mt-3"
            style={{
              background: isWork
                ? 'linear-gradient(to bottom, rgba(124,255,232,0.3) 0%, rgba(124,255,232,0.05) 100%)'
                : 'linear-gradient(to bottom, rgba(167,139,250,0.3) 0%, rgba(167,139,250,0.05) 100%)',
              minHeight: '60px',
              transformOrigin: 'top',
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
          />
        )}
      </div>

      {/* Right: content */}
      <motion.div
        className="flex-1 pb-12"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Year badge */}
        <span
          className="inline-block font-mono text-xs mb-3 px-3 py-1 rounded-full"
          style={{
            background: isWork ? 'rgba(124,255,232,0.07)' : 'rgba(167,139,250,0.07)',
            color: isWork ? '#7cffe8' : '#a78bfa',
            border: `1px solid ${isWork ? 'rgba(124,255,232,0.15)' : 'rgba(167,139,250,0.15)'}`,
          }}
        >
          {entry.year}
        </span>

        <div
          className="glass rounded-2xl p-6"
          style={{ border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <h3 className="font-display font-bold text-lg mb-1 text-foreground">
            {entry.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-5 font-medium">{entry.company}</p>

          <ul className="space-y-2.5">
            {entry.description.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-sm text-foreground/70 leading-relaxed"
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1 + i * 0.05,
                  duration: 0.4,
                }}
              >
                <CheckCircle2
                  size={14}
                  className="mt-0.5 shrink-0"
                  style={{ color: isWork ? '#7cffe8' : '#a78bfa' }}
                />
                {item}
              </motion.li>
            ))}
          </ul>

          {(entry.tech?.length ?? 0) > 0 && (
            <div className="mt-5 pt-4 border-t border-border/40 flex flex-wrap gap-2">
              {entry.tech?.map((t) => (
                <span
                  key={t}
                  className="inline-flex px-2.5 py-1 rounded-lg font-mono text-xs"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    color: 'rgba(255,255,255,0.5)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export function ExperienceTimeline() {
  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="section-container">
        {/* Header */}
        <SectionReveal className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-accent text-sm">04.</span>
            <div className="h-px flex-1 bg-border/50 max-w-[80px]" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-gradient-warm">
            Trayectoria
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Experiencia profesional y formación académica.
          </p>
        </SectionReveal>

        {/* Timeline */}
        <div className="max-w-3xl">
          {TIMELINE.map((entry, index) => (
            <TimelineEntryCard
              key={entry.title}
              entry={entry}
              index={index}
              isLast={index === TIMELINE.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
