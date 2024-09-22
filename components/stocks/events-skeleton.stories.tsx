import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { EventsSkeleton } from './events-skeleton';

export default {
    title: 'Components/EventsSkeleton',
    component: EventsSkeleton,
} as Meta;

const Template: StoryFn = (args) => <EventsSkeleton {...args} />;

export const Default = Template.bind({});
Default.args = {};
