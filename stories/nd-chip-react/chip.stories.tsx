import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { GlobalStyle } from '@ndustrial/nd-theme-react';
import Dummy from '../dummy';
import { BasicExample } from './basic.example';
import { ChipGroupExample } from './chip-group.example';

export default {
  title: 'nd-chip-react',
  component: Dummy
} as ComponentMeta<typeof Dummy>;

export const BasicChip = () => <BasicExample />;
BasicChip.storyName = 'Basic Chip';

export const ChipGroup = () => <ChipGroupExample />;
ChipGroup.storyName = 'Chip Group';
