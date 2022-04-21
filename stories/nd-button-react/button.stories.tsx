import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { GlobalStyle } from '@ndustrial/nd-theme-react';
import Dummy from '../dummy';
import { ButtonExample, buttonVariations } from './button.example';
import { ButtonsExample } from './buttons.example';
import { LinkExample } from './link.example';
import { GroupOfButtonExample } from './group.example';

export default {
  title: 'nd-button-react',
  component: Dummy
} as ComponentMeta<typeof Dummy>;

export const EditableButton = (args) => <ButtonExample {...args} />;
EditableButton.storyName = 'Button Editable';
EditableButton.argTypes = {
  text: { type: 'string', defaultValue: 'Customize Me!' },
  disabled: { type: 'boolean', defaultValue: false },
  withIcon: { type: 'boolean', defaultValue: false },
  variation: {
    // name: 'type',
    type: 'string',
    options: buttonVariations,
    defaultValue: 'primary',
    control: { type: 'select' }
  },
  component: {
    // name: 'type',
    type: 'string',
    options: ['button', 'a'],
    defaultValue: 'button',
    control: { type: 'select' }
  }
};

export const Buttons = () => <ButtonsExample />;
Buttons.storyName = 'Buttons';

export const GroupOfButton = () => <GroupOfButtonExample />;
GroupOfButton.storyName = 'Group of Buttons';

export const ButtonLink = () => <LinkExample />;
ButtonLink.storyName = 'Button as a Link';
