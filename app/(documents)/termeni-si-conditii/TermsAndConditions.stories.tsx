import type { Meta, StoryObj } from '@storybook/react'
import TermsAndConditions from './page'

const meta = {
  title: 'pages/TermsAndConditions',
  component: TermsAndConditions,
} satisfies Meta<typeof TermsAndConditions>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {}
