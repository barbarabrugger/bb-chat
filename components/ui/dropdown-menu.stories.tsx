import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './dropdown-menu';
import { Button } from './button';

export default {
    title: 'Components/DropdownMenu',
    component: DropdownMenu,
    subcomponents: { DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem },
    parameters: {
        layout: 'centered',
    },
} as Meta;

const Template: StoryFn = (args) => (
    <DropdownMenu {...args}>
        <DropdownMenuTrigger asChild>
            <Button>Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => alert('Item 1 selected')}>Item 1</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => alert('Item 2 selected')}>Item 2</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => alert('Item 3 selected')}>Item 3</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
);

export const Default = Template.bind({});
Default.args = {};
