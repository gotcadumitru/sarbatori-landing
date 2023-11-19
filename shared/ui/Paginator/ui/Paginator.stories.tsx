import { Meta, StoryObj } from '@storybook/react'

import Paginator from './Paginator'

const meta = {
  title: 'shared/Paginator',
  component: Paginator,
  args: {
    itemsPerPage: 10,
    pageCount: 10,
    onItemsPerPageChange: () => {},
  },
} satisfies Meta<typeof Paginator>

export default meta

type Story = StoryObj<typeof meta>

export const PAGINATOR: Story = {
  args: {},
}
