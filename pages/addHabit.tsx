import { Inter } from 'next/font/google';
import styles from '@/design_system/styles/Home.module.css';
import { Header, HabitForm } from '@/components/';

const inter = Inter({ subsets: ['latin'] });

export default function AddHabit() {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <Header />
      <HabitForm />
    </main>
  );
}
