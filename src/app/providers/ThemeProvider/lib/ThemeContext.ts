import { createContext } from 'react'

export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
}

export interface IThemeContext {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<IThemeContext>({
  setTheme (theme: Theme): void {
  },
  theme: Theme.LIGHT
})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
