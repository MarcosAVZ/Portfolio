import type { Project } from '@/types'
import markethubPoster from '@/assets/projects/markethub-poster.jpg'
import consultorioPoster from '@/assets/projects/consultorio-poster.jpg'
import fs0003Poster from '@/assets/projects/fs0003-poster.jpg'
import openbridgePoster from '@/assets/projects/openbridge-poster.jpg'

export const projects: Project[] = [
  {
    id: 1,
    title: 'MR Roller',
    description:
      'Plataforma e-commerce completa con carrito, checkout, gestión de pedidos y panel administrativo integrado.',
    longDescription:
      'Sistema fullstack desarrollado con React + TypeScript en el frontend y Node.js + Express en el backend. Incluye autenticación JWT, gestión de inventario, integración con pasarela de pagos, cálculo de envíos dinámico, upload de imágenes a Cloudinary y dashboard con métricas en tiempo real.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Cloudinary', 'JWT'],
    tags: ['E-Commerce', 'Full Stack', 'Admin Panel'],
    github: '',
    demo: 'https://mrrollers.com/',
    video: null,
    youtube: 'YrrGykJb8ek',
    poster: markethubPoster,
  },
  {
    id: 4,
    title: 'OpenBridge',
    description:
      'Catálogo de herramientas open source con un asistente RAG que recomienda un stack según la descripción del negocio.',
    longDescription:
      'OpenBridge es un catálogo de más de 100 repositorios open source validados, con métricas de salud y mantenimiento que se actualizan todos los días. Su asistente con IA toma la descripción de un negocio, la descompone en capacidades técnicas y propone un stack armado solo con componentes verificados del catálogo. Lo desarrollamos en equipo dentro de la Simulación Laboral de NoCountry.\n\nMi parte estuvo en el backend y la IA: armé el monorepo con workspaces y Postgres con pgvector en Docker; diseñé el esquema de repositorios, categorías, ideas de integración y embeddings con Drizzle y un índice HNSW; construí la ingesta desde la API GraphQL de GitHub con manejo de rate limit, reintentos y reanudación; generé ideas de integración con un LLM local (Ollama + LangChain.js) con prompts versionados y validación de esquema; implementé la búsqueda por significado con embeddings y la búsqueda full-text; y desarrollé el asistente que descompone el negocio en capacidades y hace streaming de la propuesta, rankeando candidatos por similitud, salud y popularidad. También configuré el CI y el deploy en Render con Neon.\n\nStack: Next.js + React + Tailwind en el frontend; Node.js + Express en TypeScript con Zod en el backend; PostgreSQL + pgvector con Drizzle ORM; Ollama (qwen2.5 y bge-m3) con LangChain.js; tests con Vitest y supertest.',
    tech: ['TypeScript', 'Next.js', 'Express', 'PostgreSQL', 'pgvector', 'LangChain', 'Ollama', 'Docker'],
    tags: ['IA / RAG', 'Full Stack', 'Trabajo en equipo'],
    github: 'https://github.com/No-Country-simulation/S10-26-equipo-8-OpenBridge',
    demo: 'https://openbridge-blue.vercel.app',
    video: null,
    youtube: null,
    poster: openbridgePoster,
  },
  {
    id: 2,
    title: 'Consultorio Gerontológico Integral',
    description:
      'App de escritorio para gestionar historias clínicas con CRUD completo, búsqueda por nombre/DNI, generación de PDFs y backup en Google Drive.',
    longDescription:
      'Consultorio Gerontológico Integral es una aplicación de escritorio diseñada para gestionar historias clínicas de pacientes gerontológicos. Fue desarrollada para la Dra. Zulma Cabrera como herramienta central de su consultorio, permitiendo crear, editar, buscar y eliminar registros de pacientes desde un formulario intuitivo con una tabla paginada que admite filtrado por nombre o DNI.\n\nLa app está construida íntegramente en Python con Flet como framework de interfaz, lo que permite una experiencia de escritorio nativa con renderizado basado en Flutter. La capa de datos utiliza SQLite3 embebido sin dependencias externas, y la validación de campos está encapsulada en un módulo independiente que verifica DNI, email, edad y formato telefónico. La generación de PDFs usa fpdf2 con soporte Unicode y fonts DejaVu, incluyendo logo opcional, diseño de dos columnas y secciones estructuradas para antecedentes, examen físico, diagnóstico y evolución.\n\nEntre sus funcionalidades destacan la exportación completa a CSV, el backup automático opcional a Google Drive mediante PyDrive2 con autenticación OAuth, y la resolución robusta de rutas que funciona tanto como script Python como ejecutable empaquetado con PyInstaller. El proyecto incluye tests unitarios con pytest que cubren el CRUD completo y la validación de campos.',
    tech: ['Flet', 'Python', 'SQLite', 'fpdf2', 'PyDrive2', 'pytest'],
    tags: ['Escritorio', 'Salud', 'Python'],
    github: 'https://github.com/MarcosAVZ/Consultorio',
    demo: null,
    video: null,
    youtube: '27BDaOLsLVI',
    poster: consultorioPoster,
  },
  {
    id: 3,
    title: 'FS-0003 · Blog Full Stack',
    description:
      'Blog full stack hecho en equipo (5 devs): posts con categorías, búsqueda, comentarios, perfiles, roles USER/ADMIN y panel de administración.',
    longDescription:
      'FS-0003 es una aplicación web tipo blog desarrollada en equipo de cinco personas dentro del Amplix Acceleration Program. Ofrece feed paginado con categorías y búsqueda, detalle de posts con tabla de contenidos, comentarios, perfiles públicos, autenticación JWT con roles USER/ADMIN y un panel de administración con estadísticas, gestión de usuarios, posts y comentarios. La API REST está documentada con Swagger.\n\nMi parte: inicialicé el backend en Express 5 con arquitectura MSC (registro central de rutas, registro de usuarios con bcrypt y CORS configurable por entorno); implementé el endpoint de creación de posts y GET /posts/:id junto con la página de detalle (estados de carga y error, acciones solo para el autor); construí la subida de imágenes con POST /api/upload usando Multer + Cloudinary y las portadas de los posts; desarrollé el perfil público y su edición (nombre, bio y avatar, con los campos nuevos en el modelo de Prisma); y la búsqueda case-insensitive por título y contenido.\n\nStack: React 19 + Vite en el frontend; Node.js + Express 5, Prisma 6 y PostgreSQL 16 en el backend; validación con Joi, tests con Vitest y React Testing Library, y Docker para la base de datos.',
    tech: ['React', 'Express', 'PostgreSQL', 'Prisma', 'JWT', 'Cloudinary', 'Vitest', 'Docker'],
    tags: ['Full Stack', 'Trabajo en equipo', 'Blog'],
    github: 'https://github.com/amplixme/FS-0003',
    demo: null,
    video: null,
    youtube: 'nlR65x0h1p4',
    poster: fs0003Poster,
  },
]
