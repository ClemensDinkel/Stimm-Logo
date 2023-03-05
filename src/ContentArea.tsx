import { Image, IconSize } from './components/Image'
import { sectionLinks } from './sectionLinks'

export const ContentArea = () => {
  const { impressum, kontakt, logopaedie, stimmCoaching, ueber, vortraege } = sectionLinks
  return (
    <div className="max-w-[1000px] space-y-8 px-8 pb-8">
      <Image
        src="../public/Front1.jpg"
        alt="Corinna Dinkel"
        size={IconSize.md}
      />
      <p >Herzlich Willkommen in der Privatpraxis für Stimmcoaching & Logopädie</p>
      <h1 id={stimmCoaching} className="text-xl font-bold">Stimmcoaching</h1>
      <p >Ihre Stimme ist Ihre Visitenkarte und ein nicht zu unterschätzender Erfolgsfaktor.</p>
      <Image
        src="../public/Front2.jpg"
        alt="Corinna Dinkel 2"
        size={IconSize.md}
      />
      <p>
        Ein Stimmcoaching empfehle ich Ihnen, wenn Sie an einer Analyse und der Optimierung Ihrer Fähigkeiten im Bereich Stimme,
        Sprechen und Körpersprache interessiert sind. Durch ein Stimmcoaching steigern Sie Ihre Präsenz und die Wirkungsweise auf Ihre ZuhörerInnen.
        Es wird Ihnen leichter fallen, beruflich und privat sicherer und lockerer vor Menschen zu sprechen.
      </p>
      <h1 id={logopaedie} className="text-xl font-bold">Logopädie</h1>
      <Image
        src="../public/Logo1.jpg"
        alt="Logopädie mit Spiegel"
        size={IconSize.md}
      />
      <p>
        Logopädie ist die Behandlung von Stimm-, Sprech-, Sprach- und Schluckstörungen im Kindes-, Jugend oder Erwachsenenalter.
        Sie beinhaltet sowohl eine umfassende Beratung und Diagnostik, als auch eine individuelle Therapie.
      </p>
      <Image
        src="../public/Logo2.png"
        alt="Logopädie mit Handpuppe"
        size={IconSize.md}
      />
      <p>Folgende Störungsbilder behandle ich primär:</p>
      <ul>
        <li >Sprachentwicklungsstörung</li>
        <li>Aussprachestörung</li>
        <li>Stottern/Poltern</li>
        <li>Stimmstörung</li>
        <li>Facialisparese</li>
        <li>Dysarthrie</li>
        <li>Aphasie</li>
      </ul>
      <h1 id={vortraege} className="text-xl font-bold">Vorträge & Workshops</h1>
      <p>Darüber hinaus biete ich Vorträge und Workshops für Interessierte an,
        die in ihrem Beruf stimmlich stark gefordert sind, z.B. ManagerInnen, ErzieherInnen, LehrerInnen, Callcenter-MitarbeiterInnen.
        Hintergrundwissen zum Thema Stimme und Prävention erhalten möchten.
        langes Sprechen als anstrengend empfinden.oft zu leise/monoton/undeutlich sprechen.
        Prävention setzt an, bevor sich durch unökonomische Stimmbelastung eine Stimmstörung entwickelt und Therapie nötig wird.
        In einem praxisbezogenen Training erarbeiten wir gemeinsam Techniken  zur Entwicklung des Stimmpotentials, zur Kräftigung von Stimme und Atmung.
        Gerne können Sie mich auch für weitere Vortragsthemen anfragen.
      </p>
      <h1 id={ueber} className="text-xl font-bold">Über mich</h1>
      <p>Ich bin in Balingen aufgewachsen und zur Schule gegangen.
        Nach dem Abitur habe ich meine Ausbildung zur Logopädin an der Akademie für medizinische Berufe des Uniklinikums Ulm absolviert.
        Mit langjähriger Erfahrung als angestellte Logopädin und zahlreichen Weiterbildungen starte ich nun in eigener Praxis.
        Ich freue mich auf Sie!
      </p>
      <h1 id={kontakt} className="text-xl font-bold">Kontakt</h1>
      <Image src='../public/Directions.png' alt="weg zur praxis" />
      <h1 id={impressum} className="text-xl font-bold">Impressum</h1>
    </div >
  )
}
