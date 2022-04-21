import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Dummy from '../dummy';
import { DropdownExample } from './basic.example';
import { DropdownManagedStateExample } from './managed-state.example';

export default {
  title: 'nd-dropdown-react',
  component: Dummy
} as ComponentMeta<typeof Dummy>;

export const Dropdown = () => <DropdownExample />;
Dropdown.storyName = 'Dropdown Menu';

export const DropdownManagedState = () => <DropdownManagedStateExample />;
Dropdown.storyName = 'Dropdown Menu with managed state';
