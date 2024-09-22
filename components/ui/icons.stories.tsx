import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { IconNextChat, IconOpenAI } from './icons';

export default {
    title: 'Components/Icons',
    component: IconNextChat,
    subcomponents: { IconOpenAI },
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof IconNextChat>> = (args) => <IconNextChat {...args} />;

export const NextChatIcon = Template.bind({});
NextChatIcon.args = {
    className: '',
    inverted: false,
};

const OpenAITemplate: StoryFn<React.ComponentProps<typeof IconOpenAI>> = (args) => <IconOpenAI {...args} />;

export const OpenAIIcon = OpenAITemplate.bind({});
OpenAIIcon.args = {
    className: '',
};
