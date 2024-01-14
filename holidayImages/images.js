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
