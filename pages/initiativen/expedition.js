import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Initiative.module.css";
import expeditionImage from "../../images/expedition.jpg";
import ePersoIcon from "../../images/ePerso.png";
import appIcon from "../../images/appIcon.png";
import idIcon from "../../images/idIcon.png";
import readerIcon from "../../images/readerIcon.png";
import { Question } from "../../components/Question";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { LinkButton } from "../../components/Button";

// FAQ
const question1 =
  "Warum startet die Expedition einen bundesweiten Modellversuch zum Grundeinkommen?";
const answer1 = `Wie viele Menschen in Deutschland wollen wir Expeditionsteilnehmer*innen mehr darüber erfahren, was ein bedingungsloses Grundeinkommen verändern würde und wie es eingeführt werden könnte. Viele haben bereits eine Meinung zum Grundeinkommen - aber um es eines Tages wirklich einführen zu können, brauchen wir konkrete, wissenschaftlich überprüfte Fakten.

  Über unseren Modellversuch wollen wir die ganze Vielfalt der Erfahrungen, Modelle, Perspektiven und offenen Fragen im Zusammenhang mit dem Grundeinkommen anfassbar und erlebbar machen. Wir sind auf der Suche nach Antworten auf all die Fragen, die die Menschen zu diesem Thema haben. Auf dieser Basis können wir es am Ende auch politisch entscheidbar machen.`;
const question2 = "Wie ist Grundeinkommen im Modellversuch definiert?";
const answer2 = `Unter einem bedingungslosen Grundeinkommen verstehen wir ein
  Einkommen, das die politische Gemeinschaft bedingungslos jedem
  ihrer Mitglieder gewährt. Das Grundeinkommen soll dazu beitragen,
  den individuellen Freiheitsspielraum zu vergrößern, Armut und
  soziale Notlagen zu beseitigen, sowie die Ent­wick­lungs­chancen
  jedes Einzelnen und die soziale und kulturelle Situation im
  Gemein­wesen nachhaltig zu verbessern.`;
const question3 =
  "Für welches Grundeinkommensmodell setzt sich die Expedition Grundeinkommen ein?";
const answer3 = `Mit dem Modellversuch wollen wir alle Aspekte, die ein Grundeinkommen betreffen, wissenschaftlich begleitet beleuchten. Für eine konkrete Finanzierungsvariante setzen wir uns daher nicht ein - wir wollen die Diskussion darüber eröffnen. 

    Was die Höhe angeht, muss ein bedingungsloses Grundeinkommen die Existenz sichern und gesellschaftliche Teilhabe ermöglichen. Aktuell setzen wir hier einen Beitrag von ca. ca. 1.200 Euro pro Monat an. Dabei orientieren wir uns an der Armutsrisikogrenze von 1.176 Euro (Stand: 2019).
    
    Unser Modellversuch wird das BGE anhand verschiedener Varianten der Negativen Einkommensteuer testen, weil sich diese Form des Grundeinkommens für einen Versuch am besten eignet. Der Anspruch auf die 1.200 Euro wird demnach mit der Einkommensteuerschuld verrechnet. Wer mit seiner Einkommensteuer unter einer bestimmten Grenze liegt, erhält eine Grundeinkommenszahlung; wer darüber liegt, erhält keine oder eine geringere Auszahlung. Über drei Jahre gestreckt liegen die Auszahlungen nach allen Verrechnungen im Durchschnitt bei 750 Euro pro Person und Monat. Je nach Einkommensteuerschuld bekommen die einzelnen Teilnehmer mehr oder weniger.`;
const question4 =
  "Was genau ist die Negative Einkommensteuer und wie funktioniert dieses Modell?";
const answer4 = `Die Negative Einkommensteuer koppelt die Auszahlung des Grundeinkommens an eine steuerrechtliche Überprüfung von Einkommen. Der Steuerbetrag wird auf das Grundeinkommen angerechnet, das heißt, das Grundeinkommen wird mit der Einkommensteuerschuld verrechnet. Wer mit seiner Einkommensteuer über einer bestimmten Grenze liegt, bekommt kein Grundeinkommen ausgezahlt. Wer unterhalb dieser Grenze liegt bzw. kein zu versteuerndes Einkommen hat, erhält einen staatlichen Transfer in Form einer Negativen Einkommensteuer (formal eine Steuererstattung).

    Wichtig war uns, dass die getestete Variante im Rahmen des Modellversuchs sinnvoll simuliert werden kann - und das trifft u.E. nur auf die negative Einkommensteuer zu, denn das Steuer- und Sozialsystem können wir ja nicht verändern.
    
    Wir modellieren und testen diese Form des Grundeinkommens in verschiedenen Varianten. In den Varianten kommen unterschiedliche Transferentzugsraten zum Tragen, z.B. 70%, 30% etc. Beispiel Transferentzugsrate von 70%: Alle Probanden erhalten 1.200 Euro, die mit einer simulierten Steuer von 70% auf alle sonstigen Einkünfte verrechnet werden. Die Differenz wird ausgezahlt. Damit wollen wir auch untersuchen, wie ein realistisches Finanzierungskonzept aussehen könnte und welche Variante die besten Effekte zeigt.`;

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

      <Header />

      <main className={styles.main}>
        <section className={`${styles.section} ${styles.sectionNarrow}`}>
          <div className={styles.iniTitle}>
            <h1>Expedition Grundeinkommen</h1>
            <h3>2. Phase, 200.000 Unterschriften werden benötigt</h3>
          </div>
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
              Modellversuch zum Grundeinkommen. Bundesweit, repräsentativ mit
              bis zu 10.000 Menschen und unabhängig wissenschaftlich beforscht.
            </p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionNarrow}`}>
          <h2>Häufig gestellte Fragen</h2>
          <Question questionText={question1} answerText={answer1} />
          <Question questionText={question2} answerText={answer2} />
          <Question questionText={question3} answerText={answer3} />
          <Question questionText={question4} answerText={answer4} />
          <p>
            Bei weiteren Fragen nehmen Sie bitte{" "}
            <a href="mailto:support@expedition-grundeinkommen.de">
              hier Kontakt zur Initiative auf.
            </a>
          </p>
        </section>

        <section className={`${styles.section} ${styles.sectionWide}`}>
          <Image src={ePersoIcon} alt={"Logo des E-Persos"} />
          <h2>Digital unterschreiben mit der Online-Ausweisfunktion</h2>
          <p>
            Jetzt sicher und schnell online mit dem Personalausweis bezahlen.{" "}
            <br />
            Sie brauchen:
          </p>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepIcon}>
                <Image
                  src={idIcon}
                  alt="Illustration eines Personalausweises"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3>1. Ihren Ausweis</h3>
              <p>
                Einen Personalausweis oder elektronischer Aufenthaltstitel mit
                aktivierter Online-Ausweisfunktion
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepIcon}>
                <Image
                  src={readerIcon}
                  alt="Illustration eines Lesegerätes/Smartphones"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3>2. Lesegerät oder Smartphone</h3>
              <p>
                Ein externes Kartenlesegerät oder ein modernes Smartphone mit
                Android- oder iOS-Betriebssystem
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepIcon}>
                <Image
                  src={appIcon}
                  alt="Illustration einer App"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3>3. AusweisApp2</h3>
              <p>
                Die AusweisApp2, die Sie kostenlos unter: www.ausweisapp.bund.de
                herunterladen können.
              </p>
            </div>
          </div>

          <p>
            <a href="#">
              Weitere Informationen und Anleitungen finden Sie hier.
            </a>
          </p>

          <LinkButton className={styles.signButton} href="#">
            Jetzt online unterschreiben
          </LinkButton>
          <p className={styles.furtherLinks}>
            <a href="#">LINK ZUM GESETZESTEXT</a> |{" "}
            <a href="#">DATENSCHUTZ-INFOS</a>
          </p>
        </section>

        <section className={styles.sectionContact}>
          <section className={styles.contactContainer}>
            <h2>Kontakt zur Initiative</h2>
            <p>E-Mail: support@expedition-grundeinkommen.de</p>
            <p>
              <span>Vertrauensgesellschaft e.V.</span>
              <br />
              <span>Isarstrasse 11</span>
              <br />
              <span>12053 Berlin</span>
            </p>
            <p>
              Die Initiative ist verantwortlich für die dargestellten Inhalte.
            </p>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}
