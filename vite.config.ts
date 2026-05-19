import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite' // Ajustado o caminho de importação aqui
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    TanStackRouterVite(), // Agora ele vai carregar o plugin correto mapeado para o Vite
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
})