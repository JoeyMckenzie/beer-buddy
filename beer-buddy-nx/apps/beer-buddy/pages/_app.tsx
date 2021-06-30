import { AppProps } from 'next/app';
import { FC } from 'react';
import { store } from '@beer-buddy-nx/shared';
import { Provider } from 'react-redux';
import { Layout } from '@components';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider>
    <Provider store={store}>
      <Layout>
        <Head>
          <title>Beer Buddy</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  </ChakraProvider>
);

export default CustomApp;
