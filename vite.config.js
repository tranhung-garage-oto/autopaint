import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.jpg'],
  server: {
    port: 3000,
  },
  build: {
    chunkSizeWarningLimit: 999999999999999,
  },
  base: '/autopaint',
})
