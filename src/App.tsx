import './App.css'
import PageRoute from './Route'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <PageRoute />
    </QueryClientProvider>
  )
}

export default App
