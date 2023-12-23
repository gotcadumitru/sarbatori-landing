import { Locales } from '@/shared/config/i18n/consts'
import type { Meta, StoryObj } from '@storybook/react'
import PrivacyPolicy from './page'

const meta = {
  title: 'pages/PrivacyPolicy',
  component: PrivacyPolicy,
  args: {
    params: {
      locale: Locales.ro,
    },
  },
} satisfies Meta<typeof PrivacyPolicy>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {}
