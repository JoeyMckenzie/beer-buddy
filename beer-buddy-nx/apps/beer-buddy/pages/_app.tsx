import { AppProps } from 'next/app';
import './styles.css';
import { FC } from 'react';
import { store } from '@beer-buddy-nx/shared';
import { Provider } from 'react-redux';

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default CustomApp;
