import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg'
import LightThemeIcon from 'shared/assets/icons/theme-light.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface IThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = props => {
  const { className = '' } = props
  const { toggleTheme, theme } = useTheme()

  return (
    <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}
      className={classNames('', {}, [className])}
    >
      {theme === Theme.DARK ? <DarkThemeIcon /> : <LightThemeIcon/>}
    </Button>
  )
}
