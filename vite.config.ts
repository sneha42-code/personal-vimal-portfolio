import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/vimal-singh-ai-hr/',
  build: {
    outDir: 'dist',
  },
})