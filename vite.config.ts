import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// Configuração padrão SPA — Sem nenhuma amarra com servidor do Lovable
export default defineConfig({
  plugins: [
    TanStackRouterVite(), // Gerencia as rotas do TanStack Router
    react(),              // Motor do React 19
    tailwindcss(),        // Compila o estilo Dark e Tailwind da sua Landing Page
    tsconfigPaths(),      // Resolve os caminhos de pastas (como @/components)
  ],
})