import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Echo, EchoProps } from '.';

export default {
  title: 'Echo',
  component: Echo,
  parameters: {
    componentSubtitle: 'Echo component',
  },
} as Meta;

export const StoryComponent: Story<EchoProps> = (args) => (
  <Echo {...args} echoid="example" />
);
