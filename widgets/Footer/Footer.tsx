import { ContactUs } from '@/features/contactUs/ui/ContactUs'
import MainBottomWave from '@/shared/assets/icons/MainBottomWave'
import classNames from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import classes from './Footer.module.css'
import { FooterColumn } from './FooterColumn'

interface FooterProps {
  className?: string
}

const urls = [
  {
    text: 'Termeni și condiții',
    href: '/termeni-si-conditii',
  },
  {
    text: 'Politica de confidențialitate',
    href: '/politica-de-confidentialitate',
  },
  {
    text: 'Cookies',
    href: '/cookies',
  },
  {
    text: 'Documentatie',
    href: '/documentatie',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
]
export const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <div className={classNames(classes.footer, className)}>
      <div className={classNames(classes.footerContainer, 'container')}>
        <FooterColumn title='CarMaster'>
          Cu pricepere și atenție, ai posibilitatea să coordonezi și să satisfaci toate cerințele
          legate de gestionarea flotei pe care o supraveghezi, indiferent dacă acestea se referă la
          vehiculele din companie sau cele personale.
        </FooterColumn>
        <FooterColumn title='Contact'>
          <p>
            Te rugăm să ne contactezi în intervalul menționat pentru orice nevoie sau întrebare.
            Echipa noastră este gata să te ajute.
          </p>
          <p>
            <strong>Program de lucru: </strong>
            Luni - Vineri: 10:00 - 18:00
          </p>
          <p>
            <strong>Adresă: </strong>
            Cluj-Napoca, România
          </p>
        </FooterColumn>
        <FooterColumn title='Pagini utile'>
          <ul>
            {urls.map((url) => (
              <li key={url.href}>
                <Link className={classes.footerUrl} href={url.href}>
                  {url.text}
                </Link>
              </li>
            ))}
          </ul>
        </FooterColumn>
        <FooterColumn title='Înscrie-te la newsletter'>
          Dorești să fii mereu informat cu privire la cele mai recente dezvoltări și noutăți legate
          de aplicațiile noastre CarMaster? Lasă-ne adresa ta de email, iar noi ne vom asigura că
          vei fi mereu la curent cu cele mai proaspete informații, actualizări și oferte exclusive.
          <ContactUs />
        </FooterColumn>
      </div>
      <div className='container'>
        <div className={classes.copyright}>Copyright © CarMaster. All Rights Reserved.</div>
      </div>
    </div>
  )
}
