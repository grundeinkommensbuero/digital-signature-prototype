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
        <h1>Impressum</h1>
        <p>
          {`$
        Angaben gemäß § 5 TMG

Vertrauensgesellschaft e.V.
Isarstrasse 11
12053 Berlin

Kontakt: 
support@expedition-grundeinkommen.de

Postadresse:
Expedition Grundeinkommen
Gneisenaustr. 63
10961 Berlin

Vertreten durch: 
Johannes Ponader (Vorstand)


Spenden:

Empfängerin: Vertrauensgesellschaft e. V.
IBAN: DE74 4306 0967 1218 1056 01
BIC: GENODEM1GLS
Bank: GLS Gemeinschaftsbank eG
Verwendungszweck: Spende


Registereintrag: 
Eintragung im Vereinsregister.
Registergericht: Amtsgericht Charlottenburg
Registernummer: VR-Nr.: 36462 B


Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:

Johannes Ponader 
Isarstrasse 11
12053 Berlin 


Design: Schauschau Design Studio (schauschau.cc)


Technisch Unterstützt durch:

trackjs – Fehleranalyse



Haftungsausschluss: 

Haftung für Inhalte
Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.


Urheberrecht:

Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.


Impressum vom Impressum Generator der Kanzlei Hasselbach, Rechtsanwälte für Arbeitsrecht und Familienrecht`}
        </p>
      </main>

      <Footer />
    </div>
  );
}
