import styles from "../styles/Footer.module.css";
import Link from "next/link";

export function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <Link href="/impressum">
            <a>Impressum</a>
          </Link>
          <p className={styles.disclaimer}>
            Diese Seite ist ein nicht funktionsfähiger Prototyp und dient
            lediglich zu Demonstrationszwecken.
          </p>
        </div>
      </footer>
    </div>
  );
}
