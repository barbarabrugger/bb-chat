import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Events } from './events';

export default {
    title: 'Components/Events',
    component: Events,
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Events>> = (args) => <Events {...args} />;

export const Default = Template.bind({});
Default.args = {
    props: [
        {
            date: '2022-10-01',
            headline: 'NVIDIA releases new AI-powered graphics card',
            description: 'NVIDIA unveils the latest graphics card infused with AI capabilities, revolutionizing gaming and rendering experiences.'
        },
        {
            date: '2022-11-15',
            headline: 'Apple announces new MacBook Pro',
            description: 'Apple introduces the new MacBook Pro with M1 chip, offering unprecedented performance and battery life.'
        }
    ],
};
