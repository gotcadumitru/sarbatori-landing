import type { Meta, StoryObj } from '@storybook/react'
import PrivacyPolicy from './page'

const meta = {
  title: 'pages/PrivacyPolicy',
  component: PrivacyPolicy,
} satisfies Meta<typeof PrivacyPolicy>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {}
