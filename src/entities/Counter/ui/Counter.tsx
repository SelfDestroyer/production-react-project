import { type ReactElement } from 'react'
import { useAppDispatch } from 'app/providers/StoreProvider/lib/useAppDispatch'
import { useAppSelector } from 'app/providers/StoreProvider/lib/useAppSelector'
import { counterActions } from '../model/slice/counterSlice'
import { Button } from 'shared/ui/Button/Button'
import { getCounterValue } from '../../Counter/model/selectors/getCounterValue/getCounterValue'

export const Counter = (): ReactElement => {
  const dispatch = useAppDispatch()
  const value = useAppSelector(getCounterValue)
  const increment = (): void => { dispatch(counterActions.increment()) }
  const decrement = (): void => { dispatch(counterActions.decrement()) }

  return (
    <div>
      <h1>Counter Value = {value}</h1>
      <Button onClick={increment}>increment</Button>
      <Button onClick={decrement}>decrement</Button>
    </div>
  )
}
