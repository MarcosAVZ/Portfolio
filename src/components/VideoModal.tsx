import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink, Maximize2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { modalOverlay, modalContent } from '@/animations/variants'
import type { Project } from '@/types'

interface VideoModalProps {
  project: Project | null
  onClose: () => void
}

export function VideoModal({ project, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  // ESC to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.addEventListener('keydown', handler)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  // Autoplay video when modal opens
  useEffect(() => {
    if (project?.video && videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
    return () => {
      videoRef.current?.pause()
    }
  }, [project])

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      }
    }
  }

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[100] cursor-pointer"
            style={{ background: 'rgba(4,4,8,0.88)' }}
            variants={modalOverlay}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={onClose}
          />

          {/* Backdrop blur layer */}
          <div
            className="fixed inset-0 z-[100] pointer-events-none"
            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
            aria-hidden="true"
          />

          {/* Modal content */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8">
            <motion.div
              className={cn(
                'relative w-full max-w-4xl rounded-2xl overflow-hidden',
                'bg-[#0d0d0d] border border-white/10',
                'shadow-2xl shadow-black/60',
              )}
              variants={modalContent}
              initial="hidden"
              animate="show"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`Demo de ${project.title}`}
            >
              {/* Header bar */}
              <div
                className="flex items-center justify-between px-5 py-4 border-b"
                style={{ borderColor: 'rgba(255,255,255,0.07)' }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="size-2 rounded-full bg-muted-foreground"
                  />
                  <span className="font-display font-semibold text-sm">
                    {project.title}
                  </span>
                  <span className="hidden sm:block text-xs text-muted-foreground font-mono">
                    {project.tags[0]}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {project.video && (
                    <button
                      onClick={handleFullscreen}
                      className="flex items-center justify-center size-8 rounded-lg text-muted-foreground hover:text-foreground transition-colors hover:bg-white/5"
                      aria-label="Pantalla completa"
                    >
                      <Maximize2 size={15} />
                    </button>
                  )}
                  <button
                    onClick={onClose}
                    className="flex items-center justify-center size-8 rounded-lg text-muted-foreground hover:text-foreground transition-colors hover:bg-white/5"
                    aria-label="Cerrar"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Video / Poster area */}
              <div className="relative w-full aspect-video bg-[#111]">
                {project.video ? (
                  <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    src={project.video}
                    poster={project.poster ?? undefined}
                    controls
                    playsInline
                  />
                ) : (
                  /* Placeholder when no video */
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <div
                      className="flex items-center justify-center size-20 rounded-2xl bg-muted border-border"
                    >
                      <span
                        className="font-display font-black text-3xl text-foreground"
                      >
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <p className="text-white/50 text-sm text-center max-w-xs">
                      Demo en video próximamente.<br />
                      Visitá el repositorio para ver el código.
                    </p>
                  </div>
                )}
              </div>

              {/* Info panel */}
              <div className="p-6 grid md:grid-cols-[1fr_auto] gap-6">
                <div>
                  <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                    {project.longDescription}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: 'rgba(255,255,255,0.65)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex md:flex-col gap-3 items-start">
                  <a
                    href={project.github ?? undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost flex items-center gap-2 whitespace-nowrap"
                  >
                    <Github size={15} />
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo ?? undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost flex items-center gap-2 whitespace-nowrap"
                    >
                      <ExternalLink size={15} />
                      Demo live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
