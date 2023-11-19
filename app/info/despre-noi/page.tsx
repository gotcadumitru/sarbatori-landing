import classes from '../info.module.css'

const AboutUs = () => (
  <div>
    <p>
      Suntem o companie de dezvoltare software dedicată creării și implementării unor soluții
      tehnologice complexe și inovatoare. Cu o experiență deosebită în domeniul IT, am pus mereu
      accent pe excelența tehnică, inovație și satisfacția clienților noștri. La CarMaster, nu
      suntem doar programatori și dezvoltatori, suntem creatori de soluții de top, deschiși
      provocărilor și dedicați rezolvării problemelor din lumea reală prin tehnologie.
    </p>
    <h2 className={classes.sectionHeader}>Ce Ne Deosebește</h2>
    <ol>
      <li className={classes.listItem}>
        <strong>1. Inovație constantă:</strong> Suntem cunoscători ai faptului că tehnologia
        evoluează rapid, și astfel, suntem întotdeauna în căutarea celor mai recente tendințe și
        tehnologii. Ne străduim să ducem dezvoltarea software la un nivel superior, aducând soluții
        inovatoare și tehnologii emergente în proiectele noastre.
      </li>

      <li className={classes.listItem}>
        <strong>1. Echipă Excepțională:</strong> La CarMaster, echipa noastră este cel mai valoros
        activ pe care îl avem. Fiecare membru al echipei noastre este ales cu grijă pentru
        cunoștințele și abilitățile lor de top, creativitatea și pasiunea pentru tehnologie. Aceasta
        este sursa forței noastre.
      </li>

      <li className={classes.listItem}>
        <strong>1. Soluții Personalizate:</strong> Înțelegem că fiecare proiect are nevoi unice, așa
        că lucrăm îndeaproape cu clienții noștri pentru a dezvolta soluții personalizate care se
        potrivesc perfect obiectivelor și cerințelor lor.
      </li>

      <li className={classes.listItem}>
        <strong>1. Etica și Protecția Datelor:</strong> Suntem angajați în mod serios să respectăm
        confidențialitatea și protecția datelor. Ne asigurăm că toate soluțiile noastre respectă
        normele și reglementările de protecție a datelor, inclusiv GDPR.
      </li>
    </ol>
    <h2 className={classes.sectionHeader}>Serviciile Noastre</h2>
    Oferim o gamă largă de servicii în domeniul dezvoltării software, care includ:
    <ul>
      <li>
        <strong>Dezvoltare de Aplicații Web și Mobile:</strong> Creăm aplicații web și mobile
        personalizate și eficiente pentru a satisface nevoile unice ale afacerii dvs.
      </li>
      <li>
        <strong>Dezvoltare de Software pentru Companii:</strong> Dezvoltăm soluții software
        personalizate pentru a automatiza procesele afacerii și a crește eficiența operațională.
      </li>
      <li>
        <strong>Integrare și Implementare:</strong> Oferim servicii de integrare și implementare
        pentru a vă asigura că noile soluții se potrivesc perfect cu infrastructura dvs. existentă.
      </li>
      <li>
        <strong>Consultanță Tehnologică:</strong> Vă ajutăm să luați decizii tehnologice informate
        și să vă planificați strategia IT.
      </li>
    </ul>
    <h2 className={classes.sectionHeader}>Misiunea Noastră</h2>
    Misiunea noastră este de a transforma ideile în realitate. Suntem dedicați aducerii tehnologiei
    de vârf în viața de zi cu zi a oamenilor și a afacerilor. Cu pasiunea noastră pentru inovație,
    suntem hotărâți să facem lumea un loc mai bun prin tehnologie și să fim un partener de încredere
    pentru clienții noștri.
  </div>
)
export default AboutUs
