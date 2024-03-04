import { styles } from "./header.style";
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <span style={styles.name}>habitise</span>
      </div>
      <nav style={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/addHabit">Add Habit</Link>
      </nav>
    </header>
  );
}

