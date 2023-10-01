import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',

}

type IButtonProps = {
  className?: string
  theme?: ThemeButton
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<IButtonProps> = props => {
  const { className = '', children, theme = '', ...otherProps } = props

  return (
    <button type={'button'
    } className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </button>
  )
}
