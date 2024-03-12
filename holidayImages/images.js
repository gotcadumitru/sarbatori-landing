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
Peaple Talent has partnered with a dynamic and rapidly growing retail/ecommerce company based in the heart of London, our client is looking to recruit a talented Front End Developer with experience of either Big Commerce or shopify to join their busy technology team and play a crucial role in the development and maintenance of their web applications.


If you are a passionate Developer with experience in ecommerce technologies such as shopify or BigCommerce, React, TypeScript, and Javascript, HTML, CSS and are eager to contribute to the growth of a dynamic retail/ecommerce company in London, we encourage you to apply and be a key player in shaping the future of online shopping experiences.


Responsibilities:
Collaborate with cross-functional teams to design, develop, and implement robust and scalable web applications for ecommerce platforms.
Work on both the frontend and backend development, ensuring a seamless integration between the user interface and server-side logic.
Implement responsive and user-friendly interfaces using React, TypeScript, and JavaScript, HTML, CSS on the frontend.
Participate in code reviews, identify areas for improvement, and adhere to coding standards to maintain code quality.
Collaborate with UX/UI designers to ensure a visually appealing and intuitive user experience.
Troubleshoot and debug issues, perform testing, and provide timely resolutions to reported problems.
Stay up-to-date with industry trends and advancements, and actively contribute ideas to enhance the overall development process.
Requirements:
Proven experience as a Front End Developer or similar role in a retail/ecommerce environment.
Strong Understanding of Python and Flask for backend development.
Solid experience in frontend development using React, TypeScript, and JavaScript, HTML, CSS.
Knowledge of modern web development practices and technologies.
Experience with version control systems, preferably Git.
Previous experience working in an ecommerce or retail-focused company.
Knowledge of CI/CD pipelines and automated testing practices.
Excellent problem-solving and communication skills.
Ability to work collaboratively in a fast-paced environment.
</jd1>

<jd2>
Frontend Developer – Tech for Good 🚀



💰 £60,000 plus bonus up to 10%
🏡 Hybrid working – 2 days per week in Leeds
💻 Tech Stack – Vue.js or React.js, TypeScript, Node.js and React Native – flexibility on whether you
have commercial experience in each tech stack as there’s a great opportunity to learn new technologies!


Are you looking to progress further in your career and want to join a Tech for Good business who are building platforms that are having a positive impact on people’s lives?



We’re working with an exciting business in Leeds who are currently building a new platform and they are looking for passionate and committed Frontend Developers to join the team.


We’re partnered with the business over the last few years and have been part of their journey and helped hire a number of developers into the team who all share the same feedback – great place to work and they have a fantastic learning and development process in place to help you progress further in your career!


Their product is making a real difference and due to the success of their current product, they are now building a new platform to continue on with their journey of success and positive impact.


The Frontend team currently develop within Vue.js, but they have recently introduced React.js and React Native projects, so they are flexible on framework experience so long as your happy develop with either framework – it’s also a great opportunity to develop your skills in new technologies!


What’s in it for you ⭐


Opportunity to further develop in your career – they offer a fantastic L&D programme where you can learn new technologies or develop your current skill set
Work on exciting new projects that are having a positive impact
Join a passionate team who love what they do and the culture that the business has created – CTO remains hands-on and is passionate about developing people’s careers
£50,000 plus a bonus up to 10%
Hybrid working – based in Leeds and believe that face-to-face team interaction is a great way to learn and develop


This is a great opportunity to join a business and a team who are renowned for what they do and if you want to take the next step in your career – this roles for you!


If you want to find out more, reach out to me on charlotte@burnssheehan.co.uk
</jd2>

<jd3>
Pets at Home, the UK's leading pet care business, is seeking a talented Senior Frontend Developer to join our pawsome in-house team. We are currently undergoing an exhilarating digital transformation, and we need passionate developers like you to help us reinvent the digital experiences of pets and their owners.


About Pets at Home: At Pets at Home, we're dedicated to making life easier for pets and their owners. With a modern tech stack and cutting-edge platforms like Optimizely CMS and other e-commerce tools, we're building custom front-end applications to deliver exceptional user experiences. This is your chance to unleash your creativity and contribute to something truly special!


Responsibilities: As a Senior Frontend Developer, you will be a crucial member of our cross-functional product teams. Your role will involve guiding front-end decisions and leveraging your technical expertise to enhance our customer-facing platform. 



Your responsibilities will include:
Developing applications using TypeScript and React (ideally Next.js)
Creating semantic HTML and SCSS modules while adhering to accessible web standards
Utilizing automated testing tools such as Jest and React Testing Library
Conducting end-to-end testing using tools like Playwright or Cypress
Working within an agile environment following the Scrum methodology
Setting high standards for code quality and maintaining thorough documentation
Applying your problem-solving skills to enhance our products and improve user experiences
Collaborating with the front-end team to create delightful interfaces and scalable architecture
Mentoring fellow developers and engaging in pair programming
Collaborating with stakeholders and product managers to shape project requirements
Demonstrating excellent communication skills to effectively convey ideas and solutions
Remaining curious and staying updated on the latest web development technologies
Knowledge of Azure DevOps and CI/CD is a plus, but not essential


Requirements: To be successful in this role, you should possess the following skills and qualifications:
Proven experience developing with TypeScript and React (Next.js preferred)
Proficiency in SCSS modules, semantic HTML, and knowledge of accessible web standards
Strong automated testing skills with Jest and React Testing Library
Familiarity with end-to-end testing using Playwright or Cypress
Agile mindset and experience working within a Scrum framework
Commitment to high coding standards and thorough documentation
Passion for problem-solving and a love for pets
Sound knowledge of front-end architecture and user experience principles
Experience mentoring team members and working collaboratively
Excellent communication skills and ability to engage with stakeholders
Curiosity and eagerness to learn and explore new technologies
Familiarity with Azure DevOps and CI/CD is a plus


Join our Pack: This is a unique opportunity to be part of our talented team and make pet care history. If you're ready to wag your tail with excitement and create something truly extraordinary, we invite you to apply now. Embark on an adventure that will leave a lasting paw print in the digital world!


Only shortlisted candidates will be contacted.
</jd3>

Now, if I have any that I want to include, I'm going to list some of my unique talents (hereafter "Unique Talents") in between the <talents> tags.

<talents>
Proficient in React.js, Next.js, React-Native, Redux, and Typescript, Git, jira, agile, task estimation, CI/CD pipelines for web and mobile
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
