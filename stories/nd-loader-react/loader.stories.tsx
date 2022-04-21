import React from 'react';

import { ComponentMeta } from '@storybook/react';
import Dummy from '../dummy';
import { BasicExample } from './basic.example';
import { WithLabelExample } from './label.example';

export default {
  title: 'nd-loader-react',
  component: Dummy
} as ComponentMeta<typeof Dummy>;

export const Basic = () => <BasicExample />;
Basic.storyName = 'Basic Loader';

export const WithLabel = () => <WithLabelExample />;
WithLabel.storyName = 'Loader with Label';
