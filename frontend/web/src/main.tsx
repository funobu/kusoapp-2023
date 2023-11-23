import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './shared/theme.ts';
import { RouterProvider } from 'react-router-dom';
import routes from './pages/routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={routes} />
    </ChakraProvider>
  </React.StrictMode>,
);
