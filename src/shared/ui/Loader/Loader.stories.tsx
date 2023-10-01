import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Loader } from 'shared/ui/Loader/Loader'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Loader',
  component: Loader
} satisfies Meta<typeof Loader>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
