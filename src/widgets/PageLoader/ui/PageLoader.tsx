import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageLoader.module.scss'
import { Loader } from 'shared/ui/Loader/Loader'

interface IPageLoaderProps {
  className?: string
}

export const PageLoader: FC<IPageLoaderProps> = (props): JSX.Element => {
  const { className = '' } = props

  return (
    <div className={classNames(cls.PageLoader, {}, [cls[className]])}>
      <Loader/>
    </div>
  )
}
