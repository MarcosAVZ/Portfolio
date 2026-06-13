import { motion, useSpring } from 'framer-motion'
import { useScrollProgress } from '@/hooks/useScrollProgress'

export function ScrollProgress() {
  const rawProgress = useScrollProgress()
  const progress = useSpring(rawProgress, { stiffness: 200, damping: 30 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left"
      style={{
        scaleX: progress,
        background: 'linear-gradient(90deg, #7cffe8 0%, #a78bfa 50%, #60a5fa 100%)',
      }}
      aria-hidden="true"
    />
  )
}
