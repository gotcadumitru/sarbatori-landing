import { Meta, StoryObj } from '@storybook/react'

import Label from './Label'

const meta = {
  title: 'shared/Label',
  component: Label,
  args: {
    label: 'label',
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const WITH_INFO_TEXT: Story = {
  args: {
    infoText: 'Input info text',
  },
}

export const INFO_TEXT_NO_BORDER: Story = {}
