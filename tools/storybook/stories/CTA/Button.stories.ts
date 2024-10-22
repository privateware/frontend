import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../../../libs/ui/src/Button';

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        primary: true,
        children: 'Primary Button',
    },
}

export const Secondary: Story = {
    args: {
        primary: false,
        children: 'Secondary Button',
    },
}