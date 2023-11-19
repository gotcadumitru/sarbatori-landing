import AccordionList, { AccordionListItem } from '@/shared/ui/AccordionList'
import PanelPageImage from '@/shared/assets/images/PanelPage.png'
import classNames from 'classnames'
import Image from 'next/image'
import { FC } from 'react'
import classes from '../styles/ourAdvantages.module.css'

const advantages: AccordionListItem[] = [
  {
    title: 'Suport pentru Diverse Formate de Fișiere',
    description:
      'Aplicația noastră acceptă o gamă largă de formate de fișiere, inclusiv video, imagini, PDF-uri și multe altele, permițând utilizatorilor să raporteze probleme folosind media cea mai potrivită.',
  },
  {
    title: 'Notificări Personalizate',
    description:
      'Utilizatorii pot configura notificări personalizate pentru a fi la curent cu stadiul rapoartelor lor, asigurându-se că fiecare problemă este gestionată eficient.',
  },
  {
    title: 'Asistență prin Email și Telefon',
    description:
      'Oferim asistență dedicată prin email și telefon pentru a ajuta utilizatorii cu întrebări sau probleme legate de aplicație. Suntem mereu aici pentru a oferi sprijin.',
  },
  {
    title: 'Gratuitate Absolută',
    description:
      'Aplicația noastră este disponibilă gratuit pentru toți utilizatorii. Nu există costuri de achiziție sau abonament, facilitând accesul la această soluție utilă.',
  },
  {
    title: 'Generare Rapoarte',
    description:
      'Utilizatorii pot genera rapoarte detaliate care să cuprindă toate informațiile esențiale. Aceste rapoarte pot fi partajate sau tipărite pentru a documenta problemele în mod eficient.',
  },
  {
    title: 'Interfață User-Friendly',
    description:
      'Aplicația noastră se evidențiază printr-o interfață prietenoasă și ușor de utilizat, ceea ce înseamnă că utilizatorii se pot orienta rapid în raportarea și urmărirea problemelor.',
  },
  {
    title: 'Acuratețe GPS',
    description:
      'Utilizatorii pot atașa informații de localizare precisă la rapoartele lor, ajutând la identificarea și rezolvarea rapidă a problemelor.',
  },
  {
    title: 'Stocare Securizată a Datelor',
    description:
      'Ne angajăm să asigurăm securitatea datelor utilizatorilor. Informațiile lor sunt stocate și gestionate în mod sigur.',
  },
  {
    title: 'Integrare cu Platforme Externe',
    description:
      'Aplicația noastră poate fi integrată cu alte platforme sau sisteme, facilitând gestionarea și urmărirea problemelor pe mai multe canale.',
  },
  {
    title: 'Rapoarte Personalizate',
    description:
      'Utilizatorii au posibilitatea de a crea rapoarte personalizate pentru a se concentra pe informațiile relevante pentru afacerea sau organizația lor.',
  },
]

export const OurAdvantages: FC = () => (
  <section className={classNames(classes.ourAdvantages, 'container')}>
    <h2 className={classes.title}>Ce beneficiezi din aplicație</h2>
    <div className={classes.container}>
      <Image className={classes.image} height={600} src={PanelPageImage} alt='Panel Page' />
      <AccordionList items={advantages} />
    </div>
  </section>
)
