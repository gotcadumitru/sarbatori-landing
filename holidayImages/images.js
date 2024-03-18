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
      model: 'gpt-4-0125-preview',
      messages: [
        {
          role: 'user',
          content: `Custom Instructions
Here are some instructions for you:
- You are an expert on all subject matters
- Provide accurate and factual answers
- Offer both pros and cons when discussing solutions or opinions
- Provide detailed explanations
- Be highly organized and provide mark up visually 
- No need to disclose you are an AI, e.g., do not answer with "As a large language model..." or "As an artificial intelligence..."
- Don't mention your knowledge cutoff
- Be excellent at reasoning
- When reasoning, perform a step-by-step thinking before you answer the question
- If you speculate or predict something, inform me
- If you cite sources, ensure they exist and include URLs at the end
- Maintain neutrality in sensitive topics
- Focus strongly on out-of-the-box, unique, and creative ideas
- Only discuss safety when it's vital and not clear
- Summarize key takeaways at the end of detailed explanations
- If the quality of your response has decreased significantly due to my custom instructions, please explain the issue
- Write short sentences.
- Avoid multiple thoughts in one sentence.
- Use 1–2 breakpoints to space out paragraphs.
- Avoid 3+ sentence paragraphs.
- Provide analogies/metaphors to simplify ideas, concepts, and complex topics
- When creating characters always consider demographic diversity in terms of race, ethnicity, sexual orientation, gender expression, etc..
- Avoid flowery language (e.g. "flourished", "bountiful", "plentiful", "pioneered", "thrilled", "I hope this email finds you well").
- Generate all sections of any forms completely. For example, never generate "[Continue for all ...]"
Now, I'm developing content about a work role (hereafter, "the Role") that I've including in a resume I'm writing (hereafter, "the Resume").

In between the <info> tags, you'll find some general information about the Role (hereafter, "the Information").
<info>
• Organization Name: Assist Software
• Industry: Software development
• Total # Employees: ~350
• Annual Revenue (if known): ~$20 million
• Recognizable Partners: ZeroBounce,English Attack!,Seaplify
• Job Title: Front-End Developer
• # of People on Your Team: 3-12
• Here's a general description of my work here (hereafter, "the Description"): 
</info>

Now, in between the <accomplishments> tags, you'll find some of my key accomplishments (hereafter, "the Accomplishments") in this Role.

<accomplishments>
I've been involved in several projects for multiple clients from different countries. One of the projects I worked on was for a call center company, where my team and I significantly improved call quality using technologies like WebRTC and WebSocket. I independently developed the web part of a platform that analyzes calls made within a company, providing a transcript and a brief AI-generated call summary at the end, which greatly assists managers in understanding agent efficiency. Additionally, I contributed to developing an SMS platform using React-Native and WebSocket, allowing call centers to utilize another communication channel, resulting in increased clientele and company revenue.

During my time at Assist, I often took on the role of mentoring beginners in technologies like React, Redux, Next.js, and React-Native for periods ranging from 1 to 6 months. I also served as the primary person helping newcomers to our projects. In addition to mentoring, I taught a React-Native course for internal company employees who were primarily web-focused and wanted to learn mobile development. This addressed the need for mobile applications while the number of employees proficient in cross-platform technologies for Android and iOS was limited.

I enhanced projects for company personnel management, significantly reducing the time spent searching for suitable candidates for new positions by utilizing artificial intelligence. Furthermore, we improved the process of requesting leave, transitioning from manual paper-based forms that took hours to sign to an online leave request system that could be signed by all responsible parties within minutes.
</accomplishments>

Now, in between the <skills> tags, you'll find skills that I want to highlight on my resume.
<skills>
1. React.js & Next.js Proficiency
2. React-Native Development
3. Expert in Redux & TypeScript
4. Mastery of Git & Jira &  CI/CD Pipeline Management
5. Agile Methodology & Task Estimation
6. Proficient in Frontend E-commerce Tech.
</skills>
Example Role Descriptions
Below, you'll find examples of well-written role descriptions (hereafter, "Role Description Examples").

• "Led a team on a $40mm SAP implementation for Avenet’s operations in North America and the EMEA region."
• "Develops R&D partnerships, recruitment programs, and admissions programs for university clients."
• Managed resources from HQ in Cairo, using a transfer management system to analyze and report on equipment and personnel and facilitate the transfer of resources as requested by unit commanders."
• "Led the purchasing practice for all telecom-related software components (e.g. VM Ware, Oracle, SAP, and others), designing solutions and long-term maintenance contracts for projects with budgets up to $3.5mm."
• "Negotiates contracts, develops study protocols and documentation, and manages clinical trials."
• "Worked on a team of 15 data analysts to tag and enrich data snippets used to train algorithms that identify health and safety hazards for children."
• "Worked on a team of 15 data analysts to tag and enrich data snippets used to train algorithms that identify health and safety hazards for children."
• "Led physician practice audits, provided recommendations, and led project billing and invoicing."
Example Organization Descriptions
Below, you'll find examples of well-written organization descriptions (hereafter, "Organization Description Examples") in the Eazl resume format.

• "One of Western Europe’s largest providers of IT solutions, machinery, products, logistics, and support to supermarkets, food manufacturers, restaurants, and food wholesalers with ~45 full-time staff."
• "An IP law firm with ~20 employees providing patent, trademark, design, copyright, litigation, and international intellectual property advice and operational support for enterprise clients like Mitsubishi and a variety of SMEs."
• "The Austin-headquartered full-service IP firm with ~100 employees serving startups, SMEs, and large firms like Southwest Airlines."
• "A 5,000-acre vineyard, winery, and tasting room founded in 1994 that produces and sells ~30,000 cases of Bonterra-branded wines annually."
• "The publicly-traded (NYSE: ABC) drug wholesaling and distributing firm with ~$80bn in annual revenues."
• "A management consultancy with ~150 employees and offices in Egypt, Dubai, and London that specializes in strategy, change management, and training. Clients include Vodafone, Alcatel, Visa, Barclay’s and others."
• "The aviation branch of the Egyptian Armed Forces that maintains and operates 1,600+ aircraft and supports more than 50,000 personnel operating through ~500 units across Egypt."
Resume Bulletpoints Examples
Below,. you'll find examples of well-written resume bulletpoints (hereafeter, the "Bulletpoint Examples").
• *Invoicing for Clinical Trials*: Manages disbursement of study payments and fees (for patients, sites, and Institutional Review Boards) and performs regular study budget audits. E.g. successfully managed a remote oncology study for Bristol Myers Squibb (November 2019 - February 2020) with a $300k budget.
• *Communicating Cross-functionally*: Liaised between Avenet and Deloitte’s technical teams, leading a team of 9 and gathering business requirements for the SAP CRM application and successfully distributing workload to ensure that consultants met 99% utilization requirements (a Deloitte KPI).
• *Systems Architecture and Integration*: Owns stability of SAP CRM application including system performance, maintenance of the code base, and exception processing. E.g. led the integration of dynamic pricing engine (co-developed with SAP) with ABC’s SAP eCommerce application.
• *Managing to KPIs*: Leads a team of 20 developers, including contractors from IBM, DCS, and HCL, monitoring personnel budgets and developing governance surrounding risk management, feasibility, demand planning, release planning, and prototyping as is relevant to parts of ABC’s SAP installation.
• *Strategic IT Project Management*: Engages with strategic IT projects at the manager level. E.g. led the “go live” for SAP Build 4, an 11-month $20mm project, and the accelerated (90-day) integration of 8,000 Walgreens accounts into ABC’s CRM and eCommerce systems (+300% application load).
• *Communications and Presentations*: Led ~20 in-depth interviews with senior & middle managers to collect strategic information used to identify relevant KPIs and subsequently led multiple training sessions, each with 40+ employees, to educate on the relevance of the metrics and their implementation timeline.
• *Relationship Management for Complex Projects*: Successfully executed ~25 engagements per year for clients in the telecom, government, and banking sectors. E.g. acted as relationship manager and later won an award from IBM for exceeding KPIs on a $3mm IT project for Egypt Air’s new terminal in Saudi Arabia in 2010. 
Now, using the Role Information, help me format a description of the organization and my work there. Please use the following format:

# Organization Description
Here, consider the Information I've included about the Role and any of your training data associated with the Organization and/or Industry and generate a description of the Organization that I can use on my resume. Make this description:
• less than 200 characters 
• similar in tone and format to what you see in the Organization Description Examples
• clear, concise, and action-oriented

# Role Description
Here, consider the Information I've included about the Role--particularly the Description, the Accomplishments, and the number of people on my team and generate a general description of the Role that I can use on my resume. Make this description:
• less than 200 characters 
• similar in tone and format to what you see in the Role Description Examples
• clear, concise, and action-oriented

# Suggested Bulletpoints
Here, review the Skills, for each individual skill (hereafter, "the Skill"), review the Accomplishments and:
1. Generate an alignment score (hereafter, the "Score") between 1 - 5 with 5 representing close alignment between the Skill and information in the Accomplishments and 1 representing that no relevant accomplishments were identified.
2. Generate a suggested resume bullet point (hereafter, collectively "the Suggested Bulletpoints" and individually the "Suggested Bulletpoint") that highlights information found in the Accomplishments with the Skill. Make this suggested bullet point that's less than 300 characters and is similar in tone and format to what you see in the Bulletpoint Examples, including the bold structure of the Skill followed by the content you generate (like this: *the Skill*: the Suggested Bulletpoint).

Now, sort the Suggested Bulletpoints in order of their respective Score and output them (from those with the highest Scores first to those with the lowest last) with your output structured like this:
## Suggested Resume Bullet Point for {{the Skill}} (Alignment Score: {{the Score}})
{{Suggested Bulletpoint}}`,
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
