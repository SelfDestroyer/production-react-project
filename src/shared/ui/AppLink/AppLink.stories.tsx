import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { AppLink, IAppLinkTheme } from 'shared/ui/AppLink/AppLink'

const meta = {
  title: 'shared/AppLink',
  component: AppLink
} satisfies Meta<typeof AppLink>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button',
    theme: IAppLinkTheme.PRIMARY,
    to: '/'
  }
}

export const PrimaryDark: Story = {
  args: {
    children: 'Button',
    theme: IAppLinkTheme.PRIMARY,
    to: '/'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    theme: IAppLinkTheme.SECONDARY,
    to: '/'
  }
}

export const SecondaryDark: Story = {
  args: {
    children: 'Button',
    theme: IAppLinkTheme.PRIMARY,
    to: '/'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
