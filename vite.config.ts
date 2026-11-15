import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// URL absoluta del sitio para og:url / og:image (los crawlers no aceptan rutas relativas).
// En Vercel sale del dominio de producción; localmente cae al preview de Vite.
process.env.VITE_SITE_URL ??= process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:4173'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
