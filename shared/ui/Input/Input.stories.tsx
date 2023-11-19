import { Meta, StoryObj } from '@storybook/react'

import Input from './Input'

const meta = {
  title: 'shared/Input',
  component: Input,
  args: {
    label: 'Input label',
    placeholder: 'Input placeholder',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const DISABLED: Story = {
  args: {
    disabled: true,
  },
}
