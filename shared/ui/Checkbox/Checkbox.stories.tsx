import { Meta, StoryObj } from '@storybook/react'
import Checkbox from './Checkbox'

const meta = {
  title: 'shared/Checkbox',
  component: Checkbox,
  args: {
    label: 'Checkbox label',
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const GREY: Story = {}
export const BLACK: Story = {}
