import type { Meta, StoryObj } from '@storybook/react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Button',
  component: Button
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Clear: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.CLEAR
  }
}
export const ClearDark: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.CLEAR
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Outline: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.OUTLINE
  }

}
export const OutlineDark: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.OUTLINE
  },
  decorators: [ThemeDecorator(Theme.DARK)]

}
