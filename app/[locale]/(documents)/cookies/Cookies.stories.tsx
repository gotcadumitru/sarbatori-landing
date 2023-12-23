import { Locales } from '@/shared/config/i18n/consts'
import type { Meta, StoryObj } from '@storybook/react'
import Cookies from './page'

const meta = {
  title: 'pages/TermsAndConditions',
  component: Cookies,
  args: {
    params: {
      locale: Locales.ro,
    },
  },
} satisfies Meta<typeof Cookies>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {}
