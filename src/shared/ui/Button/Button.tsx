import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',

}

export enum ButtonSizes {
  M = 'sizeM',
  L = 'sizeL',
  XL = 'sizeXL',
}

type ButtonProps = {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSizes
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = props => {
  const { className = '', children, theme = '', square = false, size = ButtonSizes.M, ...otherProps } = props

  const mods = {
    [cls.square]: square
  }

  return (
    <button type={'button'
    } className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])} {...otherProps}>
      {children}
    </button>
  )
}
