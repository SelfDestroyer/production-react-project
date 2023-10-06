import { render, screen } from '@testing-library/react'
import { Button, ButtonSizes, ButtonTheme } from './Button'

describe('Test Button', () => {
  test('Test render', () => {
    render(<Button>CLICK</Button>)
    expect(screen.getByText('CLICK')).toBeInTheDocument()
  })

  test('Test clear theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>CLICK</Button>)
    expect(screen.getByText('CLICK')).toHaveClass('clear')
  })

  test('Test clear inverted theme', () => {
    render(<Button theme={ButtonTheme.CLEAR_INVERTED}>CLICK</Button>)
    expect(screen.getByText('CLICK')).toHaveClass('clearInverted')
  })

  test('Test outline theme', () => {
    render(<Button theme={ButtonTheme.OUTLINE}>CLICK</Button>)
    expect(screen.getByText('CLICK')).toHaveClass('outline')
  })

  test('Test background theme', () => {
    render(<Button theme={ButtonTheme.BACKGROUND}>CLICK</Button>)
    expect(screen.getByText('CLICK')).toHaveClass('background')
  })

  test('Test backgroundInverted theme', () => {
    render(<Button theme={ButtonTheme.BACKGROUND_INVERTED}>CLICK</Button>)
    expect(screen.getByText('CLICK')).toHaveClass('backgroundInverted')
  })

  test('Test has size M', () => {
    render(<Button size={ButtonSizes.M}>CLICK</Button>)
    expect(screen.getByText('CLICK')).toHaveClass('sizeM')
  })

  test('Test has size L', () => {
    render(<Button size={ButtonSizes.L}>CLICK</Button>)
    expect(screen.getByText('CLICK')).toHaveClass('sizeL')
  })

  test('Test has size XL', () => {
    render(<Button size={ButtonSizes.XL}>CLICK</Button>)
    expect(screen.getByText('CLICK')).toHaveClass('sizeXL')
  })

  test('Test is button square', () => {
    render(<Button square>CLICK</Button>)
    expect(screen.getByText('CLICK')).toHaveClass('square')
  })
})
