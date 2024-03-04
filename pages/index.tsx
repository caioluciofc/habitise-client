import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/design_system/styles/Home.module.css';
import { useAppContext } from '@/src/app.provider';
import { Table } from '@/components/table';
import { Header } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { habitsState } = useAppContext();

  return (
    <>
      <Head>
        <title>Habitise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header />
        <Table />
      </main>
    </>
  );
}
