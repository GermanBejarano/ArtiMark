import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'

import { ChakraProvider } from '@chakra-ui/react';

import App from './App.jsx';
import theme from './theme';
import { AuthProvider } from './context/AuthContext.jsx';
import { CartProvider } from './context/CartContext.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <CartProvider>
          <App />
        </CartProvider>
      </ChakraProvider>
    </AuthProvider>
  </StrictMode>
);