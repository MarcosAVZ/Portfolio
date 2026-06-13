import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface Orb {
  left: string
  top: string
  color: string
  width: string
  height: string
  blur: string
  duration: number
  xPath: number[]
  yPath: number[]
}

const ORBS: Orb[] = [
  {
    left: '8%',
    top: '15%',
    color: 'rgba(124,255,232,0.13)',
    width: '680px',
    height: '680px',
    blur: '130px',
    duration: 22,
    xPath: [0, 35, -20, 10, 0],
    yPath: [0, -25, 18, -8, 0],
  },
  {
    left: '72%',
    top: '55%',
    color: 'rgba(167,139,250,0.09)',
    width: '520px',
    height: '520px',
    blur: '120px',
    duration: 28,
    xPath: [0, -30, 20, -10, 0],
    yPath: [0, 20, -15, 10, 0],
  },
  {
    left: '45%',
    top: '78%',
    color: 'rgba(96,165,250,0.07)',
    width: '440px',
    height: '440px',
    blur: '110px',
    duration: 18,
    xPath: [0, 20, -30, 15, 0],
    yPath: [0, -18, 25, -12, 0],
  },
  {
    left: '88%',
    top: '8%',
    color: 'rgba(124,255,232,0.05)',
    width: '320px',
    height: '320px',
    blur: '90px',
    duration: 24,
    xPath: [0, -15, 25, -8, 0],
    yPath: [0, 15, -20, 8, 0],
  },
]

export function AnimatedBackground() {
  const prefersReduced = useReducedMotion()

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* Radial top gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,255,232,0.04) 0%, transparent 65%)',
        }}
      />

      {/* Floating gradient orbs */}
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: orb.left,
            top: orb.top,
            width: orb.width,
            height: orb.height,
            background: orb.color,
            filter: `blur(${orb.blur})`,
            transform: 'translate(-50%, -50%)',
            willChange: 'transform',
          }}
          animate={
            prefersReduced
              ? {}
              : {
                  x: orb.xPath,
                  y: orb.yPath,
                }
          }
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'loop',
          }}
        />
      ))}

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{
          background: 'linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)',
        }}
      />
    </div>
  )
}
