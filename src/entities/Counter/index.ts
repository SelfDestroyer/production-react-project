import { Counter } from './ui/Counter'
import { counterReducer, counterActions } from './model/slice/counterSlice'
import { getCounter } from './model/selectors/getCounter/getCounter'
import { getCounterValue } from './model/selectors/getCounterValue/getCounterValue'

export {
  Counter,
  counterReducer,
  counterActions,
  getCounterValue,
  getCounter
}
