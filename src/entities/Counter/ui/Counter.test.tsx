import { fireEvent, screen } from '@testing-library/react'
import { Counter } from './Counter'
import { componentRender } from 'shared/config/tests/componentRender/componentRender'

describe('Test Counter', () => {
  test('Test render', () => {
    componentRender(<Counter/>, {
      initialState: {
        counter: {
          value: 10
        }
      }
    })
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10')
  })

  test('Test increment without initial state', () => {
    componentRender(<Counter/>)
    const incrementButton = screen.getByTestId('bnt-increment')
    fireEvent.click(incrementButton)

    expect(screen.getByTestId('counter-value')).toHaveTextContent('1')
  })

  test('Test decrement without initial state', () => {
    componentRender(<Counter/>)
    const decrementButton = screen.getByTestId('bnt-decrement')
    fireEvent.click(decrementButton)

    expect(screen.getByTestId('counter-value')).toHaveTextContent('-1')
  })

  test('Test increment', () => {
    componentRender(<Counter/>, {
      initialState: {
        counter: {
          value: 10
        }
      }
    })
    const incrementButton = screen.getByTestId('bnt-increment')
    fireEvent.click(incrementButton)

    expect(screen.getByTestId('counter-value')).toHaveTextContent('11')
  })

  test('Test decrement', () => {
    componentRender(<Counter/>, {
      initialState: {
        counter: {
          value: 10
        }
      }
    })
    const decrementButton = screen.getByTestId('bnt-decrement')
    fireEvent.click(decrementButton)

    expect(screen.getByTestId('counter-value')).toHaveTextContent('9')
  })
})
