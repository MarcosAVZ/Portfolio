import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: 'Monitor',
    description: 'Interfaces modernas, reactivas y accesibles',
    accent: 'rgba(124,255,232,0.12)',
    skills: [
      { name: 'React 19' },
      { name: 'TypeScript' },
      { name: 'TailwindCSS' },
      { name: 'Vite' },
      { name: 'HTML5 / CSS3' },
      { name: 'JavaScript ES2024' },
    ],
  },
  {
    name: 'Backend',
    icon: 'Server',
    description: 'APIs escalables con arquitectura MVC',
    accent: 'rgba(96,165,250,0.12)',
    skills: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'REST APIs' },
      { name: 'JWT Authentication' },
      { name: 'Arquitectura MVC' },
      { name: 'Middleware patterns' },
    ],
  },
  {
    name: 'Database',
    icon: 'Database',
    description: 'Modelado relacional y queries optimizadas',
    accent: 'rgba(167,139,250,0.12)',
    skills: [
      { name: 'MySQL' },
      { name: 'Modelado relacional' },
      { name: 'Queries optimizadas' },
      { name: 'Connection pooling' },
      { name: 'Migraciones' },
    ],
  },
  {
    name: 'Integraciones',
    icon: 'Plug',
    description: 'Servicios cloud y pasarelas de pago',
    accent: 'rgba(251,191,36,0.1)',
    skills: [
      { name: 'Cloudinary' },
      { name: 'Nodemailer' },
      { name: 'Pasarelas de Pago' },
      { name: 'Webhooks' },
    ],
  },
  {
    name: 'Herramientas',
    icon: 'Wrench',
    description: 'Control de versiones y flujo profesional',
    accent: 'rgba(52,211,153,0.1)',
    skills: [
      { name: 'Git / GitHub' },
      { name: 'Dependency Injection' },
      { name: 'Schema Validation' },
      { name: 'RBAC' },
    ],
  },
]
