import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { StockSkeleton } from './stock-skeleton';

export default {
    title: 'Components/StockSkeleton',
    component: StockSkeleton,
} as Meta;

const Template: StoryFn = () => (
    <div className="flex items-center justify-center h-24">
        <StockSkeleton />
    </div>
);

export const Default = Template.bind({});
