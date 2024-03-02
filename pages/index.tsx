import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '../design_system/styles/Home.module.css';
import { Colors, FontSizes } from '@/design_system';
import { CustomStyle } from '@/src/models';
import { SquareChecked, SquareUnchecked } from '@/design_system';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

const mockData = [
  {
    id: 1,
    name: 'Read',
    description: 'Drink a glass of water',
  },
  { id: 2, name: 'Read', description: 'Read a book for 30 minutes' },
  { id: 3, name: 'Read', description: 'Do 30 minutes of exercise' },
];

const tableHeadStyle: CustomStyle = {
  thead: {
    height: 50,
    color: Colors.grey,
    fontSize: FontSizes.small,
    backgroundColor: Colors.grey + 50,
  },
};

const tableStyle: CustomStyle = {
  table: {
    width: '80%',
    borderCollapse: 'collapse',
  },
};

export default function Home() {

  const [checked, setChecked] = useState(false);

  const now = new Date();
  const monthLastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const monthDays = Array.from({ length: monthLastDay }, (_, i) => i + 1);

  function clickHabit() {
    setChecked((checked) => !checked);
  }

  return (
    <>
      <Head>
        <title>Habitise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <table>
            <thead style={tableHeadStyle.thead}>
              <tr>
                <th>Day</th>
                {mockData.map((habit) => (
                  <th key={habit.id}>{habit.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {monthDays.map((day) => (
                <tr key={day}>
                  <td>{day}</td>
                  {mockData.map((habit) => (
                    <td key={habit.id}>
                      <div onClick={clickHabit}>
                        {checked ? <SquareChecked /> : <SquareUnchecked />}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
