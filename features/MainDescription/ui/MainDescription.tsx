import AppStore from '@/shared/assets/images/AppStore.webp'
import GaragePageImage from '@/shared/assets/images/GaragePage.png'
import GooglePlay from '@/shared/assets/images/GooglePlay.webp'
import BackgroundBottomWave from '@/shared/assets/lottie/BackgroundBottomWave/BackgroundBottomWave'
import BackgroundLines from '@/shared/assets/lottie/BackgroundLines/BackgroundLines'
import classNames from 'classnames'
import Image from 'next/image'
import { FC } from 'react'
import classes from '../styles/mainDescription.module.css'

const mainAdvantages = [
  {
    title: 'Urmărește Expirarea Documentelor',
    description:
      'Fii mereu la curent cu termenele de expirare ale documentelor, astfel încât să eviți orice neplăceri.',
  },
  {
    title: 'Planifică și Monitorizează Mentenanța',
    description:
      'Gestionează întreținerea vehiculelor tale în mod organizat și economisește bani prin revizii regulate.',
  },
  {
    title: 'Urmărește Daunele și Reparațiile',
    description: 'Observă orice daune și urmărește progresul reparațiilor în timp real.',
  },
  {
    title: 'Gestionează Cheltuielile',
    description:
      'Ține sub control toate cheltuielile flotei pentru a economisi resursele companiei.',
  },
  {
    title: 'Comunicare Eficientă cu Șoferii',
    description: 'Simplifică comunicarea cu șoferii, pentru a asigura o colaborare eficientă.',
  },
]

export const MainDescription: FC = () => (
  <section className={classes.mainDescriptionBackground}>
    <BackgroundBottomWave />
    <BackgroundLines />
    <div className={classNames(classes.mainDescription, 'container')}>
      <div className={classes.container}>
        <Image
          className={classes.phoneImage}
          height={600}
          src={GaragePageImage}
          alt='Garage Page'
        />
        <div>
          <h1 className={classes.heading}>
            Gestionarea Simplă și Eficientă a Vehiculelor Cu Asistentul Tău Auto Digital
          </h1>
          <h2 className={classes.description}>
            Cu ajutorul asistentului nostru auto digital, poți să-ți gestionezi și să-ți rezolvi
            toate nevoile legate de flotă sau vehiculele personale într-un mod facil și eficient.
          </h2>
          <ul>
            {mainAdvantages.map((advantage) => (
              <li className={classes.advantages} key={advantage.title}>
                <strong>{advantage.title}: </strong>
                {advantage.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
)
