/* eslint-disable quotes */
import Popup from '@/shared/ui/Popup'
import classNames from 'classnames'
import { FC } from 'react'
import classes from '../styles/whatOurUsersThink.module.css'

const feedbacks = [
  {
    name: 'John Smith',
    message:
      "I had the pleasure of working with CarMaster on a critical software project. Their team's expertise and commitment to quality were truly exceptional. They delivered beyond our expectations, and I can't recommend CarMaster highly enough.",
  },
  {
    name: 'Sarah Johnson',
    message:
      'Working with CarMaster was a fantastic experience. They were responsive, professional, and delivered a top-notch product on time and within budget. I look forward to future collaborations with CarMaster.',
  },
  {
    name: 'Ana Maria',
    message:
      'Aplicația CarMaster mi-a ușurat viața în ceea ce privește gestionarea mașinii mele. Am mereu la îndemână istoricul de service, pot programa și urmări reviziile și pot gestiona toate documentele importante. Este o unealtă indispensabilă pentru orice șofer.',
  },
  {
    name: 'Andrei Popescu',
    message:
      'CarMaster a transformat felul în care îmi îngrijesc mașina. Cu notificările pentru revizii și schimburile de ulei, am avut întotdeauna grijă de mașina mea la timp. De asemenea, funcția de gestionare a documentelor m-a ajutat să am toate actele importante la îndemână',
  },
  {
    name: 'Elena Dumitrescu',
    message:
      'Sunt foarte impresionată de intuitivitatea și ușurința de utilizare a aplicației CarMaster. Am introdus cu ușurință toate detaliile mașinii mele, iar acum pot monitoriza toate aspectele legate de întreținere și documente într-un singur loc. Recomand cu căldură!',
  },
  {
    name: 'Marius Ionescu',
    message:
      'CarMaster a devenit asistentul meu personal pentru mașină. Mă ajută să urmăresc istoricul service-urilor, facturile și asigurările. Este o soluție excelentă pentru oricine dorește să aibă control total asupra mașinii lor.',
  },
  {
    name: 'Alexandra Costache',
    message:
      'Am testat mai multe aplicații de management auto, dar CarMaster este de departe cea mai completă și ușor de utilizat. Îmi place modul în care pot ține evidența tuturor aspectelor legate de mașină, inclusiv notificări pentru întreținere.',
  },
  {
    name: 'Paul Gheorghiu',
    message:
      'CarMaster este exact ceea ce am căutat pentru a gestiona mașina mea. Am încredere totală în aplicație pentru a-mi reaminti de revizii, schimburi de ulei și alte sarcini de întreținere. De asemenea, funcția de gestionare a cheltuielilor este foarte utilă pentru a ține sub control costurile legate de mașină. Cu CarMaster, am simțit că mașina mea este întotdeauna în cele mai bune mâini. Este un instrument indispensabil pentru orice șofer atent la detaliile legate de mașina sa.',
  },
]
export const WhatOurUsersThink: FC = () => (
  <section className={classNames(classes.whatOurUsersThink, 'container')}>
    <h2 className={classes.title}>Ce spun clienții noștri?</h2>
    <div className={classes.feedbackList}>
      {feedbacks.map((feedback) => {
        return (
          <div className={classes.feedbackItem} key={feedback.message}>
            <div className={classes.quotes}>“</div>
            <div>
              <Popup
                isWithCopyButton
                referenceElement={<div className={classes.message}>{feedback.message}</div>}
                popupElement={<div className={classes.message}>{feedback.message}</div>}
              />
              <div className={classes.author}>{feedback.name}</div>
            </div>
          </div>
        )
      })}
    </div>
  </section>
)
