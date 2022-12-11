import { extendTheme } from '@chakra-ui/react';

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      background: '#1E1E1E',
      backgroundSecondary: '#2C2C2C',
      backgroundTertiary: '#6B6B6B',
      gray: '#A8A8AA',
      primary: '#F3C729',
      secondary: '#F3BA29',
      tertiary: '#f3a229',
      quaternary: '#f39129',
      quinternary: '#d68228',
      success: '#50AC4E',
      error: '#DB4D59',
      errorSecondary: '#c94550',
      errorTertiary: '#8f2e36',
      text: '#E6E6E6',
      textSecondary: '#cfcfcf',

    },
  },
  styles: {
    global: {
      html: {
        boxSizing: 'border-box',
      },
      body: {
        margin: 0,
        padding: 0,
        bg: '#1E1E1E',
        color: '#E6E6E6',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '14px',
      },
    },
  },
});
