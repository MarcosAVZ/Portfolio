import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 1,
    title: 'MarketHub',
    description:
      'Plataforma e-commerce completa con carrito, checkout, gestión de pedidos y panel administrativo integrado.',
    longDescription:
      'Sistema fullstack desarrollado con React + TypeScript en el frontend y Node.js + Express en el backend. Incluye autenticación JWT, gestión de inventario, integración con pasarela de pagos, cálculo de envíos dinámico, upload de imágenes a Cloudinary y dashboard con métricas en tiempo real.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Cloudinary', 'JWT'],
    tags: ['E-Commerce', 'Full Stack', 'Admin Panel'],
    github: '',
    demo: 'https://mrrollers.com/',
    video: null,
    poster: null,
    gradient: 'from-teal-950 via-emerald-950 to-slate-950',
    accentColor: '#4CFFD0',
  }
]
