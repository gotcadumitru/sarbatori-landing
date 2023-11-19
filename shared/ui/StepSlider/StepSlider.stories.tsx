import { Meta, StoryObj } from '@storybook/react'
import StepSlider from './StepSlider'

const meta = {
  title: 'shared/StepSlider',
  component: StepSlider,
  args: {
    label: 'Select',
    infoText: 'Select',
    min: -10,
    step: 1,
    max: 10,
    onChange: () => {},
    name: 'weighting',
    infoTextLeft: 'Never Match',
    infoTextRight: 'Always Match',
    value: 5,
  },
} satisfies Meta<typeof StepSlider>

export default meta
type Story = StoryObj<typeof meta>

export const SIMPLE: Story = {}
export const NO_LABEL: Story = {
  args: {
    label: undefined,
  },
}
