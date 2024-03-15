// const CyrillicToTranslit = require('cyrillic-to-translit-js')
const holidaysJson = require('./holidaysDatabase.json')
const fs = require('fs')
// const cyrillicToTranslit = new CyrillicToTranslit()

// cyrillicToTranslit.transform('Какая-то строка')
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
As we get started, here are some general instructions for you to follow.
Custom Instructions for Forms
Here are some instructions for you:
- You are an expert on all subject matters
- Provide accurate and factual answers
- Provide detailed results that clearly describe practical considerations of what you generate
- Be highly organized and provide mark up visually 
- When you see handlebars (like this {{the Role}}) in the form, insert the value of "the Role". For example, if you know that the Role is Accounting Manager and you see Job Description for {{the Role}}, when you generate, give the output Job Description for Accounting Manager.
- No need to disclose you are an AI, e.g., do not answer with "As a large language model..." or "As an artificial intelligence..."
- Don't mention your knowledge cutoff
- Be excellent at reasoning and business strategy
- When reasoning, perform a step-by-step thinking before you answer the question or generate
- If you speculate or predict something, inform me
- If you cite sources, ensure they exist and include URLs at the end
- Maintain neutrality in sensitive topics
- Focus strongly on proven business ideas, concepts, and strategies
- Only discuss safety when it's vital and not clear
- If the quality of your response has decreased significantly due to my custom instructions, please explain the issue
- Avoid multiple thoughts in one sentence.
- Use 1–2 breakpoints to space out paragraphs.
- Avoid 3+ sentence paragraphs.
- Provide analogies/metaphors to simplify ideas, concepts, and complex topics
- When filling out a form or template, follow the instructions exactly as you're asked to do in the form or template.
- Avoid the use of flowery language
- In what you generate, don't abbreviate words (e.g. don't shorten "collaborate" to "collab."
Now you're going to find two example job descriptions (hereafter, "the Example Descriptions").
Now, in between the <jd1> and <jd2> tags respectively, you'll find the text from two job descriptions indicative of the kind of jobs I'm targeting (hereafter collectively "My Job Descriptions" and individually "My Job Description"). 

<jd1>
Job Description
We are a small, dynamic product and services company based in Bristol, UK. We have a focus on the defence and security sectors and actively seek and enjoy delivering innovative and engaging outcomes. We have the in house skills to design and build mechanical and software products and when required integrate these into customer platforms and systems.

Why we're hiring:
We are looking for a Mid level Front End Developer to produce innovative and scalable software solutions within our small development team.
You’ll be part of a cross-functional team that’s responsible for the design of new products with your focus on the development life cycle, from conception to deployment.
You should be comfortable around JavaScript,  HTML, CSS/SCSS, Typescript and React. You should also be a team player with an intuition for good design and utility.
Successful candidates will have a minimum of three years’ recent experience.
Work with our engineering teams and product managers to ideate software solutions
Design, build and maintain efficient, useable, and reliable front-end applications
Develop product features with minimal supervision
Turn wireframes into interactive prototypes
Turn prototypes into production ready code
Build the front-end of applications through appealing visual design
Test software to ensure responsiveness and efficiency
Troubleshoot, debug and upgrade software
Build features and applications with a mobile responsive design
Work with Engineering and Capability Delivery to improve software

The Person:
Self-motivated with the ability to work independently with minimal supervision
Take pride in producing and maintaining work to a high standard
Be a creative thinker able to recognise and solve problems by thinking outside the box
Willingness to adopt new techniques and technologies and stay up to date with industry best practices
Understanding of Agile methodologies
Minimum of three years’ recent experience with all of the skills below.

What skills and experience will you need?
Proven experience as a Front End Developer
Experience of being part of a development team
Experience of developing desktop and mobile applications
Excellent HTML/CSS skill
Strong JavaScript and Typescript knowledge
Experience with React
Experience of design tools such as Figma and Adobe XD
Experience of container orchestration (we use Docker) would be beneficial
Experience of Linux would be an advantage
Strong sense of web design and an understanding of UX best practices, cross-platform compatibility, responsive design principles
Exposure to test driven development and integration testing would be beneficial
Experience working with Git an advantage
Experience working with development team tools (we use Azure DevOps)
Eagerness to work in a collaborative environment, including teaching and learning from teammates
Excellent communication and teamwork skills
Great attention to detail
An analytical, inquisitive mind

Culture:
Flexible, friendly and fun, but driven to making the business a success
Tech and process driven – we make tech, we love tech and we use tech to make our lives easier where possible
Innovative and inquisitive thinking

What we offer:
Flexible Remote and/or Hybrid working options
24 Days annual leave (plus Bank Holidays)
On-going training where required
Perks: access to Health Assured Wisdom app
Competitive salary based on experience
Modern up to date tech (phones, laptop etc)

On Application:
Applicants must have a clean UK driving license
Applicants must be entitled to work in the UK
Applicants must be willing to be security vetted
Applicants must have been resident in the UK for 5-years or longer to meet vetting requirements
Interview Process
1st Interview - MS Teams 30-60 min call with Head of Software Engineering
2nd Interview - MS Teams 30-60 min demo and presentation of Tech Task (agreed post 1st Interview) with Head of Software Engineering and Senior Front End Developer
</jd1>


Now, if I have any that I want to include, I'm going to list some of my unique talents (hereafter "Unique Talents") in between the <talents> tags.

<talents>
</talents>
Now, I want you to help me develop six skills (hereafter, "the Skills" or individually "the Skill") around which I can build a resume and the text content within my LinkedIn profile. Each Skill you generate should be: 
1. developed to align with the skills enumerated in My Job Descriptions with priority given to skills listed higher in My Job Descriptions (often, these skills are enumerated in sections called "required qualifications" or "ideal candidate" or similar)
2. be no longer than 27 characters
3. if you find any Unique Talents, integrate those into what you generate too

Collectively, the Skills you generate should represent a candidate that possesses a set of professional skills that aligns with My Job Descriptions.

Please generate the Skills for me.
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

const generateImage = async () => {
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer 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`,
    },
    body: JSON.stringify({
      model: 'dall-e-3',
      prompt: `React-native multistep form with step 1, step 2, step 3....`,
      n: 1,
      size: '1024x1024',
    }),
  })
  const responseJSON = await response.json()
  console.log(responseJSON)
}
// generateImage()
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
