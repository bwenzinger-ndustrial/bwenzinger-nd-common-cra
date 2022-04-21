import React from 'react';

import { ComponentMeta } from '@storybook/react';
import Dummy from '../dummy';
import { BasicExample } from './basic.example';
import { PrimaryButtonExample } from './primary-button.example';
import { RenderPropExample } from './render-prop.example';

export default {
  title: 'nd-menu-button-react',
  component: Dummy
} as ComponentMeta<typeof Dummy>;

export const Basic = () => <BasicExample />;
Basic.storyName = 'Any Text as a Button';

export const PrimaryButton = () => <PrimaryButtonExample />;
PrimaryButton.storyName = 'Primary Button Menu';

export const RenderProp = () => <RenderPropExample />;
RenderProp.storyName = 'Render Prop with isOpen data';
