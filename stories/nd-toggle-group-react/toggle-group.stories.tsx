import React from 'react';

import { ComponentMeta } from '@storybook/react';
import Dummy from '../dummy';
import { ControlledExample } from './controlled.example';

export default {
  title: 'nd-toggle-group-react',
  component: Dummy
} as ComponentMeta<typeof Dummy>;

export const Controlled = () => <ControlledExample />;
Controlled.storyName = 'Controlled';
