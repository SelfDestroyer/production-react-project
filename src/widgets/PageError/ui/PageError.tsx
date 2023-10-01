import { classNames } from 'shared/lib/classNames/classNames'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import cls from './PageError.module.scss'

interface IPageErrorProps {
  className?: string
}

export const PageError: FC<IPageErrorProps> = (props): JSX.Element => {
  const { className = '' } = props
  const { t } = useTranslation()

  const onReloadPage = (): void => { location.reload() }

  return (
    <div className={classNames(cls.PageError, {}, [cls[className]])}>
      <h1 className={classNames(cls.title)}>{t('Page Error')}</h1>
      <Button onClick={onReloadPage} className={cls.reloadButton}>{t('Reload Page')}</Button>
    </div>
  )
}
