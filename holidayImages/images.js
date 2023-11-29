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

  responseContent = responseContent.map((r, index) => `${index}__${r}`)

  responseContent = JSON.stringify(responseContent, null, 2)
  console.log(responseContent)
  fs.writeFileSync('./data.json', responseContent)
}
fetchSomething(0)

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
