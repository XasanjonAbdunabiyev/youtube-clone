import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { CategoryPillsProvider } from "./contexts/CategoryPillsContext.tsx"

import { BrowserRouter } from "react-router-dom";
import { SidebarProvider } from './contexts/SidebarContext.tsx';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <CategoryPillsProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </CategoryPillsProvider>
    </QueryClientProvider>
  </BrowserRouter>,
)
