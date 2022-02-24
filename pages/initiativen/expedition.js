import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Initiative.module.css";
import expeditionImage from "./images/expedition.jpg";

export default function ExpeditionPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Expedition Grundeinkommen</title>
        <meta
          name="description"
          content="Hier unterschreiben für das Volksbegehren Expedition Grundeinkommen"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div>Logo</div>
        <nav className={styles.navigation}>
          <a>Startseite</a>
          <a>Über das Projekt</a>
        </nav>
      </header>

      <main className={styles.main}>
        <h1>Expedition Grundeinkommen</h1>
        <h4>2. Phase, 200.000 Unterschriften werden benötigt</h4>
        <Image
          src={expeditionImage}
          height={600}
          width={800}
          alt="Gruppenfoto der Expedition Grundeinkommen"
        />
        <div>
          <p>
            Immer mehr Menschen haben das Gefühl, dass ein bedingungsloses
            Grundeinkommen richtig gut für uns und unsere Gesellschaft ist.
            Jedoch gibt es kaum Forschung über die unterschiedliche Wirkung
            verschiedener Varianten. Das wollen wir nun ändern. Denn wenn wir
            eine politische Entscheidung zum Grundeinkommen treffen wollen,
            müssen wir nicht nur wissen, ob wir es einführen wollen, sondern
            auch wie.
          </p>
          <p>
            Die Zeit ist reif für einen groß angelegten, staatlichen
            Modellversuch zum Grundeinkommen. Bundesweit, repräsentativ mit bis
            zu 10.000 Menschen und unabhängig wissenschaftlich beforscht.
          </p>
        </div>

        <div>
          <h2>FAQ</h2>
        </div>

        <div>
          <h2>Digital unterschreiben mit der Online-Ausweisfunktion</h2>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="http://127.0.0.1:24727/eID-Client">
          Hier gehts zur Ausweis App
        </a>
      </footer>
    </div>
  );
}
