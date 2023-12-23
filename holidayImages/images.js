const fs = require('fs')
const holidays = require('../jsonObj.json')

const holidaysList = holidays.reduce((list, { holidays }) => [...list, ...holidays], [])

const fetchSomething = async (startIndex) => {
  const holidaysFromIndex = holidaysList.slice(startIndex, startIndex + 5)
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer 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`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo-1106',
      messages: [
        {
          role: 'user',
          content: `
            Lucrez la un web site cu sarbatori. 
            Am o lista cu denumiri de sarbatori in rusa, dar trebuie sa le traduc si sa adaug descriere la ele.
            Eu o sa iti dau o lista de denumiri de sarbatori, dar tu sa imi returnezi si traducerea si o descriere de in jur de 1000 de cuvinte pentru fiecare limba.
            
            Dar tu imi returnezi raspunsul urmarind urmatorul template, fara sa mai scrii ceva extra, ceea ce se afla inntre <> va trebui inlocuit cu textul generat de tine, deasemenea parantezele <> nu trebuie sa le scrii:
            [id].nameRO: <numele sarbatorii tradus in romana>
            [id].nameEN: <numele sarbatorii tradus in engleza>
            [id].descriptionRO: <genereaza o descriere de in jur de 1000 cuvinte in romana>
            [id].descriptionEN: <genereaza o descriere de in jur de 1000 cuvinte in engleza>
            [id].descriptionRU: <genereaza o descriere de in jur de 1000 cuvinte in rusa>
          unde n este id-ul sarbatorii  
            Lista cu sarbatori este urmatoarea, te rog sa respecti template-ul de mai sus pentru raspuns si sa nu scrii nimic extra:
            ${holidaysFromIndex.reduce(
              (string, holiday) => `${string}\n[${holiday.id}]. ${holiday.nameru}`,
              '',
            )}
  `,
        },
      ],
      temperature: 1.0,
      top_p: 0.7,
      n: 1,
      stream: false,
      presence_penalty: 0,
      frequency_penalty: 0,
    }),
  })
  const responseJSON = await response.json()
  let responseContent = responseJSON.choices[0].message.content
  responseContent = responseContent.split('\n').filter(Boolean)

  const completeJSON = holidaysFromIndex.map((holiday) => {
    const nameRO = responseContent.find((r) => r.startsWith(`[${holiday.id}].nameRO`))
    const nameEN = responseContent.find((r) => r.startsWith(`[${holiday.id}].nameEN`))
    const descriptionRO = responseContent.find((r) => r.startsWith(`[${holiday.id}].descriptionRO`))
    const descriptionEN = responseContent.find((r) => r.startsWith(`[${holiday.id}].descriptionEN`))
    const descriptionRU = responseContent.find((r) => r.startsWith(`[${holiday.id}].descriptionRU`))

    return {
      ...holiday,
      namero: nameRO.split(`[${holiday.id}].nameRO`)[1],
      nameen: nameEN.split(`[${holiday.id}].nameEN`)[1],
      descriptionro: descriptionRO.split(`[${holiday.id}].descriptionRO`)[1],
      descriptionen: descriptionEN.split(`[${holiday.id}].descriptionEN`)[1],
      descriptionru: descriptionRU.split(`[${holiday.id}].descriptionRU`)[1],
    }
  })

  responseContent = responseContent.map((r, index) => `${index}__${r}`)

  responseContent = JSON.stringify(completeJSON, null, 2)
  console.log(responseContent)
  fs.writeFileSync('./data.json', responseContent)
}
// fetchSomething(0)

// const o = require('../jsonObj.json')
// const j = `{"timeAgo": "","nameru": "Новый год","nameen": "New Year's Day","namero": "Anul Nou","descriptionru": "Новый год – это праздник, который отмечают во всем мире в ночь с 31 декабря на 1 января. Это время веселья, праздничных украшений и фейерверков. Люди собираются с семьей и друзьями, чтобы вместе отпраздновать начало нового года. В России Новый год – один из самых любимых праздников. Традиционно подготовка к празднику начинается заранее: украшаются улицы и дома, наряжается новогодняя елка, готовятся подарки и праздничное застолье. В эту ночь принято загадывать желания, которые должны сбыться в новом году. В культуре России Новый год ассоциируется с Дедом Морозом и его внучкой Снегурочкой, которые приносят подарки детям.","descriptionen": "New Year's Day is a holiday celebrated all over the world on the night of December 31st to January 1st. It is a time of joy, festive decorations, and fireworks. People gather with family and friends to celebrate the start of the new year together. In Russia, New Year's Day is one of the most beloved holidays. Traditionally, preparations for the holiday begin in advance: streets and houses are decorated, a New Year's tree is dressed up, gifts are prepared, and a festive feast is arranged. It is customary to make wishes on this night, which are supposed to come true in the new year. In Russian culture, New Year's Day is associated with Grandfather Frost and his granddaughter Snow Maiden, who bring gifts to children.","descriptionro": "Anul Nou este o sărbătoare celebrată în întreaga lume în noaptea de 31 decembrie spre 1 ianuarie. Este un timp al bucuriei, al decorațiunilor festive și al focurilor de artificii. Oamenii se adună cu familia și prietenii pentru a sărbători împreună începutul noului an. În Rusia, Anul Nou este una dintre cele mai îndrăgite sărbători. Tradițional, pregătirile pentru sărbătoare încep din timp: străzile și casele sunt decorate, se împodobește bradul de Anul Nou, se pregătesc cadouri și se aranjează un ospăț festiv. În această noapte este obiceiul să se facă dorințe, care ar trebui să se împlinească în noul an. În cultura rusă, Anul Nou este asociat cu Moș Crăciun și nepoata sa, Snegurochka, care aduc cadouri copiilor.","imageURL": "","id": ""}`
// let k = 0
// o.map((m) => {
//   m.holidays.map((h) => {
//     k += 1
//   })
// })
// console.log(k)
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// const generateQueries = (startIndex) => {
//   const holidaysFromIndex = holidaysList.slice(startIndex, startIndex + 5)
//   readline.question(
//     ,
//     (gptResponse) => {
//       const data = gptResponse.split(`\n`)
//       console.log(data)
//       readline.close()
//     },
//   )
// }
// generateQueries(0)

const generateImage = async (startIndex) => {
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer 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`,
    },
    body: JSON.stringify({
      model: 'dall-e-3',
      prompt:
        'Am un prieten si el are un BMW E46 break, facelift, 3 series. Te rog sa imi generezi o imagine cum a incercat el sa faca drifturi pe zapada si sa blocat masina in zapada, iar un nissan qashqai j11 il scoate din zapada',
      n: 1,
      size: '1024x1024',
    }),
  })
  const responseJSON = await response.json()
  console.log(JSON.stringify(responseJSON, null, 2))
}
// generateImage(0)

const fetchSomething1 = async () => {
  console.log('nnnn')

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer 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`,
    },
    body: JSON.stringify({
      model: 'gpt-4-1106-preview',
      messages: [
        {
          role: 'user',
          content: `
          Creez un website, am aici Politica de Confidențialitate in romana. Te rog sa imi returnezi in engleza:
          
             <p className={styles.paragraph}>
      DIMA'S SOFTWARE urmează o procedură standard de utilizare a fișierelor de jurnal. Aceste
      fișiere înregistrează vizitatorii atunci când accesează site-urile web. Toate companiile de
      găzduire fac acest lucru și fac parte din analiza serviciilor de găzduire. Informațiile
      colectate de fișierele de jurnal includ adresele protocolului Internet (IP), tipul
      browserului, furnizorul de servicii Internet (ISP), marca de timp a datei și orei, paginile de
      referință/ieșire și, posibil, numărul de clicuri. Acestea nu sunt legate de nicio informație
      care este personal identificabilă. Scopul informațiilor este de a analiza tendințele, de a
      administra site-ul, de a urmări mișcarea utilizatorilor pe site și de a colecta informații
      demografice.
    </p>
    <h2>
      <strong className={styles.strong}> Cookies și Beacon-uri Web</strong>
    </h2>
    <p className={styles.paragraph}>
      La fel ca oricare alt site web, DIMA'S SOFTWARE folosește "cookie-uri". Aceste cookie-uri sunt
      utilizate pentru a stoca informații, inclusiv preferințele vizitatorilor și paginile de pe
      site-ul web pe care vizitatorul le-a accesat sau le-a vizitat. Informațiile sunt utilizate
      pentru a optimiza experiența utilizatorilor prin personalizarea conținutului paginii noastre
      web pe baza tipului de browser al vizitatorilor și/sau a altor informații.
    </p>
    <h2>
      <strong className={styles.strong}> Google DoubleClick DART Cookie</strong>
    </h2>
    <p className={styles.paragraph}>
      Google este unul dintre furnizorii terți de pe site-ul nostru. Folosește, de asemenea,
      cookie-uri, cunoscute sub numele de cookie-uri DART, pentru a furniza anunțuri vizitatorilor
      noștri pe baza vizitelor acestora pe www.website.com și pe alte site-uri de pe internet. Cu
      toate acestea, vizitatorii pot alege să refuze utilizarea cookie-urilor DART vizitând Politica
      de Confidențialitate a rețelei de publicitate Google la URL-ul următor -{' '}
      <a href='https://policies.google.com/technologies/ads'>google ads</a>
    </p>
    <h2>
      <strong className={styles.strong}> Partenerii noștri de Publicitate</strong>
    </h2>
    <p className={styles.paragraph}>
      Unii dintre reclamanții de pe site-ul nostru pot utiliza cookie-uri și beacon-uri web.
      Partenerii noștri de publicitate sunt enumerați mai jos. Fiecare dintre partenerii noștri de
      publicitate are propria lor Politică de Confidențialitate pentru politicile lor privind datele
      utilizatorilor. Pentru un acces mai ușor, am inclus link-uri către Politicile lor de
      Confidențialitate mai jos.
    </p>
    <ul>
      <li>
        <p className={styles.paragraph}>Google</p>
        <p className={styles.paragraph}>
          <a href='https://policies.google.com/technologies/ads'>google ads</a>
        </p>
      </li>
    </ul>
    <h2>
      <strong className={styles.strong}>
        {' '}
        Politici de Confidențialitate ale Partenerilor de Publicitate
      </strong>
    </h2>
    <p className={styles.paragraph}>
      Puteți consulta această listă pentru a găsi Politica de Confidențialitate pentru fiecare
      dintre partenerii noștri de publicitate de la DIMA'S SOFTWARE.
    </p>
    <p className={styles.paragraph}>
      Serverele terților furnizori de publicitate sau rețelele de publicitate utilizează tehnologii
      precum cookie-uri, JavaScript sau Beacon-uri Web care sunt folosite în reclamele și link-urile
      lor respective care apar, care sunt trimise direct către browserul utilizatorilor. Aceste
      tehnologii sunt utilizate pentru a măsura eficacitatea campaniilor lor de publicitate și/sau
      pentru a personaliza conținutul de publicitate pe care îl vedeți pe site-urile pe care le
      vizitați.
    </p>
    <p className={styles.paragraph}>
      Rețineți că DIMA'S SOFTWARE nu are acces la aceste cookie-uri care sunt utilizate de reclamani
      terți.
    </p>
    <h2>
      <strong className={styles.strong}> Politici de Confidențialitate ale Terților</strong>
    </h2>
    <p className={styles.paragraph}>
      Politica de Confidențialitate a DIMA'S SOFTWARE nu se aplică altor reclamanți sau site-uri
      web. Prin urmare, vă sfătuim să consultați Politicile de Confidențialitate corespunzătoare ale
      acestor servere de publicitate terțe pentru informații mai detaliate. Aceasta poate include
      practicile lor și instrucțiunile referitoare la modul de renunțare la anumite opțiuni.
    </p>
    <p className={styles.paragraph}>
      Puteți alege să dezactivați cookie-urile prin intermediul opțiunilor individuale ale
      browserului dvs. Pentru a afla mai multe informații detaliate despre gestionarea cookie-urilor
      cu browsere web specifice, le puteți găsi pe site-urile web ale browserelor respective.
    </p>
    <h2>
      <strong className={styles.strong}>
        {' '}
        Drepturile de Confidențialitate ale CCPA (Nu Vând Informații Personale)
      </strong>
    </h2>
    <p className={styles.paragraph}>
      În conformitate cu CCPA, printre alte drepturi, consumatorii din California au dreptul de:
    </p>
    <p className={styles.paragraph}>
      Solicitați unei afaceri care colectează datele personale ale unui consumator să dezvăluie
      categoriile și piesele specifice de date personale pe care o afacere le-a colectat despre
      consumatori.
    </p>
    <p className={styles.paragraph}>
      Solicitați unei afaceri să șteargă orice date personale despre consumatorul pe care o afacere
      le-a colectat.
    </p>
    <p className={styles.paragraph}>
      Solicitați unei afaceri care vinde date personale ale unui consumator să nu vândă datele
      personale ale consumatorului.
    </p>
    <p className={styles.paragraph}>
      Dacă faceți o solicitare, avem o lună pentru a vă răspunde. Dacă doriți să exercitați oricare
      dintre aceste drepturi, vă rugăm să ne contactați.
    </p>
    <h2>
      <strong className={styles.strong}> Drepturile de Protecție a Datelor GDPR</strong>
    </h2>
    <p className={styles.paragraph}>
      Dorim să ne asigurăm că sunteți pe deplin conștienți de toate drepturile dvs. de protecție a
      datelor. Fiecare utilizator are dreptul la următoarele:
    </p>
    <p className={styles.paragraph}>
      Dreptul de acces – Aveți dreptul de a solicita copii ale datelor dvs. personale. Putem percepe
      o taxă mică pentru acest serviciu.
    </p>
    <p className={styles.paragraph}>
      Dreptul la rectificare – Aveți dreptul de a solicita corectarea oricăror informații pe care
      credeți că sunt inexacte. Aveți, de asemenea, dreptul de a solicita completarea informațiilor
      pe care credeți că sunt incomplete.
    </p>
    <p className={styles.paragraph}>
      Dreptul la ștergere – Aveți dreptul de a solicita ștergerea datelor dvs. personale, în anumite
      condiții.
    </p>
    <p className={styles.paragraph}>
      Dreptul la restricționarea prelucrării – Aveți dreptul de a solicita restricționarea
      prelucrării datelor dvs. personale, în anumite condiții.
    </p>
    <p className={styles.paragraph}>
      Dreptul de a vă opune prelucrării – Aveți dreptul de a vă opune prelucrării datelor dvs.
      personale, în anumite condiții.
    </p>
    <p className={styles.paragraph}>
      Dreptul la portabilitatea datelor – Aveți dreptul de a solicita transferul datelor pe care
      le-am colectat la o altă organizație sau direct către dvs., în anumite condiții.
    </p>
    <p className={styles.paragraph}>
      Dacă faceți o solicitare, avem o lună pentru a vă răspunde. Dacă doriți să exercitați oricare
      dintre aceste drepturi, vă rugăm să ne contactați.
    </p>
    <h2>
      <strong className={styles.strong}> Informații despre Copii</strong>
    </h2>
    <p className={styles.paragraph}>
      O altă parte a priorității noastre este adăugarea protecției pentru copii în timpul utilizării
      internetului. Încurajăm părinții și tutorii să observe, să participe și/sau să monitorizeze și
      să îndrume activitatea lor online.
    </p>
    <p className={styles.paragraph}>
      DIMA'S SOFTWARE nu colectează în mod cunoscut nicio informație personal identificabilă de la
      copii cu vârsta sub 13 ani. Dacă credeți că copilul dvs. a furnizat acest tip de informații pe
      site-ul nostru, vă încurajăm în mod categoric să ne contactați imediat și vom face toate
      eforturile noastre pentru a elimina în mod prompt astfel de informații din înregistrările
      noastre.
    </p>
    <h2>
      <strong className={styles.strong}>
        {' '}
        Modificări la Această Politică de Confidențialitate
      </strong>
    </h2>
    <p className={styles.paragraph}>
      Putem actualiza periodic Politica noastră de Confidențialitate. Prin urmare, vă sfătuim să
      revizuiți această pagină periodic pentru orice modificări. Vă vom notifica cu privire la orice
      modificări prin postarea noii Politici de Confidențialitate pe această pagină. Aceste
      modificări sunt efective imediat, după ce sunt postate pe această pagină.
    </p>
    <h2>
      <strong className={styles.strong}> Contactați-ne</strong>
    </h2>
    <p className={styles.paragraph}>
      Dacă aveți întrebări sau sugestii cu privire la Politica noastră de Confidențialitate, nu
      ezitați să ne contactați.
    </p>
    <p className={styles.paragraph}>
      Pentru orice intrebare sau detaliu ce implica securitatea datelor utilizatorilor CarMeaster va
      rugam sa ne scrieti pe adresa de email&nbsp;
      <a href='mailto:dum.gotca@gmail.com'>dum.gotca@gmail.com</a>
    </p>
            `,
        },
      ],
      temperature: 1.0,
      top_p: 0.7,
      n: 1,
      stream: false,
      presence_penalty: 0,
      frequency_penalty: 0,
    }),
  })
  console.log('rrrr')
  const responseJSON = await response.json()
  let responseContent = responseJSON.choices[0].message.content
  console.log(responseContent)
  // responseContent = responseContent.split('\n').filter(Boolean)
  //
  // const completeJSON = holidaysFromIndex.map((holiday) => {
  //   const nameRO = responseContent.find((r) => r.startsWith(`[${holiday.id}].nameRO`))
  //   const nameEN = responseContent.find((r) => r.startsWith(`[${holiday.id}].nameEN`))
  //   const descriptionRO = responseContent.find((r) => r.startsWith(`[${holiday.id}].descriptionRO`))
  //   const descriptionEN = responseContent.find((r) => r.startsWith(`[${holiday.id}].descriptionEN`))
  //   const descriptionRU = responseContent.find((r) => r.startsWith(`[${holiday.id}].descriptionRU`))
  //
  //   return {
  //     ...holiday,
  //     namero: nameRO.split(`[${holiday.id}].nameRO`)[1],
  //     nameen: nameEN.split(`[${holiday.id}].nameEN`)[1],
  //     descriptionro: descriptionRO.split(`[${holiday.id}].descriptionRO`)[1],
  //     descriptionen: descriptionEN.split(`[${holiday.id}].descriptionEN`)[1],
  //     descriptionru: descriptionRU.split(`[${holiday.id}].descriptionRU`)[1],
  //   }
  // })
  //
  // responseContent = responseContent.map((r, index) => `${index}__${r}`)
  //
  // responseContent = JSON.stringify(completeJSON, null, 2)
  // console.log(responseContent)
  fs.writeFileSync('./data.json', responseContent)
}
fetchSomething1()
