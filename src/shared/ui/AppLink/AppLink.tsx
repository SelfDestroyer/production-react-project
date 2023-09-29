import { type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export enum IAppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type IAppLinkProps = {
  className?: string
  theme?: IAppLinkTheme

} & LinkProps

export const AppLink: FC<IAppLinkProps> = props => {
  const { children, to, className, theme = IAppLinkTheme.PRIMARY, ...otherProps } = props
  return (<Link to={to} className={classNames(cls.AppLink, {}, [cls[theme]])} {...otherProps}>
    {children}
  </Link>)
}
