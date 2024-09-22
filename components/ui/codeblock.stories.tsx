import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { CodeBlock } from './codeblock';

export default {
    title: 'Components/CodeBlock',
    component: CodeBlock,
    argTypes: {
        language: {
            control: {
                type: 'select',
                options: [
                    'javascript', 'typescript', 'python', 'java', 'c', 'cpp', 'c++', 'c#', 
                    'ruby', 'php', 'swift', 'objective-c', 'kotlin', 'go', 'perl', 'rust', 
                    'scala', 'haskell', 'lua', 'shell', 'sql', 'html', 'css'
                ],
            },
        },
        value: {
            control: 'text',
        },
    },
} as Meta;

const Template: StoryFn<{ language: string; value: string }> = (args) => <CodeBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
    language: 'javascript',
    value: `console.log('Hello, world!');`,
};

export const PythonExample = Template.bind({});
PythonExample.args = {
    language: 'python',
    value: `print('Hello, world!')`,
};

export const JavaExample = Template.bind({});
JavaExample.args = {
    language: 'java',
    value: `public class Main {
        public static void main(String[] args) {
                System.out.println("Hello, world!");
        }
}`,
};
