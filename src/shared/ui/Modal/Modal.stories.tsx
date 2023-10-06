import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'

const meta = {
  title: 'shared/Modal',
  component: Modal
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const ModalLight: Story = {
  args: {
    children: 'Some Modal Text',
    isOpen: true
  }
}

export const ModalDark: Story = {
  args: {
    children: 'Some Modal Text',
    isOpen: true
  }
}
