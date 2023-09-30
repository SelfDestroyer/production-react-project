import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'

interface INotFoundPageProps {
  className?: string
}

export const NotFoundPage: FC<INotFoundPageProps> = (props): JSX.Element => {
  const { className = '' } = props
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.NotFoundPage, {}, [cls[className]])}>
      <h1 className={classNames(cls.NotFoundPageTitle)}>{t('Page Not Found')}</h1>
    </div>
  )
}
