import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Separator } from './separator';

export default {
    title: 'Components/Separator',
    component: Separator,
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Separator>> = (args) => <Separator {...args} />;

export const Default = Template.bind({});
Default.args = {
    orientation: 'horizontal',
    decorative: false,
};

export const Vertical = Template.bind({});
Vertical.args = {
    orientation: 'vertical',
    decorative: false,
};
