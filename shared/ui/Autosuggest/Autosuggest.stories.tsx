import createArrayFromTo from '@/shared/lib/utils/createArrayFromTo'
import { Meta, StoryObj } from '@storybook/react'
import Autosuggest from './Autosuggest'

const meta = {
  title: 'shared/Autosuggest',
  component: Autosuggest,
  args: {
    placeholder: 'Type for search...',
    label: 'Type for search...',
    options: createArrayFromTo(0, 10).map((n) => `label ${n}`),
  },
} satisfies Meta<typeof Autosuggest>

export default meta

type Story = StoryObj<typeof meta>

export const SIMPLE: Story = {}
