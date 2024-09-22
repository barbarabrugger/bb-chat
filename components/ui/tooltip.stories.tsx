import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './tooltip';
import { Button } from './button';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
    subcomponents: { TooltipTrigger, TooltipContent, TooltipProvider },
} as Meta;

const Template: StoryFn = (args) => (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <Button>Hover me</Button>
            </TooltipTrigger>
            <TooltipContent {...args}>
                Tooltip content
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
);

export const Default = Template.bind({});
Default.args = {
    side: 'top',
    sideOffset: 4,
};
