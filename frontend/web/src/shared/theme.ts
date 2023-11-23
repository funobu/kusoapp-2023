import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.50',
      },
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    xxl: '2rem',
  },
  space: {
    x4s: '0.25rem',
    x3s: '0.5rem',
    x2s: '0.75rem',
    xs: '1rem',
    sm: '1.5rem',
    md: '2rem',
    lg: '2.5rem',
    xl: '3rem',
    xxl: '4rem',
    x3l: '5rem',
  },
});
