import { type Theme } from 'app/providers/ThemeProvider'
import { type JSX } from 'react'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: any): JSX.Element => (
  <div className={`app ${theme}`}>
    <StoryComponent/>
  </div>
)
