import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import './Loader.scss'
interface ILoaderProps {
  className?: string
}

export const Loader: FC<ILoaderProps> = (props): JSX.Element => {
  const { className = '' } = props
  return (
    <div className={classNames('lds-ellipsis', {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
