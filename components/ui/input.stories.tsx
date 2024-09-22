import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Input, InputProps } from './input'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'password', 'email', 'number', 'url', 'tel', 'search']
      }
    },
    placeholder: {
      control: 'text'
    },
    disabled: {
      control: 'boolean'
    }
  }
} as Meta

const Template: StoryFn<InputProps> = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'text',
  placeholder: 'Enter text...'
}

export const Password = Template.bind({})
Password.args = {
  type: 'password',
  placeholder: 'Enter password...'
}

export const Email = Template.bind({})
Email.args = {
  type: 'email',
  placeholder: 'Enter email...'
}

export const Disabled = Template.bind({})
Disabled.args = {
  type: 'text',
  placeholder: 'Disabled input',
  disabled: true
}
