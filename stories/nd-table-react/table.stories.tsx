import React from 'react';

import { ComponentMeta } from '@storybook/react';
import Dummy from '../dummy';
import { Example } from './basic.example';

export default {
  title: 'nd-table-react',
  component: Dummy
} as ComponentMeta<typeof Dummy>;

export const Basic = () => <Example />;
Basic.storyName = 'Basic Table';
