import { type JSX, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = (): JSX.Element => (<Suspense fallback={<>Loading...</>}>
  <Routes>
    {Object.values(routeConfig).map(({ element, path }) => (
      <Route element={<div className={'page-wrapper'}>{element}</div>} path={path} key={path}/>))}
  </Routes>
</Suspense>)

export default AppRouter
