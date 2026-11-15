import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Server, ShoppingCart, Shield, GraduationCap, MapPin, Calendar } from 'lucide-react'
import { SectionReveal } from '@/components/SectionReveal'
import { staggerContainer, staggerItem } from '@/animations/variants'

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: 'Frontend Moderno',
    description:
      'Interfaces reactivas con React + TypeScript, estado optimizado y componentes accesibles.',
  },
  {
    icon: Server,
    title: 'APIs RESTful',
    description:
      'Backends escalables con Node.js + Express, arquitectura MVC, validación y middleware robusto.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description:
      'Plataformas completas: carrito, checkout, gestión de pedidos e integración de pagos.',
  },
  {
    icon: Shield,
    title: 'Auth & Seguridad',
    description:
      'JWT, control de roles (RBAC), recuperación de credenciales y flujos seguros de autenticación.',
  },
]

const STATS = [
  { value: '2+', label: 'años de experiencia' },
  { value: 'UTN', label: 'formación técnica' },
]

export function AboutSection() {
  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 })

  return (
    <section id="about" className="section-padding relative z-10">
      <div className="section-container">
        {/* Section header */}
        <SectionReveal className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-muted-foreground text-sm">01.</span>
            <div className="h-px flex-1 bg-border/50 max-w-[80px]" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-foreground">
            Sobre mí
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Desarrollador Fullstack argentino con pasión por construir productos digitales
            bien diseñados y con arquitecturas sólidas.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
          {/* Left: Bio */}
          <div className="space-y-6">
            <SectionReveal delay={0.1}>
              <div
                className="bg-card border border-border rounded-2xl p-6 space-y-4"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="size-12 rounded-xl flex items-center justify-center font-display font-black text-lg bg-muted border-border text-foreground"
                  >
                    MA
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">Marcos Avanzatti</p>
                    <p className="text-muted-foreground text-sm">Fullstack Developer</p>
                  </div>
                </div>

                <p className="text-foreground/75 leading-relaxed text-sm">
                  Empecé a programar a los 18 años y desde entonces no paré.
                  Me gradué en la{' '}
                  <span className="text-foreground/90 font-medium">
                    Universidad Tecnológica Nacional
                  </span>{' '}
                  (Tecnicatura en Programación) y trabajé de forma autónoma
                  construyendo APIs, plataformas e-commerce y paneles administrativos
                  para clientes reales.
                </p>

                <p className="text-foreground/75 leading-relaxed text-sm">
                  Me especializo en el stack{' '}
                  <span className="text-foreground/80 font-medium font-mono">React + Node.js</span>,
                  con fuerte enfoque en arquitectura limpia, autenticación robusta e
                  integración de servicios externos. Disfruto igual del frontend que
                  del backend.
                </p>

                {/* Meta info */}
                <div className="flex flex-col gap-2 pt-2 border-t border-border/40">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin size={13} className="text-muted-foreground" />
                    Argentina
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar size={13} className="text-muted-foreground" />
                    Disponible para proyectos freelance
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <GraduationCap size={13} className="text-muted-foreground" />
                    UTN · Tecnicatura en Programación
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Stats */}
            <SectionReveal delay={0.2}>
              <div ref={statsRef} className="grid grid-cols-3 gap-3">
                {STATS.map(({ value, label }, i) => (
                  <motion.div
                    key={label}
                    className="bg-card border border-border rounded-xl p-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={statsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p
                      className="font-display font-bold text-xl mb-1 text-foreground"
                    >
                      {value}
                    </p>
                    <p className="text-muted-foreground text-xs leading-tight">{label}</p>
                  </motion.div>
                ))}
              </div>
            </SectionReveal>
          </div>

          {/* Right: Highlights grid */}
          <SectionReveal delay={0.15}>
            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {HIGHLIGHTS.map(({ icon: Icon, title, description }, index) => (
                <motion.div
                  key={title}
                  variants={staggerItem}
                  className="group relative bg-card border border-border rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.12)]"
                >
                  <div
                    className="inline-flex size-10 items-center justify-center rounded-xl mb-4 transition-all duration-300 group-hover:scale-110 bg-muted border-border"
                  >
                    <Icon size={18} className="text-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-sm mb-2 text-foreground/90">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{description}</p>
                </motion.div>
              ))}
            </motion.div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
