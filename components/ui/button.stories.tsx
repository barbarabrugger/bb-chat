import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Button, ButtonProps } from './button'
import {IconUser} from './icons'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'default',
          'destructive',
          'outline',
          'secondary',
          'ghost',
          'link'
        ]
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['default', 'sm', 'lg', 'icon']
      }
    },
    children: {
      control: 'text'
    }
  }
} as Meta

const Template: StoryFn<ButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  variant: 'default',
  size: 'default',
  children: 'Default Button'
}

export const Destructive = Template.bind({})
Destructive.args = {
  variant: 'destructive',
  size: 'default',
  children: 'Destructive Button'
}

export const Outline = Template.bind({})
Outline.args = {
  variant: 'outline',
  size: 'default',
  children: 'Outline Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  size: 'default',
  children: 'Secondary Button'
}

export const Ghost = Template.bind({})
Ghost.args = {
  variant: 'ghost',
  size: 'default',
  children: 'Ghost Button'
}

export const Link = Template.bind({})
Link.args = {
  variant: 'link',
  size: 'default',
  children: 'Link Button'
}

export const Small = Template.bind({})
Small.args = {
  variant: 'default',
  size: 'sm',
  children: 'Small Button'
}

export const Large = Template.bind({})
Large.args = {
  variant: 'default',
  size: 'lg',
  children: 'Large Button'
}

export const Icon = Template.bind({})
Icon.args = {
    variant: 'default',
    size: 'icon',
    children: <IconUser />
}
