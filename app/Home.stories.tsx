import type { Meta, StoryObj } from '@storybook/react'

import Home from './page'

const meta = {
  title: 'pages/Home',
  component: Home,
  parameters: {
    nextjs: {
      router: {
        basePath: '/profile',
      },
    },
  },
} satisfies Meta<typeof Home>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {}
