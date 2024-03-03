import { styles } from "./header.style";

export function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src="logo.png" alt="Logo" style={styles.logo} />
        <span style={styles.name}>habitise</span>
      </div>
      <nav style={styles.nav}>
        <a href="/" style={styles.link}>
          Home
        </a>
        <a href="/addHabit" style={styles.link}>
          Add Habit
        </a>
      </nav>
    </header>
  );
}

