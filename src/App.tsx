import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <h1>Hello</h1>
    </ChakraProvider>
  );
}

export default App;
