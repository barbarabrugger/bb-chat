import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Textarea } from './textarea'

export default {
  title: 'Components/Textarea',
  component: Textarea
} as Meta

const Template: StoryFn<React.ComponentProps<typeof Textarea>> = args => (
  <Textarea {...args} />
)

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Enter text...',
  disabled: false
}

export const Disabled = Template.bind({})
Disabled.args = {
  placeholder: 'Enter text...',
  disabled: true
}

export const WithValue = Template.bind({})
WithValue.args = {
  value: 'Initial value',
  disabled: false
}
