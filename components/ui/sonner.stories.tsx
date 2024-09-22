import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Toaster } from './sonner';
import { Button } from './button';
import { toast } from 'sonner';

export default {
    title: 'Components/Toaster',
    component: Toaster,
} as Meta;

const Template: StoryFn = (args) => (
    <>
        <Toaster {...args} />
        <Button onClick={() => toast('This is a default toast message')}>Show Default Toast</Button>
        <Button onClick={() => toast.success('This is a success toast message')}>Show Success Toast</Button>
        <Button onClick={() => toast.error('This is an error toast message')}>Show Error Toast</Button>
        <Button onClick={() => toast.info('This is an info toast message')}>Show Info Toast</Button>
    </>
);

export const Default = Template.bind({});
Default.args = {};

export const Success = Template.bind({});
Success.args = {};

export const Error = Template.bind({});
Error.args = {};

export const Info = Template.bind({});
Info.args = {};
