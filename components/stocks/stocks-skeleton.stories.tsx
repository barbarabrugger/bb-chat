import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { StocksSkeleton } from './stocks-skeleton' // Adjust the import based on the actual export from stocks-skeleton.tsx

export default {
  title: 'Components/StocksSkeleton',
  component: StocksSkeleton
} as Meta

const Template: StoryFn<React.ComponentProps<typeof StocksSkeleton>> = args => (
  <StocksSkeleton />
)

export const Default = Template.bind({})
Default.args = {}

export const WithCustomProps = Template.bind({})
WithCustomProps.args = {}
