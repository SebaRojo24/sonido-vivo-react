import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev
export default defineConfig({
  plugins: [react()],
  // Sección oficial requerida para enlazar Vitest con la pauta de evaluación
  test: {
    environment: "jsdom",             // Simula window y document en memoria
    setupFiles: "./src/test/setup.js", // Enlaza el archivo de comparadores legibles
    globals: true,                    // Permite omitir imports repetidos de describe/it
    css: true                         // Procesa las clases y estilos visuales
  }
})
