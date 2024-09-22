import { spinner } from './spinner'
import { StoryFn } from '@storybook/react'

export default {
  title: 'Components/Spinner'
}

const SpinnerTemplate: StoryFn = () => spinner

export const DefaultSpinner = SpinnerTemplate.bind({})
DefaultSpinner.args = {}
