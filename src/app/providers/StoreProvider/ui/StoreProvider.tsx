import { type FC, type PropsWithChildren, type ReactElement } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type StateSchema } from '../config/stateSchema'

type StoreProviderProps = {
  initialState?: StateSchema
} & PropsWithChildren

export const StoreProvider: FC<StoreProviderProps> = (props): ReactElement => {
  const { children, initialState } = props

  const store = createReduxStore(initialState)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
