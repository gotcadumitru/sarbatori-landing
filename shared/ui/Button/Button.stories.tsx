import type { Meta, StoryObj } from '@storybook/react'
import { ButtonTheme } from '@/shared/ui/Button/button.types'

import Button from './Button'

const meta = {
  title: 'shared/Button',
  component: Button,
} satisfies Meta<typeof Button>
export default meta
type Story = StoryObj<typeof meta>

export const PRIMARY: Story = {
  args: {
    children: 'Button text',
  },
}
export const OUTLINE_RED: Story = {
  args: {
    theme: ButtonTheme.OUTLINE_RED,
    children: 'Button text',
  },
}

export const OUTLINE_BLUE: Story = {
  args: {
    theme: ButtonTheme.OUTLINE_BLUE,
    children: 'Button text',
  },
}

export const EMPTY: Story = {
  args: {
    theme: ButtonTheme.EMPTY,
    children: 'Button text',
  },
}
