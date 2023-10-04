import { fireEvent, screen } from '@testing-library/react'
import { SideBar } from 'widgets/SideBar'
import { componentRender } from 'shared/config/tests/componentRender/componentRender'

describe('Test SideBar', () => {
  test('Test render', () => {
    componentRender(<SideBar/>)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Test toggle', () => {
    componentRender(<SideBar/>)
    const toggleButton = screen.getByTestId('sidebar-toggle')
    fireEvent.click(toggleButton)

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
