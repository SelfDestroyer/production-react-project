import { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import AppRouter from 'app/providers/router/ui/AppRouter'
import { NavBar } from 'widgets/NavBar'
import { SideBar } from 'widgets/SideBar'
const App = (): JSX.Element => {
  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback={''}>
        <NavBar/>
        <div className={'content-page'}>
          <SideBar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>)
}

export default App
