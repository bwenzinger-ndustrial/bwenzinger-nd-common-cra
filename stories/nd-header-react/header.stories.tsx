import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Dummy from '../dummy';
import { ChildrenExample } from './children.example';
import { HomepathExample } from './homePath.example';
import { BasicExample } from './basic.example';
import { UserDropdownExample } from './userDropdown.example';

export default {
  title: 'nd-header-react',
  component: Dummy
} as ComponentMeta<typeof Dummy>;

export const Basic = () => <BasicExample />;
Basic.storyName = 'Basic Header';

export const Children = () => <ChildrenExample />;
Children.storyName = 'Header With Children';

export const Homepath = () => <HomepathExample />;
Homepath.storyName = 'Header with Home Path';

export const UserDropdown = () => <UserDropdownExample />;
UserDropdown.storyName = 'Header With UserDropdown';
