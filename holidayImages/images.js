const CyrillicToTranslit = require('cyrillic-to-translit-js')
const holidaysJson = require('./holidaysDatabase.json')
const fs = require('fs')
const cyrillicToTranslit = new CyrillicToTranslit()

cyrillicToTranslit.transform('Какая-то строка')
const generateSomething = async () => {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer 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`,
        },
        body: JSON.stringify({
            model: 'gpt-4',
            messages: [
                {
                    role: 'user',
                    content: `
                    Am nevoie de descrierea profilului meu de pe upwork pentru a atrage cat mai multi clienti si a deveni cat mai popular atunci cand clientii cauta dezvoltatori. Deci am nevoie de o descriere asemanatoare cu a celor mai buni freelanceri.
Putin despre mine:
Ma numesc Dumitru, am mult timp liber pentru a contribui la proiecte, am 5 ani de experienta in domeniu front-end utilizand tehnologii precum React js, Next js, React-Native,Redux, Typescript.
De asemenea pot sa creez un design in figma in caz ca clientul are nevoie.
Pentru mine este foarte important clientul, de aceea poti sa adaugi ceva puncte care sa arate acest lucru.
Am nevoie ca descrierea sa fie in engleza, te rog sa adaugi si emojiuri ca sa arate mai atragator
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
    console.log(responseContent)
    fs.writeFileSync('./work.txt', responseContent)
}
generateSomething()
const getAllHolidays = () =>
  holidaysJson.reduce(
    (holidays, holidaysWithDate) => [...holidays, ...holidaysWithDate.holidays],
    [],
  )

const convertToSlugUsingRegex = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const getHolidayUrl = (holiday) => ({
  urlru: encodeURIComponent(convertToSlugUsingRegex(cyrillicToTranslit.transform(holiday.nameru))),
  urlen: encodeURIComponent(convertToSlugUsingRegex(holiday.nameen)),
  urlro: encodeURIComponent(
    convertToSlugUsingRegex(holiday.namero.normalize('NFD').replace(/[\u0300-\u036f]/g, '')),
  ),
})
const removeDuplicates = (holidaysArray) =>
  holidaysArray.filter((value, index, self) => {
    const isUniq =
      index ===
      self.findIndex((t) => {
        return t.urlen === value.urlen || t.urlro === value.urlro || t.urlru === value.urlru
      })

    if (!isUniq) {
      value.urlen = value.urlen + '-' + value.id
      value.urlro = value.urlro + '-' + value.id
      value.urlru = value.urlru + '-' + value.id
      console.log('Item is Not Uniq', value.id)
    }
    return isUniq
  })

// removeDuplicates(getAllHolidays())

// fs.writeFileSync(
//   './formatted.json',
//   JSON.stringify(
//     holidaysJson,
//     null,
//     2,
//   ),
// )

const translateHoliday = (holiday) => {
  holiday
}
