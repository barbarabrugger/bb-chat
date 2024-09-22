import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { UserMessage, BotMessage } from './message';

export default {
    title: 'Components/Message',
    component: UserMessage,
    subcomponents: { BotMessage },
} as Meta;

const UserMessageTemplate: StoryFn = (args) => (
    <UserMessage>
        {args.children}
    </UserMessage>
);

const BotMessageTemplate: StoryFn = (args) => (
    <BotMessage content={args.content} />
);

export const DefaultUserMessage = UserMessageTemplate.bind({});
DefaultUserMessage.args = {
    children: 'This is a user message.',
};

export const DefaultBotMessage = BotMessageTemplate.bind({});
DefaultBotMessage.args = {
    content: 'This is a bot message.',
};
