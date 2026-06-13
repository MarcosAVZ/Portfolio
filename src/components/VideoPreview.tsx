import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'

interface VideoPreviewProps {
  project: Project
  onOpenModal: () => void
}

export function VideoPreview({ project, onOpenModal }: VideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // IntersectionObserver for viewport autoplay
  useEffect(() => {
    const el = containerRef.current
    if (!el || !project.video) return

    const obs = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [project.video])

  // Auto-play when visible or hovered
  useEffect(() => {
    const video = videoRef.current
    if (!video || !project.video) return

    if (isVisible || isHovered) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [isVisible, isHovered, project.video])

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-xl overflow-hidden cursor-pointer group/video"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onOpenModal}
      role="button"
      tabIndex={0}
      aria-label={`Ver demo de ${project.title}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpenModal() }}
    >
      {/* Video element (lazy loaded) */}
      {project.video && (
        <video
          ref={videoRef}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
            isLoaded ? 'opacity-100' : 'opacity-0',
          )}
          src={project.video}
          poster={project.poster ?? undefined}
          muted
          loop
          playsInline
          preload="none"
          onLoadedData={() => setIsLoaded(true)}
        />
      )}

      {/* Solid poster background */}
      <div
        className={cn(
          'absolute inset-0 transition-opacity duration-700 bg-[#111]',
          project.video && isLoaded && isHovered ? 'opacity-0' : 'opacity-100',
        )}
      >
        {/* Project name centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p
              className="font-display font-bold text-2xl tracking-tight mb-1 text-foreground"
            >
              {project.title}
            </p>
            <p className="text-white/40 font-mono text-xs uppercase tracking-widest">
              {project.tags[0]}
            </p>
          </div>
        </div>
      </div>

      {/* Hover overlay with play button */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.45)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="flex flex-col items-center gap-3"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="flex items-center justify-center size-14 rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '2px solid rgba(255,255,255,0.6)',
                }}
              >
                {project.video ? (
                  <Play
                    size={20}
                    className="text-white fill-white"
                  />
                ) : (
                  <ExternalLink size={18} className="text-white" />
                )}
              </div>
              <span className="text-white/80 text-xs font-medium tracking-wide">
                {project.video ? 'Ver demo' : 'Ver detalles'}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Border on hover */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none transition-all duration-300"
        style={{
          border: isHovered
            ? '1px solid rgba(255,255,255,0.10)'
            : '1px solid rgba(255,255,255,0.06)',
        }}
      />
    </div>
  )
}
