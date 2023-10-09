import { type ReactElement } from 'react'
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { Button } from 'shared/ui/Button/Button'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../../Counter/model/selectors/getCounterValue/getCounterValue'
import { useTranslation } from 'react-i18next'

export const Counter = (): ReactElement => {
  const dispatch = useAppDispatch()
  const value = useAppSelector(getCounterValue)
  const { t } = useTranslation()
  const increment = (): void => { dispatch(counterActions.increment()) }
  const decrement = (): void => { dispatch(counterActions.decrement()) }

  return (
    <div>
      <h1 data-testid={'counter-value'}>{value}</h1>
      <Button onClick={increment} data-testid={'bnt-increment'}>{t('Increment')}</Button>
      <Button onClick={decrement} data-testid={'bnt-decrement'}>{t('Decrement')}</Button>
    </div>
  )
}
