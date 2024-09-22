import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Sheet, SheetTrigger, SheetContent, SheetClose } from './sheet'
import { Button } from './button'

export default {
  title: 'Components/Sheet',
  component: Sheet,
  subcomponents: { SheetTrigger, SheetContent, SheetClose },
  parameters: {
    layout: 'centered'
  }
} as Meta

const Template: StoryFn = args => (
  <Sheet {...args}>
    <SheetTrigger asChild>
      <Button>Open Sheet</Button>
    </SheetTrigger>
    <SheetContent>
      <h2>Sheet Title</h2>
      <p>This is the sheet content.</p>
      <SheetClose asChild>
        <Button>Close</Button>
      </SheetClose>
    </SheetContent>
  </Sheet>
)

export const Default = Template.bind({})
Default.args = {}
