import { GlobalStyle } from './styles/global';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './utils/themes';
import AppRoutes from './routes';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <div className='appContainer'>
        <AppRoutes />
      </div>
    </ChakraProvider>
  );
};
