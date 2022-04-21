import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Dummy from '../dummy';
import { DialogExample } from './basic.example';

export default {
  title: 'nd-dialog-react',
  component: Dummy
} as ComponentMeta<typeof Dummy>;

export const Dialog = () => <DialogExample />;
Dialog.storyName = 'Basic Dialog';
