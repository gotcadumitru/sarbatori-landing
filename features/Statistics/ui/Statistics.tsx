import AiOutlineFieldTime from '@/shared/assets/icons/AiOutlineFieldTime'
import MdAttach from '@/shared/assets/icons/MdAttach'
import RiFolderHistoryLine from '@/shared/assets/icons/RiFolderHistoryLine'
import GaragePageImage from '@/shared/assets/images/GaragePage.png'
import classNames from 'classnames'
import Image from 'next/image'
import { FC } from 'react'
import classes from '../styles/statistics.module.css'

const whyYouNeedUsAdvantages = [
  {
    title: 'Economii Reale',
    Icon: MdAttach,
    description:
      'Colaborarea cu noi înseamnă economii reale de bani. Oferim soluții și opțiuni care pot reduce costurile pentru clienții noștri. Astfel, ei economisesc bani, în timp ce primesc servicii de calitate.',
  },
  {
    title: 'Eficiență și Economii de Timp',
    Icon: AiOutlineFieldTime,
    description:
      'Produsele și serviciile noastre sunt concepute pentru a crește eficiența și pentru a economisi timp prețios. Clienții noștri pot să-și dedice timpul altor aspecte importante ale vieții sau afacerii lor.',
  },
  {
    title: 'Acces la Rapoarte',
    Icon: RiFolderHistoryLine,
    description:
      'Cu serviciile noastre, veți avea acces la rapoarte detaliate legate de automobilul dvs. Aceste rapoarte conțin informații despre consumul de carburant, cheltuieli, sfaturi pentru întreținere și multe altele. Prin intermediul acestor rapoarte, puteți lua decizii mai informate, economisi bani prin gestionarea eficientă a cheltuielilor și menține vehiculul în cea mai bună formă posibilă.',
  },
]

export const Statistics: FC = () => (
  <section className={classNames(classes.whyYouNeedUs, 'container')}>
    <h2 className={classes.title}>De ce ai nevoie de CarMaster</h2>
    <div className={classes.container}>
      <div>
        {whyYouNeedUsAdvantages.map(({ Icon, ...advantage }) => (
          <div key={advantage.title}>
            <div className={classes.itemHeader}>
              <Icon className={classes.itemIcon} />
              <h3 className={classes.itemTitle}>{advantage.title}</h3>
            </div>
            <p className={classes.description}>{advantage.description}</p>
          </div>
        ))}
      </div>
      <Image className={classes.image} height={600} src={GaragePageImage} alt='Garage Page' />
    </div>
  </section>
)
