import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Switch } from './switch';

export default {
    title: 'Components/Switch',
    component: Switch,
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Switch>> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
    checked: false,
    disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
    checked: true,
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    checked: false,
    disabled: true,
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
    checked: true,
    disabled: true,
};
