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
      Authorization: `Bearer `,
    },
    body: JSON.stringify({
      model: 'gpt-4-0125-preview',
      messages: [
        {
          role: 'user',
          content: `
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
In between the <description> tags below, you'll find a job description (hereafter, the "Description").

<description>
Abtrace is a health tech company based in London, with a team of doctors, researchers, developers and data scientists that bring together software engineering, machine learning expertise and medical experience to build clinical algorithms for primary care clinicians.


The team is dedicated to creating digital health software to deliver Population Health interventions individualized to patients. This involves continuous scanning the entire health record of a patient to detect signals of deterioration, early onset of new disease and opportunities for preventative interventions working with over 250 primary care practices covering 2.5 million patients.


About the role:

We are looking for a Front End developer (Mid/Senior) to join our team who works well in a fast moving team and communicates effectively with non-technical team members.


The core duty of the position will be developing the user-facing elements of our applications. These include web applications as well as an Electron-based desktop application. The ideal candidate will be proficient in modern web development technologies (Typescript, React, Redux, HTML5 and CSS) and have experience with Node.js.


Responsibilities:

Development of an Electron-based application using React, Javascript/Typescript and Node.js
Work with a small, close knit, diverse multi-disciplinary team of developers, data scientists and doctors


Required skills:

Proficiency in React and Javascript/Typescript


Company Benefits

Private Pension
Share Options scheme
Generous sick and maternity/paternity leave
Flexi working & possibility for remote working
Company's office in Paddington - easy commute and comfortable surroundings
Motivated, highly functioning, multi-disciplinary team
Stellar coffee ☕


Interview Process

Video call with tech team
Video call with founders and 2nd tech review
Offer!

</description>
In between the <resume> tags, you'll find a resume (hereafter, "the Resume") submitted by a candidate applying for the job described in the Description.

<resume>
 DUMITRU GOTCA dum.gotca@gmail.com | LinkedIn® Profile | +40 790 386 718 (RO)
   EXECUTIVE SUMMARY
A dynamic Front-End and Mobile Developer with 4 years of expertise in React.js, Next.js, and React-Native. Proven success in enhancing web technologies, team mentorship, and project innovation. Drives quality and efficiency in software development.
FUNCTIONAL EXPERTISE
● React.js, Next.js Proficiency
● React-Native Development
● Expert in Redux & TypeScript
FUNCTIONAL EXPERTISE DEMONSTRATED
● Git, Jira, CI/CD Pipeline
● Agile Methodology
● Unit, E2E, Cypress, RTL, Enzyme
ASSIST SOFTWARE
March 2021 – Current
A software development firm with more than 350 employees, ~$20 million in revenues, and clients/partners like ZeroBounce , English Attack!, and Seaplify from USA, Germany, Australia, Romania, France and all over the world.
Front-End Developer
Enhancing client projects through advanced web technologies and team mentorship.
● React.js & Next.js Proficiency: Implemented CI/CD pipelines using Github/Bamboo for
testing/building/deploying. On the front-end side we enhanced the quality of calls using technologies like WebRTC and WebSocket. Our team managed to solve most of the significant issues reported, motivating several clients who were considering leaving to continue using our client's services. Moreover, many clients decided to increase the number of licenses they purchased. We defined what a modern web application should look like, including requirements such as: A minimum of 80% unit test coverage. Mandatory Storybook, Visual tests, Typescript, Feature Sliced Design architecture for every new project. UI component library used across all projects, and many other aspects that dramatically improved code quality and made the client's project ecosystem much easier to maintain. Additionally, the onboarding time for new developers joining the team decreased by 2.5 times since most projects followed a single standard.
● React-Native: Developed a Call & SMS communication platform with React-Native, broadening client communication channels and boosting revenue. We implemented and maintained CI/CD pipelines for the React Native application using the Bitrise platform. This has effectively boosted the productivity of developers and QA engineers since they no longer had to manually run builds and tests. Moreover, it has simplified and streamlined the process through which the application reaches the App Store / Google Play Market. Another React Native experience involved updating the version from 0.61.5 to the latest available version, 0.73.x. Following the update, task completion became faster, and the application
 
 itself saw a speed increase of approximately 32% due to the new technologies introduced in the latest versions of React Native.
RELEVANT PROJECTS
HoliDays (sarbatori.net): A personal project developed with Next.js, SEO optimized and added to Google Search and Google AdSense. The project contains more than 6200 holidays and helps people be more informed about the holidays of each day.
Reportify: A cross-platform project that supports the web part with React, and iOS and Android with React-Native. With a back-end developed by me in express.js and a MongoDB database. The project helps in reporting problems encountered in society and saves time for citizens and authorities in solving these issues.
iMedic: Developed with technologies such as React, Java Spring Boot, PostgreSQL, Firebase, it helps doctors and patients communicate through chat with messages and through audio/video calls implemented with WebSocket and WebRTC.
EDUCATION
Bachelor in Computer Science, Stefan cel Mare University
A top university in Romania, where I studied Database Fundamentals, Web Development, Mobile, Java, C++, C, Algorithms, microcontroller programming, and a variety of technologies related to IT.
MENTORING
Frequently assumed the role of mentor. This involved providing guidance and support over periods ranging from 1 to 3 months. I offered tailored assistance, sharing insights, and facilitating their integration into the team and industry. My approach emphasized fostering a supportive learning environment, ensuring mentees gained practical skills and confidence in their roles. This experience honed my ability to communicate complex concepts in accessible ways and adapt my mentoring style to individual needs, contributing to the overall success of the team.
CERTIFICATIONS
CIW JavaScript Specialist (1D0-735) ↗: This certification validates expertise in utilizing JavaScript to enhance website interactivity and functionality. Demonstrating proficiency in essential concepts such as programming fundamentals, DOM manipulation, and event handling, this certification signifies a comprehensive understanding of JavaScript's role in web development and its application to create dynamic, responsive, and user-friendly web solutions.
     
 OTHER RELEVANT INFORMATION
Additional Languages: Romanian (native fluency), Russian (native fluency)
Technology: HTML/CSS, JavaScript, Typescript, React.js, React-Native, Next.js, Redux Toolkit, JavaScript, Webpack, Eslint, Git, Bitbucket, Github Actions, CI/CD pipelines, Node.js, Express.js, Java Spring Boot, MongoDB, PostgreSQL, Firebase, Firestore, Websocket, WebRTC, React Testing Library, Enzyme, Eslint, Prettier, SEO, Hooks
Technical Skills: Software, software, software, Excel (level)
Awards:
● 1 place | FIICode- Student Contest: Web/Mobile/Back-End Reportify project
● 1 place | FIICode - Student Contest: Web/Back-End iMedic project
● 1 place | Interactive Digital Media Student Contest
● Best use of Google Cloud | UniHack Student Contest
● 3 place | Sibiu Innovative Days:
Personal Website: dumitru-gotca.com Github: gotcadumitru
  
</resume>
Resume Screen Form
Next, consider the Resume and Description and generate scores for the following elements (hereafter, collectively "the Elements" or individually, "Element"), enabling each Element to be scored with 20 points maximum:
1. Skills Match: Here, give a higher score if the content of the Resume more-closely matches the skills required for the job as described in the Description. Award more points if the Resume demonstrates match with skills listed higher in the hierarchy of skills required for the job in the Description. Later, this score will be referred to as the "Skills Score".
2. Domain / Industry Knowledge: Here, generate a score that combines (a) up to 10 points max if the Resume describes previous work experience in the functional job area described in the Description and (b) up to 10 points max if the Resume describes previous work experience that's in the same industry as the work described in the Description. Later, this score will be referred to as the "Domain Score".
3. Tenure: Here, give a higher score if the Resume describes previous work experiences where the candidate worked at the same position(s) for 2+ years. Use today's date to help you calculate the length of time someone was or has been at a position you see in the Resume if you need to. Later, this score will be referred to as the "Tenure Score".
4. Professional Network: Here use your training data to estimate whether or not the Resume describes work experiences that would imply that the candidate has a professional network that would meaningfully enable them to be successful in the role described in the Description, then award more points based on this. Later, this score will be referred to as the "Network Score".
5. Education: Here, award more points if the Resume describes educational achievements that meet or exceed what is described as needed by the Description. Later, this score will be referred to as the "Education Score".

Tally the total of the the Skills Score, Domain Score, Tenure Score, Network Score, and Education Score generate a Total Score (hereafter, the "Total Score"). 

Now, I want you to consider the Resume and Description and fill out the following form:

# Alignment Score: {{Total Score}}
## Overview
Here I generate a three-sentence overview of how well-aligned the candidate appears to be for the job described in the Description based on their Resume. In the first sentence, give a brief overview that describes the Total Score. In the second sentence, generate a sentence that describes which Elements made the biggest impact on adding to the Total Score. In the third sentence, generate a sentence that describes which Elements reduced their Total Score.

## Analysis

### Here, generate a title that's less than 40 characters that summarizes the analysis that led you to the Skills Score
Here, write three sentences summarizing the analysis that led you to the Skills Score you estimated above. In the first sentence, enumerate the Skills Score you estimated. In the second sentence, describe the elements of your analysis that led to increases in the Skills Score. In the third sentence, describe the elements of your analysis that led to decreases in the Skills Score you estimated.

### Here, generate a title that's less than 40 characters that summarizes the analysis that led you to the Domain Score
Here, write three sentences summarizing the analysis that led you to the Domain Score you estimated above. In the first sentence, enumerate the Domain Score you estimated. In the second sentence, describe the elements of your analysis that led to increases in the Domain Score. In the third sentence, describe the elements of your analysis that led to decreases in the Domain Score you estimated.

### Here, generate a title that's less than 40 characters that summarizes the analysis that led you to the Tenure Score
Here, write three sentences summarizing the analysis that led you to the Tenure Score you estimated above. In the first sentence, enumerate the Tenure Score you estimated. In the second sentence, describe the elements of your analysis that led to increases in the Tenure Score. In the third sentence, describe the elements of your analysis that led to decreases in the Tenure Score you estimated.

### Here, generate a title that's less than 40 characters that summarizes the analysis that led you to the Network Score
Here, write three sentences summarizing the analysis that led you to the Network Score you estimated above. In the first sentence, enumerate the Network Score you estimated. In the second sentence, describe the elements of your analysis that led to increases in the Network Score. In the third sentence, describe the elements of your analysis that led to decreases in the Network Score you estimated.

### Here, generate a title that's less than 40 characters that summarizes the analysis that led you to the Education Score
Here, write three sentences summarizing the analysis that led you to the Education Score you estimated above. In the first sentence, enumerate the Education Score you estimated. In the second sentence, describe the elements of your analysis that led to increases in the Education Score. In the third sentence, describe the elements of your analysis that led to decreases in the Education Score you estimated.
`
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
  debugger
  let responseContent = responseJSON.choices[0].message.content
  console.log(responseContent)
  fs.writeFileSync('./work.txt', responseContent)
}
// generateSomething()

const generateImage = async () => {
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer `,
    },
    body: JSON.stringify({
      model: 'dall-e-3',
      prompt: `Napoleon Bonaparte eating cake napoleon`,
      n: 1,
      size: '1024x1024',
    }),
  })
  const responseJSON = await response.json()
  console.log(responseJSON)
}
// generateImage()
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
