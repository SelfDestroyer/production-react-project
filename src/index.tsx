import { type FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from 'app/App'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { createRoot } from 'react-dom/client'
import 'app/styles/index.scss'
import 'shared/config/i18n/i18n'

const Root: FC = (): JSX.Element => <ThemeProvider>
  <RouterProvider router={router}/>
</ThemeProvider>

const rootDiv = document.getElementById('root') as HTMLElement
const router = createBrowserRouter([{ path: '*', Component: App }])

createRoot(rootDiv).render(<Root/>)
