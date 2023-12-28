import { inter, roboto } from '@/app/fonts'
import Button, { ButtonCategoryType } from '@/shared/ui/Button'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import classes from './notFound.module.css'

const NotFound = () => {
  const t = useTranslations('notFount')
  return (
    <div className={classNames('container', classes.notFoundPage)}>
      <h1 className={classNames(classes.title, inter)}>{t('title')}</h1>
      <p className={classNames(classes.description, roboto)}>{t('description')}</p>
      <Button category={ButtonCategoryType.LINK} href='/'>
        {t('return')}
      </Button>
    </div>
  )
}
export default NotFound
