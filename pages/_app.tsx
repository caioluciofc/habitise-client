import '../design_system/styles/globals.css';
import type { AppProps } from 'next/app';
import AppProvider from '@/src/app.provider';
import Head from 'next/head';
import { Header } from '@/components';
import 'react-tooltip/dist/react-tooltip.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Head>
        <title>Habitise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </AppProvider>
  );
}
