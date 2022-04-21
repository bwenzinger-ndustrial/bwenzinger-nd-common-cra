import React from 'react';

import { ComponentMeta } from '@storybook/react';
import Dummy from '../dummy';
import { BasicExample } from './basic.example';
import { ControlledExample } from './controlled.example';
import { IconExample } from './icon.example';

export default {
  title: 'nd-tabs-react',
  component: Dummy
} as ComponentMeta<typeof Dummy>;

export const Basic = () => <BasicExample />;
Basic.storyName = 'Basic Tabs';

export const Controlled = (args) => <ControlledExample {...args} />;
Controlled.storyName = 'Controlled Tabs';
Controlled.argTypes = {
  index: {
    control: { type: 'range', min: 0, max: 2, step: 1 },
    defaultValue: 0
  }
};

export const Icon = (args) => <IconExample {...args} />;
Icon.storyName = 'Icon Tabs';
