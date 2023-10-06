import { render, screen } from '@testing-library/react'
import { Modal } from './Modal'

describe('Test Modal', () => {
  test('Test render', () => {
    render(<Modal isOpen={true} onClose={() => {}}>CLICK</Modal>)
    expect(screen.getByText('CLICK')).toBeInTheDocument()
  })
})
