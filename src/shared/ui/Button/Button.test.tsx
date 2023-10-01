import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

describe('Test Button', () => {
  test('Test render', () => {
    render(<Button>CLICK</Button>)
    expect(screen.getByText('CLICK')).toBeInTheDocument()
  })

  test('Test clear theme"', () => {
    render(<Button theme={ThemeButton.CLEAR}>CLICK</Button>)
    expect(screen.getByText('CLICK')).toHaveClass('clear')
  })
})
