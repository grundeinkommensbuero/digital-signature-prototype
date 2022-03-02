import Head from "next/head";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "../styles/About.module.css";

export default function aboutPage() {
  return (
    <div>
      <Head>
        <title>Expedition Grundeinkommen</title>
        <meta
          name="description"
          content="Hier unterschreiben für das Volksbegehren Expedition Grundeinkommen"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1>Über dieses Projekt</h1>
        <p>
          Diese Seite stellt einen Prototypen für das digitale Unterschreiben
          von Volksbegehren in Berlin dar.
        </p>{" "}
        <p>
          Da die relevante Schnittstelle zur Berliner Verwaltung bisher nicht
          existiert, ist dieser Prototyp NICHT funktionsfähig und dient
          lediglich zu Demonstrationszwecken.{" "}
        </p>
        <p>
          Dieser Prototyp wurde im Zeitraum August 2020 - März 2022 im Rahmen
          einer Förderung durch Citylab Berlin gebaut.
        </p>
      </main>

      <Footer />
    </div>
  );
}
