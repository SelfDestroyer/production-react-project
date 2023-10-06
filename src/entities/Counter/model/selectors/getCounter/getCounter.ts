import { type StateSchema } from 'app/providers/StoreProvider/config/stateSchema'
import { type CounterSchema } from '../../types/counterSchema'

export const getCounter = (state: StateSchema): CounterSchema => state.counter
