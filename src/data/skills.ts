import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: 'Monitor',
    description: 'Interfaces modernas, reactivas y accesibles',
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
    skills: [
      { name: 'Git / GitHub' },
      { name: 'Dependency Injection' },
      { name: 'Schema Validation' },
      { name: 'RBAC' },
    ],
  },
]
