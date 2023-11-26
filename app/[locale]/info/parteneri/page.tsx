import classes from '../info.module.css'

const Partners = () => (
  <div>
    La DIMA'S SOFTWARE, suntem mândri de colaborările noastre solide și parteneriatele strategice
    care au contribuit la succesul nostru și la oferirea de soluții de înaltă calitate clienților
    noștri. Iată câțiva dintre partenerii noștri de încredere:
    <ol>
      <li className={classes.listItem}>
        <strong className={classes.sectionHeader}>XYZ Soluții</strong>
        <p>
          Domeniul de activitate: XYZ Soluții este o companie de consultanță și dezvoltare software
          specializată în soluții de analiză de date și business intelligence. Cu expertiză în
          domenii variate, oferă servicii care ajută organizațiile să extragă cunoștințe valoroase
          din datele lor pentru a lua decizii informate.
        </p>
        <p>
          Contribuția la afacerea noastră: Colaborarea cu XYZ Soluții ne-a permis să îmbunătățim
          abilitățile noastre de analiză de date și să dezvoltăm soluții software avansate pentru
          clienții noștri. Parteneriatul nostru strategic a deschis noi oportunități și a dus la
          proiecte de succes.
        </p>
      </li>
      <li className={classes.listItem}>
        <strong className={classes.sectionHeader}>ABC Consultanță de Management</strong>
        <p>
          Domeniul de activitate: ABC Consultanță de Management este o companie de consultanță în
          management care oferă expertiză în strategie, operațiuni și dezvoltare organizațională. Cu
          un portofoliu impresionant de clienți, aceștia ajută organizațiile să își optimizeze
          procesele și să-și atingă obiectivele.
        </p>
        <p>
          Contribuția la afacerea noastră: Colaborarea cu ABC Consultanță de Management ne-a adus o
          perspectivă valoroasă asupra dezvoltării noastre și a proceselor operaționale. Am lucrat
          împreună la proiecte de creștere și eficiență care au adus rezultate semnificative.
        </p>
      </li>
      <li className={classes.listItem}>
        <strong className={classes.sectionHeader}>TechStart Hub</strong>
        <p>
          Domeniul de activitate: TechStart Hub este un incubator de tehnologie care sprijină
          startup-urile tehnologice în etapa inițială a dezvoltării. Ei oferă resurse, mentorat și
          acces la rețele valoroase pentru a ajuta noii antreprenori să-și dezvolte ideile și
          produsele.
        </p>
        <p>
          Contribuția la afacerea noastră: Parteneriatul cu TechStart Hub ne-a permis să identificăm
          și să sprijinim proiecte inovatoare în faza incipientă. Suntem mândri să lucrăm alături de
          startup-uri promițătoare și să contribuim la creșterea lor.
        </p>
      </li>
    </ol>
  </div>
)
export default Partners
