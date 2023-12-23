import { Locales } from '@/shared/config/i18n/consts'
import type { Meta, StoryObj } from '@storybook/react'
import TermsAndConditions from './page'

const meta = {
  title: 'pages/TermsAndConditions',
  component: TermsAndConditions,
  args: {
    params: {
      locale: Locales.ro,
    },
  },
} satisfies Meta<typeof TermsAndConditions>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {}
