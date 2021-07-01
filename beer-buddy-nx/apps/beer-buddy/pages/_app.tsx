import { AppProps } from 'next/app';
import { FC } from 'react';
import { store } from '@beer-buddy-nx/shared';
import { Provider } from 'react-redux';
import { ChakraColorModeProvider, Layout } from '@components';
import Head from 'next/head';

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraColorModeProvider cookies={pageProps.cookies}>
    <Provider store={store}>
      <Layout>
        <Head>
          <title>Beer Buddy</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  </ChakraColorModeProvider>
);

export default CustomApp;
