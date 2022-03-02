import Link from "next/link";
import styles from "../styles/Button.module.css";

export function LinkButton({ href, className, children }) {
  return (
    <Link href={href}>
      <button className={`${styles.button} ${className}`}>{children}</button>
    </Link>
  );
}
