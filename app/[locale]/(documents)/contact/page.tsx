import { inter, roboto } from '@/app/fonts'
import ArrowIcon from '@/shared/assets/icons/ArrowIcon'
import MessageIcon from '@/shared/assets/icons/MessageIcon'
import PhoneIcon from '@/shared/assets/icons/PhoneIcon'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import classes from './contact.module.css'

const Feedback = () => {
  const t = useTranslations('contact')

  return (
    <div className={classes.contact}>
      <h1 className={classNames(inter, classes.header)}>{t('header')}</h1>
      <p className={classNames(roboto, classes.description)}>{t('description')}</p>

      <div className={classes.contactInfoContainer}>
        <div className={classes.contactItem}>
          <PhoneIcon />
          <a href='tel: +40790386718'>40-79-038-6718</a>
        </div>
        <div className={classes.contactItem}>
          <MessageIcon />
          <a href='mailto: dum.gotca@gmail.com'>dum.gotca@gmail.com</a>
        </div>
        <div className={classes.contactItem}>
          <ArrowIcon />
          <a
            target='_blank'
            href='https://www.google.com/maps/place/Hirbovat/data=!4m2!3m1!1s0x40c908eba28686a7:0x7f1c8da434890df6?sa=X&ved=2ahUKEwiyk8vyuKWDAxU0_7sIHXCeDb0Q8gF6BAgKEAA'
            rel='noreferrer'
          >
            Hîrbovăţ, raionul Anenii Noi
          </a>
        </div>
      </div>
    </div>
  )
}
export default Feedback
