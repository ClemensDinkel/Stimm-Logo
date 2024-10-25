import { Image, IconSize } from './components/Image'
import { sectionLinks } from './sectionLinks'

export const ContentArea = () => {
  // todo: sections, google font direkt einbetten und absatz streichen, menu zentrieren und auf größeren screens immer anzeigen, bilder responsive
  return (
    <div className="flex max-w-[1000px] flex-col items-center justify-center space-y-8 px-8 pb-8 text-center">
      <Image
        src="/Front1.jpg"
        alt="Corinna Dinkel"
        size={IconSize.md}
      />
      <h1>Herzlich Willkommen in der Privatpraxis für Stimmcoaching & Logopädie</h1>
      <span className='italic'> Individuell - ganzheitlich - ressourcenorientiert</span>
      <h1 id={sectionLinks.stimmCoaching}>Stimmcoaching</h1>
      <p >Ihre Stimme ist Ihre Visitenkarte und ein nicht zu unterschätzender Erfolgsfaktor.</p>
      <Image
        src="/Mic.jpg"
        alt="Mikrophon"
        size={IconSize.md}
      />
      <p>
        Ein Stimmcoaching ist gewinnbringend für alle Menschen, die ihre Stimme beruflich einsetzen wie z.B.
        Führungskräfte, ÄrztInnen,  LehrerInnen, ErzieherInnen, VerkäuferInnen, SporttrainerInnen, PolitikerInnen, PastorInnen, RednerInnen, etc.
      </p>
      <p>
        Nach einer ausführlichen Stimmanalyse arbeiten wir an der Optimierung Ihrer Fähigkeiten im Bereich Stimme, Sprechen und Körpersprache.
      </p>
      <p>Im indivduellen Einzelcoaching...</p>
      <ul>
        <li>… lernen Sie Ihre Stimme kennen</li>
        <li>… optimieren Sie die Ausdruckskraft Ihrer Stimme</li>
        <li>… erarbeiten wir eine physiologische Sprechweise, so dass Ihre Stimme belastbar wird</li>
        <li>… trainieren Sie eine präzise und deutliche Sprechweise</li>
        <li>… lernen Sie eine selbstbewusste Körpersprache</li>
        <li>… erhalten Sie Hintergrundwissen zur Stimmphysiologie</li>
      </ul>
      <p>
        Ziel ist es, Ihre Präsenz und Wirkungsweise zu steigern.
        Es wird Ihnen leichter fallen, beruflich und privat sicherer und lockerer vor Menschen zu sprechen.
      </p>
      <h1 id={sectionLinks.logopaedie}>Logopädie</h1>
      <Image
        src="/Logo1.jpg"
        alt="Logopädie mit Spiegel"
        size={IconSize.md}
      />
      <p>
        Logopädie ist die Behandlung von Stimm-, Sprech-, Sprach- und Schluckstörungen im Kindes-, Jugend oder Erwachsenenalter.
      </p>
      <p>
        Die Therapie umfasst eine ausführliche logopädische Diagnostik und Beratung unter Einbeziehung ärztlicher Befunde. Die Behandlung orientiert sich dabei immer am zu behandelnden Störungsbild und ist auf die individuellen Bedürfnissen der Patientinnen und Patienten abgestimmt.
      </p>
      <p>Folgende Störungsbilder behandle ich primär:</p>
      <ul>
        <li>- Sprachentwicklungs&shy;störung</li>
        <li>- Aussprachestörung</li>
        <li>- Stottern/Poltern</li>
        <li>- Stimmstörung</li>
        <li>- Gesichtslähmung</li>
        <li>- Dysarthrie</li>
        <li>- Aphasie</li>
      </ul>
      <Image
        src="/Logo2.png"
        alt="Logopädie mit Handpuppe"
        size={IconSize.md}
      />
      <p>Alle Therapieangebote sind systemisch-lösungsorientiert ausgerichtet.</p>
      <p>Anmeldung bitte telefonisch oder per E-Mail</p>
      <h2>Kosten:</h2>
      <p>Die Kosten für PrivatpatientInnen und Beihilfe-Versicherte werden üblicherweise von den privaten Krankenkassen übernommen. Entscheidend ist dabei Ihr individueller Versicherungsstatus. Generell erfolgt im Vorfeld der Behandlung eine Kostenvereinbarung. Die Rechnung über die entstandenen Kosten kann bei der privaten Krankenkasse zur Kostenübernahme eingereicht werden.</p>
      <p>Gesetzliche Krankenkassen bezahlen die Therapie in einer Privatpraxis leider nicht. Selbstverständlich besteht trotzdem die Möglichkeit zur Diagnostik und Therapie auf Selbstzahlerbasis.</p>
      <h2>Therapiedauer:</h2>
      <p>
        Die Gesamtdauer der logopädischen Untersuchung und Behandlung ist individuell und variiert von Patient zu Patient.
        Sie ist zum einen von der Art und Ausprägung der Symptomatik abhängig, aber auch von weiteren Faktoren wie Regelmäßigkeit der Termine,
        Mitarbeit, Kooperation, Motivation, häusliches Üben und der ärztlichen Verordnung über die Anzahl der Therapiesitzungen.
        Die Dauer einer logopädischen Sitzung umfasst in der Regel 45 min und erfolgt meistens als Einzelbehandlung.
      </p>
      <h1 id={sectionLinks.vortraege}>Vorträge & Workshops</h1>
      <p>Darüber hinaus biete ich für Interessierte Vorträge und Workshops an, die</p>
      <ul>
        <li>- in ihrem Beruf stimmlich stark gefordert sind, z.B. ErzieherInnen, LehrerInnen, Callcenter-MitarbeiterInnen.</li>
        <li>- Hintergrundwissen zum Thema Stimme und Prävention erhalten möchten.</li>
        <li>- langes Sprechen als anstrengend empfinden.</li>
        <li>- oft zu leise/monoton/undeutlich sprechen.</li>
      </ul>
      <p>
        Prävention setzt an, bevor sich durch unökonomische Stimmbelastung eine Stimmstörung entwickelt und Therapie nötig wird.
        In einem praxisbezogenen Training erarbeiten wir gemeinsam Techniken  zur Entwicklung des Stimmpotentials, zur Kräftigung von Stimme und Atmung.
        Gerne können Sie mich auch für weitere Vortragsthemen anfragen.
      </p>
      <h1 id={sectionLinks.ueber}>Über mich</h1>
      <p>2023: Eröffnung der Privatpraxis für Stimmcoaching & Logopädie</p>
      <p>2019-2022: Geburt meiner Kinder und Elternzeit; Stimmcoaching online</p>
      <p>2015-2019: Tätigkeit in Praxis für Logopädie + Systemische Therapie in Tübingen</p>
      <p>2012-2015: Tätigkeit in logopädischer Praxis in Weißenhorn, Kooperation mit Frühförderstelle</p>
      <p>2008-2011: Ausbildung zur Logopädin an der staatlich anerkannten Schule für Logopädie des Universitätsklinikums Ulm</p>
      <p>1987: In Balingen geboren</p>
      <Image src="/UeberMich.jpg" alt="Corinna Dinkel" size={IconSize.md} />
      <h2>Fachliche Spezialisierungen:</h2>
      <ul>
        <li>- Stimmarbeit nach Prof. Linklater, die Befreiung der natürlichen Stimme</li>
        <li>- Integrative Stimmtherapie, Therapie spezieller Stimmstörungen nach Evemarie Haupt</li>
        <li>- Therapie der Singstimme nach Miriam Haupt</li>
        <li>- Systemisch-lösungsorientierte Therapie für LogopädInnen</li>
        <li>- Humor und Provokation nach Josè Amrein</li>
        <li>- Zertifizierung Therapeutisches Zaubern®, Zaubern als Medium für die therapeutische und pädagogische Arbeit mit Kindern, Jugendlichen und Familien</li>
        <li>- Neue Ideen für die Stottertherapie nach Josè Amrein</li>
        <li>- Kontextoptimierung-Evidenzbasierte Therapie grammatischer Störungen im Vorschul-und Schulalter nach Prof. Dr. Motsch</li>
        <li>- Der Wortschatzsammler-Strategietherapie lexikalischer Störungen im Vorschul-und Schulalter nach Prof. Dr. Motsch</li>
        <li>- Manuelle Schlucktherapie nach Heber</li>
        <li>- OsLo - Osteopathie & Logopädie</li>
      </ul>
      <h1 id={sectionLinks.anfahrt}>Anfahrt</h1>
      {/* <Image src='/Directions.png' alt="weg zur praxis" /> */}
      <p>Ab 1.11.2024 befindet sich die Praxis in der Neuffenstraße 9 in 72336 Balingen</p>
      <p>Kostenlose Parkmöglichkeiten finden sich entlang der Neuffenstraße und der Roßbergstraße.</p>
      <p>Nach Absprache ist der Zugang über einen Nebeneingang in der Roßbergstraße auch barrierefrei möglich.</p>
      <h1 id={sectionLinks.impressum}>Impressum</h1>
      <p>Angaben gemäß § 5 TMG</p>
      <p>Corinna Dinkel</p>
      <p>Staatlich anerkannte Logopädin</p>
      <p>Neuffenstraße 9</p>
      <p>72336 Balingen</p>
      <p>+49 (0) 7433/383443</p>
      <p>info@stimmcoaching-logopaedie.de</p>
      <p>Berufsbezeichnung und berufsrechtliche Regelungen</p>
      <p>Staatlich anerkannte Logopädin</p>
      <p>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</p>
      <p>Corinna Dinkel</p>
      <p>Neuffenstraße 9</p>
      <p>72336 Balingen</p>
      <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      <p>Haftung für Inhalte</p>
      <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
        Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
        Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
      <p>Urheberrecht</p>
      <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
        Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
        Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
        Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
        Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
      <section className='space-y-8 [&>p]:text-sm'>
        <h1 id={sectionLinks.datenschutz}>Datenschutzerklärung</h1>
        <h2>Einleitung und allgemeine Angaben</h2>
        <p>
          Vielen Dank für Ihr Interesse an meiner Website.
          Der Schutz Ihrer personenbezogenen Daten ist mir ein sehr wichtiges Anliegen.
          Im Folgenden finden Sie Informationen zum Umgang mit Ihren Daten, die durch Ihre Nutzung meiner Website erfasst werden.
          Die Verarbeitung Ihrer Daten erfolgt entsprechend den gesetzlichen Regelungen zum Datenschutz.
        </p>
        <p>Verantwortliche Stelle im Sinne des Datenschutzrechts</p>
        <p>Privatpraxis für Stimmcoaching & Logopädie</p>
        <p>Corinna Dinkel</p>
        <p>Neuffenstraße 9</p>
        <p>72336 Balingen</p>
        <p>info@stimmcoaching-logopaedie.de</p>
        <p>07433/383443</p>
        <h2>Begriffsbestimmungen</h2>
        <p>
          In dieser Datenschutzerklärung werden in der Regel die offiziellen Begriffe der Datenschutzgrundverordnung (DSGVO) verwendet.
          Die offiziellen Begriffsbestimmungen werden in Art. 4 DSGVO erläutert.
        </p>
        <h2>Datenverarbeitung durch den Besuch meiner Website</h2>
        <p>
          Wenn Sie meine Webseiten aufrufen, ist es technisch notwendig, dass über Ihren Internetbrowser Daten an einen Webserver übermittelt werden.
          Folgende Daten werden während einer laufenden Verbindung zur Kommunikation zwischen Ihrem Internetbrowser und dem Webserver aufgezeichnet:
        </p>
        <ul className='text-sm'>
          <li>Datum und Uhrzeit der Anforderung</li>
          <li>Name der angeforderten Datei</li>
          <li>Seite, von der aus die Datei angefordert wurde</li>
          <li>Zugriffsstatus</li>
          <li>Verwendeter Webbrowser und verwendetes Betriebssystem</li>
          <li>(Vollständige) IP-Adresse des anfordernden Rechners</li>
          <li>Übertragene Datenmenge</li>
        </ul>
        <p>
          Die aufgelisteten Daten erhebt der Webserver, um einen reibungslosen Verbindungsaufbau der Website zu gewährleisten und eine komfortable Nutzung meiner Website durch die Nutzer zu ermöglichen.
          Zudem dient die Logdatei der Auswertung der Systemsicherheit und -stabilität sowie administrativen Zwecken.
          Rechtsgrundlage für die vorübergehende Speicherung der Daten bzw. der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO.
        </p>
        <h2>SSL- bzw. TLS-Verschlüsselung</h2>
        <p>
          Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung.
          Damit sind Daten, die Sie über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.
        </p>
        <h2>Plugins und Tools</h2>
        <p>Google Web Fonts</p>
        <p>
          Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden.
          Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
          Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen.
          Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse unsere Website aufgerufen wurde.
          Die Nutzung von Google Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote.
          Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
          Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.
          Weitere Informationen zu Google Web Fonts finden Sie unter https://developers.google.com/fonts/faq und in der Datenschutzerklärung von Google: https://policies.google.com/privacy?hl=de.
        </p>
      </section>
    </div >
  )
}
