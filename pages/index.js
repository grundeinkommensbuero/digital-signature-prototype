import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { Header } from "../components/Header";
import { LinkButton } from "../components/Button";
import expeditionImage from "../images/expedition.jpg";
import autofreiImage from "../images/autofrei.jpg";
import klimaImage from "../images/klimaneustart.png";
import dweImage from "../images/dwe.png";

export default function Home() {
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

      <Header />

      <main className={styles.main}>
        <h1>Aktuelle Initiativen</h1>

        <section className={styles.initiatives}>
          <InitiativePreview
            title="Expedition Grundeinkommen"
            image={expeditionImage}
          >
            Die Zeit ist reif für einen groß angelegten, staatlichen
            Modellversuch zum Grundeinkommen. Bundesweit, repräsentativ mit bis
            zu 10.000 Menschen und unabhängig wissenschaftlich beforscht.
          </InitiativePreview>

          <InitiativePreview title="Klimaneutalität 2030" image={klimaImage}>
            Klimaneustart Berlin will mit einem Volksbegehren und -entscheid
            bewirken, dass wir unserer Verantwortung endlich gerecht werden, d.h
            Klimaneutralität bis 2030!
          </InitiativePreview>

          <InitiativePreview title="Berlin Autofrei" image={autofreiImage}>
            Wir wollen deutlich weniger Autoverkehr innerhalb des Berliner
            S-Bahn-Rings. Der „Volksentscheid Berlin autofrei“ sorgt für eine
            gesunde, sichere und klima­schonende Stadt mit mehr Platz für alle!
          </InitiativePreview>

          <InitiativePreview
            title="Deutsche Wohnen und co enteignen"
            image={dweImage}
          >
            Wir wollen durch einen Volksentscheid über 240.000 Wohnungen von
            Deutsche Wohnen, Vonovia, Akelius & Co vergesellschaften. Die
            Möglichkeit dafür schafft Artikel 15 des Grundgesetzes.
          </InitiativePreview>

          <div className={styles.link}>
            <a>Alle anzeigen...</a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="http://127.0.0.1:24727/eID-Client"
          target="_blank"
          rel="noreferrer"
        >
          Hier gehts zur Ausweis App
        </a>
      </footer>
    </div>
  );
}

function InitiativePreview({ title, image, children }) {
  return (
    <div className={styles.initiativePreview}>
      <div className={styles.previewImage}>
        <Image
          src={image}
          alt="Foto der Initiative"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={styles.previewContent}>
        <div className={styles.previewInfo}>
          <h3 className={styles.previewTitle}>{title}</h3>

          <p>{children}</p>
        </div>

        <LinkButton href={"initiativen/expedition"}>Unterschreiben</LinkButton>
      </div>
    </div>
  );
}
