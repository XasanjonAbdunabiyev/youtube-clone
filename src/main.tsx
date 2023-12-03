import * as ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css';

import { ChakraProvider, extendTheme } from "@chakra-ui/react"

import { CategoryPillsProvider } from "./contexts/CategoryPillsContext.tsx"

import { BrowserRouter } from "react-router-dom";
import { SidebarProvider } from './contexts/SidebarContext.tsx';

import { UserContextProvider } from "@/contexts/UserContext.tsx"

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <CategoryPillsProvider>
        <UserContextProvider>
          <SidebarProvider>
            <App />
          </SidebarProvider>
        </UserContextProvider>
      </CategoryPillsProvider>
    </ChakraProvider>
  </BrowserRouter>,
)
