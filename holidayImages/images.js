const fs = require('fs')
const axios = require('axios')
const jsdom = require('jsdom')
const { v4 } = require('uuid')
const holidays = require('./holidaysv2.json')

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
const options = {
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    Cookie:
      'c0c3b47a440f929a5cad216703360052=071f5fd0ef13b9c886f4c8089b050f91; c5f3dfe90a1f32f4dfa81a4e37bb102b=1; _ym_uid=1701381997824725945; _ym_d=1701381997; 1054648025c9b037b59b6530f6885a78=1; c0c3b47a440f929a5cad216703360052=f83eb35f6028d1ac30063c434f2626df; _ym_isad=2; referer=%252F; ad5ee0d4e6af2bc049ef8235b4a901e6=1; __gads=ID=d40bf8d0cf063d04:T=1701382000:RT=1704758221:S=ALNI_MbMTRpUABLXiddxjPzSPGNLReY3ew; __gpi=UID=00000cff909ad014:T=1701382000:RT=1704758221:S=ALNI_MbXE8jMGAiL8hNNv6l6KMVB6X5gag; _ym_visorc=w',
  },
}

const downloadImage = async (url, filename) => {
  const response = await axios.get(url, { ...options, responseType: 'arraybuffer' })

  fs.writeFile(`./images/${filename}`, response.data, (err) => {
    if (err) throw err
    console.log('Image downloaded successfully!')
  })
}
const fetchHolidayDescription = async (url) => {
  try {
    const response = await axios.get(url, options)
    const dom = new jsdom.JSDOM(response.data)
    const text = [
      ...dom.window.document.querySelectorAll('p[style="line-height: 25px; text-align: left;"]'),
    ]
    const description = text.map((c) => c.textContent).join('\n')
    return description || ''
  } catch (err) {
    return ''
  }
}
const selectHolidaysFromPage = async (domString) => {
  const dom = new jsdom.JSDOM(domString)
  const itemPage = dom.window.document.querySelector('div[class="item-page"]')

  const tableBodyChildren = [
    ...itemPage.querySelector('table[class="art-article"] > tbody').children,
  ]

  const holidaysWithDescription = [...tableBodyChildren.at(-1).querySelector('td').children].slice(
    5,
    -1,
  )
  const holidaysWithDescriptionHolidays = holidaysWithDescription.map((ch) => {
    const href = ch.querySelector('a').href
    const shortDescription = [...ch.querySelectorAll('span')].at(-1).textContent
    return { href, shortDescription }
  })

  const [alsoThisDayTitle, ...alsoThisDay] = [
    ...tableBodyChildren.at(-3).querySelector('td').children,
  ]
  const alsoThisDayHolidays = alsoThisDay.map((h) => h.textContent)

  const listOfHolidaysWithoutDescription = tableBodyChildren.slice(0, -3)

  const holidaysWithDescriptionAndHrefFormatted = (
    await Promise.all(
      listOfHolidaysWithoutDescription.reduce(
        (t, c) => [
          ...t,
          ...[...c.children].map(async (ch) => {
            const href = ch.querySelector('a')?.href || null
            const title = (ch.textContent || '').replace(/(\r\n|\n|\r)/gm, '').trim() || null
            const shortDescription =
              holidaysWithDescriptionHolidays.find((e) => e.href === href)?.shortDescription || ''
            let imageSrc = ch.querySelector('img')?.src || null
            const id = v4()
            if (imageSrc) {
              await downloadImage(imageSrc, id + '.jpg')
              imageSrc = id + '.jpg'
            }
            let description = ''
            if (href) description = await fetchHolidayDescription(href)
            return {
              id,
              href,
              title,
              shortDescription,
              description,
              imageSrc,
            }
          }),
        ],
        [],
      ),
    )
  ).filter((h) => h.title)
  return { holidaysWithDescriptionAndHrefFormatted, alsoThisDayHolidays }
}
const fetchPage = async (url, i, j) => {
  try {
    const response = await axios.get(url, options)
    const { holidaysWithDescriptionAndHrefFormatted, alsoThisDayHolidays } =
      await selectHolidaysFromPage(response.data)
    console.log(holidaysWithDescriptionAndHrefFormatted)
    holidays.push({
      date: {
        day: i > 9 ? `${i}` : `0${i}`,
        month: j > 9 ? `${j}` : `0${j}`,
      },
      alsoThisDay: alsoThisDayHolidays,
      holidays: holidaysWithDescriptionAndHrefFormatted.map((h) => ({
        timeAgo: '',
        nameru: h.title,
        nameen: '',
        namero: '',
        shortDescriptionru: h.shortDescription,
        descriptionru: h.description,
        shortDescriptionen: '',
        descriptionen: '',
        shortDescriptionro: '',
        descriptionro: '',
        imageURL: h.imageSrc,
        id: h.id,
      })),
    })
    fs.writeFileSync('./holidaysv2.json', JSON.stringify(holidays, null, 2))

  } catch (err) {
    console.log(err)
  }
}

const geturl = [
  'https://kakoj-segodnja-prazdnik.com/prazdniki/v-janvare/LKKLK-janvarja',
  'https://kakoj-segodnja-prazdnik.com/prazdniki/v-fevrale/LKKLK-fevralja',
  'https://kakoj-segodnja-prazdnik.com/prazdniki/v-marte/LKKLK-marta',
  'https://kakoj-segodnja-prazdnik.com/prazdniki/v-aprele/LKKLK-aprelja',
  'https://kakoj-segodnja-prazdnik.com/prazdniki/v-mae/LKKLK-maja',
  'https://kakoj-segodnja-prazdnik.com/prazdniki/v-ijune/LKKLK-ijunja',
  'https://kakoj-segodnja-prazdnik.com/prazdniki/v-ijule/LKKLK-ijulja',
  'https://kakoj-segodnja-prazdnik.com/prazdniki/v-avguste/LKKLK-avgusta',
  'https://kakoj-segodnja-prazdnik.com/prazdniki/v-sentjabre/LKKLK-sentjabrja',
  'https://kakoj-segodnja-prazdnik.com/prazdniki/v-oktjabre/LKKLK-oktjabrja',
  'https://kakoj-segodnja-prazdnik.com/prazdniki/v-nojabre/LKKLK-nojabrja',
  'https://kakoj-segodnja-prazdnik.com/prazdniki/v-dekabre/LKKLK-dekabrja',
]

const arr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
// fetchPage('https://kakoj-segodnja-prazdnik.com/prazdniki/v-avguste/3-avgusta', 3, 8)
// fetchMonth()
const fetchMonth = async () => {
  for (let j = 0; j < arr.length; j += 1) {
    const days = arr[j]
    for (let i = 1; i <= days; i += 1) {
      await fetchPage(geturl[j].replace('LKKLK', i.toString()), i, j)
    }
  }
}
const fetchMissing = async () => {
  for (let i = 0; i < holidays.length; i += 1) {
    const hol = holidays[i]
    if(hol.holidays.length === 0){
      await fetchPage(geturl[(+hol.date.month)-1].replace('LKKLK', i.toString()), +hol.date.day, +hol.date.month)
    }
  }
}

console.log(holidays.length)
fetchMissing()
// arr.reduce((tot, n, index) => {
//   for (let i = 1; i <= n; i += 1) {
//     console.log(tot+i-1)
//     holidays[tot+i-1].date.month = index + 1 > 9 ? `${index + 1}` : `0${index + 1}`
//   }
//   return tot + n
// }, 0)
// fs.writeFileSync('./holidaysv2.json', JSON.stringify(holidays, null, 2))
