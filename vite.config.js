import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithms: ['brotliCompress', 'gzip'],
      exclude: [/\.(glb|webp|woff2)$/],
    }),
  ],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) return 'three'
          if (id.includes('@react-three')) return 'r3f'
          if (id.includes('node_modules/lenis')) return 'lenis'
          return undefined
        },
      },
    },
  },
})
