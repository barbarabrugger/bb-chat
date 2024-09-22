import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel, SelectScrollUpButton, SelectScrollDownButton } from './select';

export default {
    title: 'Components/Select',
    component: Select,
    subcomponents: { SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel, SelectScrollUpButton, SelectScrollDownButton },
    parameters: {
        layout: 'centered',
    },
} as Meta;

const Template: StoryFn = (args) => (
    <Select {...args}>
        <SelectTrigger>
            <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
            <SelectScrollUpButton />
            <SelectGroup>
                <SelectLabel>Group 1</SelectLabel>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
            </SelectGroup>
            <SelectGroup>
                <SelectLabel>Group 2</SelectLabel>
                <SelectItem value="option3">Option 3</SelectItem>
                <SelectItem value="option4">Option 4</SelectItem>
            </SelectGroup>
            <SelectScrollDownButton />
        </SelectContent>
    </Select>
);

export const Default = Template.bind({});
Default.args = {};
