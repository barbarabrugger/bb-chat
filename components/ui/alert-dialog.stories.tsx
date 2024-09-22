import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { AlertDialog, AlertDialogContent, AlertDialogTrigger, AlertDialogAction, AlertDialogCancel } from './alert-dialog';

export default {
    title: 'Components/AlertDialog',
    component: AlertDialog,
    subcomponents: { AlertDialogContent, AlertDialogTrigger, AlertDialogAction, AlertDialogCancel },
    argTypes: {
        children: {
            control: 'text',
        },
    },
} as Meta;

const Template: StoryFn = (args) => (
    <AlertDialog {...args}>
        <AlertDialogTrigger asChild>
            <button>Open Alert Dialog</button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <h2>Alert Dialog Title</h2>
            <p>This is an alert dialog description.</p>
            <div>
                <AlertDialogCancel asChild>
                    <button>Cancel</button>
                </AlertDialogCancel>
                <AlertDialogAction asChild>
                    <button>Confirm</button>
                </AlertDialogAction>
            </div>
        </AlertDialogContent>
    </AlertDialog>
);

export const Default = Template.bind({});
Default.args = {
    children: 'Default Button',
};
