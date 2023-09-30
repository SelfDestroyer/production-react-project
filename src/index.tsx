import { type FC, StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { createRoot } from 'react-dom/client'
import App from 'app/App'
import 'app/styles/index.scss'
import 'shared/config/i18n/i18n'

const Root: FC = (): JSX.Element => (<StrictMode>
  <ThemeProvider>
    <RouterProvider router={router}/>
  </ThemeProvider>
</StrictMode>)

const rootDiv = document.getElementById('root') as HTMLElement
const router = createBrowserRouter([{ path: '*', Component: App }])

createRoot(rootDiv).render(<Root/>)
