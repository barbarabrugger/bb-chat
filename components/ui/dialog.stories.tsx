import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Dialog, DialogTrigger, DialogContent, DialogClose } from './dialog';
import { Button } from './button';

export default {
    title: 'Components/Dialog',
    component: Dialog,
    subcomponents: { DialogTrigger, DialogContent, DialogClose },
    parameters: {
        layout: 'centered',
    },
} as Meta;

const Template: StoryFn = (args) => (
    <Dialog {...args}>
        <DialogTrigger asChild>
            <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
            <h2>Dialog Title</h2>
            <p>This is the dialog content.</p>
            <DialogClose asChild>
                <Button>Close</Button>
            </DialogClose>
        </DialogContent>
    </Dialog>
);

export const Default = Template.bind({});
Default.args = {};
