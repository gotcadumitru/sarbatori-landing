import { MainDescription } from '@/features/MainDescription'
import { OurAdvantages } from '@/features/OurAdvantages'
import { Statistics } from '@/features/Statistics'
import { WhatOurUsersThink } from '@/features/WhatOurUsersThink'
import { WhyYouNeedUs } from '@/features/WhyYouNeedUs'
import styles from './page.module.css'

const Home = () => (
  <main className={styles.main}>
    <MainDescription />
    <Statistics />
    <OurAdvantages />
    <WhyYouNeedUs />
    <WhatOurUsersThink />
  </main>
)
export default Home
