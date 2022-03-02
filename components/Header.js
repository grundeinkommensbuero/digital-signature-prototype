import styles from "../styles/Header.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/">
          <div className={styles.logo}>Logo</div>
        </Link>
        <nav className={styles.navigation}>
          <Link href="/">
            <a>Startseite</a>
          </Link>
          <Link href="/ueber">
            <a>Über das Projekt</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
