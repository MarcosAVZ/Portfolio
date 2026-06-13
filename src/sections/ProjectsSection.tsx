import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { SectionReveal } from '@/components/SectionReveal'
import { VideoPreview } from '@/components/VideoPreview'
import { VideoModal } from '@/components/VideoModal'
import { staggerContainer, staggerItem } from '@/animations/variants'
import { projects } from '@/data/projects'
import type { Project } from '@/types'

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return (
    <motion.article
      variants={staggerItem}
      className="group relative glass rounded-2xl overflow-hidden transition-all duration-300"
      style={{ border: '1px solid rgba(255,255,255,0.06)' }}
      whileHover={{
        y: -6,
        borderColor: `${project.accentColor}33`,
        boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${project.accentColor}0A`,
        transition: { duration: 0.3 },
      }}
    >
      {/* Video preview */}
      <VideoPreview project={project} onOpenModal={() => onOpen(project)} />

      {/* Card body */}
      <div className="p-5">
        {/* Title + links */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-display font-bold text-lg text-foreground group-hover:text-gradient transition-all duration-300">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              aria-label={`GitHub — ${project.title}`}
              className="flex items-center justify-center size-8 rounded-lg text-muted-foreground hover:text-accent transition-all hover:bg-accent/5"
            >
              <Github size={15} />
            </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Demo — ${project.title}`}
                className="flex items-center justify-center size-8 rounded-lg text-muted-foreground hover:text-accent transition-all hover:bg-accent/5"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags row */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium"
                style={{
                  background: `${project.accentColor}12`,
                  border: `1px solid ${project.accentColor}28`,
                  color: project.accentColor,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Tech stack row */}
        <div className="mt-3 pt-3 border-t border-border/40 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="inline-flex px-2 py-0.5 rounded-md font-mono text-[10px]"
              style={{
                background: 'rgba(255,255,255,0.04)',
                color: 'rgba(255,255,255,0.4)',
              }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span
              className="inline-flex px-2 py-0.5 rounded-md font-mono text-[10px]"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              +{project.tech.length - 5}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <section id="projects" className="section-padding relative z-10">
        <div className="section-container">
          {/* Header */}
          <SectionReveal className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-accent text-sm">03.</span>
              <div className="h-px flex-1 bg-border/50 max-w-[80px]" />
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-gradient-warm">
              Proyectos
            </h2>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              Productos reales construidos con foco en arquitectura limpia,
              performance y experiencia de usuario.
            </p>
          </SectionReveal>

          {/* Projects grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={setSelectedProject}
              />
            ))}
          </motion.div>
        {/*GitHub CTA
          <SectionReveal delay={0.3} className="mt-12 text-center">
            <a
              href="https://github.com/marcosavanzatti"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-ghost"
            >
              <Github size={16} />
              Ver todos los proyectos en GitHub
            </a>
          </SectionReveal>
          */}
        </div>
      </section>

      {/* Modal */}
      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}
