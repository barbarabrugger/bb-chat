import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Label } from './label';

export default {
    title: 'Components/Label',
    component: Label,
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Label>> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default Label',
    htmlFor: 'input-id',
};
