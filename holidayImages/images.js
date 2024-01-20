const CyrillicToTranslit = require('cyrillic-to-translit-js')
const holidaysJson = require('./holidaysDatabase.json')
const fs = require('fs')
const cyrillicToTranslit = new CyrillicToTranslit()

cyrillicToTranslit.transform('Какая-то строка')

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

removeDuplicates(getAllHolidays())

fs.writeFileSync(
  './formatted.json',
  JSON.stringify(
    holidaysJson,
    null,
    2,
  ),
)

//
//
// const translateTo = async () => {
//   for (let i = 0; i < holidaysFull.length; i += 1) {
//     const { date, alsoThisDay, holidays } = holidaysFull[i]
//
//     holidaysFull[i] = {
//       date,
//       alsoThisDayru: alsoThisDay,
//       alsoThisDayro: ro[i].alsoThisDay,
//       alsoThisDayen: en[i].alsoThisDay,
//       holidays: holidays.map((h, index) => ({
//         ...h,
//         namero: ro[i].holidays[index].nameru,
//         shortDescriptionro: ro[i].holidays[index].shortDescriptionru,
//         descriptionro: ro[i].holidays[index].descriptionru,
//         nameen: en[i].holidays[index].nameru,
//         shortDescriptionen: en[i].holidays[index].shortDescriptionru,
//         descriptionen: en[i].holidays[index].descriptionru,
//       })),
//     }
//   }
// }
// // translateTo()
//
// const formatted = newFormatted.map(h=>({
//   ...h,
//   holidays:h.holidays.map(hol=>({
//     ...hol,
//     namero:hol.namero === "--" ? "" : hol.namero,
//     shortDescriptionro:hol.shortDescriptionro === "--" ? "" : hol.shortDescriptionro,
//     descriptionro:hol.descriptionro === "--" ? "" : hol.descriptionro,
//     nameen:hol.nameen === "--" ? "" : hol.nameen,
//     shortDescriptionen:hol.shortDescriptionen === "--" ? "" : hol.shortDescriptionen,
//     descriptionen:hol.descriptionen === "--" ? "" : hol.descriptionen,
//   }))
// }))
// fs.writeFileSync('./formatted.json', JSON.stringify(formatted, null, 2))
