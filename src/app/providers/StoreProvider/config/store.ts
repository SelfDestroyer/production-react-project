import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { type EnhancedStore } from '@reduxjs/toolkit/src/configureStore'
import { type StateSchema } from './stateSchema'
import { counterReducer } from 'entities/Counter'

const rootReducer = combineReducers({
  counter: counterReducer
})

export const createReduxStore = (initialState?: StateSchema): EnhancedStore => {
  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: _IS_DEV_,
    preloadedState: initialState
  })
}

export const store = createReduxStore({
  counter: {
    value: 0
  }
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
