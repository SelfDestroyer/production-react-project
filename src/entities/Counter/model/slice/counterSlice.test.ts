import { counterReducer, counterActions } from './counterSlice'
import { type CounterSchema } from '../types/counterSchema'

describe('counterReducer', () => {
  test('Decrement counter', () => {
    const state: CounterSchema = {
      value: 10
    }
    expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 })
  })

  test('Increment counter', () => {
    const state: CounterSchema = {
      value: 10
    }
    expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 })
  })

  test('Should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 })
  })

  test('Should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.decrement)).toEqual({ value: -1 })
  })
})
