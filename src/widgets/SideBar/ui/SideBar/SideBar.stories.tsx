import type { Meta, StoryObj } from '@storybook/react'
import { SideBar } from './SideBar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'widget/SideBar',
  component: SideBar
} satisfies Meta<typeof SideBar>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {}
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
