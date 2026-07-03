import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'

// Tailwind v4 is wired via PostCSS (postcss.config.mjs) — the @tailwindcss/vite
// plugin does not transform under Vite 8's rolldown pipeline.
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({ algorithms: ['brotliCompress', 'gzip'], exclude: [/\.(glb|webp|woff2)$/] }),
  ],
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) return 'three'
          if (id.includes('@react-three')) return 'r3f'
          if (id.includes('node_modules/gsap')) return 'gsap'
          return undefined
        },
      },
    },
  },
})
