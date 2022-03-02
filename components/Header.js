import styles from "../styles/Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>Logo</div>
        <nav className={styles.navigation}>
          <a href="">Startseite</a>
          <a href="">Über das Projekt</a>
        </nav>
      </div>
    </header>
  );
}
