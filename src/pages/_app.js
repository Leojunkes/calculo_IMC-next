import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import { theme } from '../styles/theme';
import Footer from '../componentes/footer';
import Header from '../componentes/header';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header/>
    <ChakraProvider resetCSS={false} theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    <Footer/>
    </>
  );
}

export default MyApp;
