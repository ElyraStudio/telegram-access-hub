import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Importa a árvore de rotas gerada automaticamente pelo TanStack
import { routeTree } from './routeTree.gen'
import './styles.css'

// Inicializa o QueryClient
const queryClient = new QueryClient()

// Cria o roteador passando a árvore e o contexto necessário
const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
})

// Registra o tipo do roteador para segurança do TypeScript
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Renderiza o app na tela
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  )
}