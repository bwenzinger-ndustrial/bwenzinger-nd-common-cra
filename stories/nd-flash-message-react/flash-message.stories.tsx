import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Dummy from '../dummy';
import { FailureExample } from './failure.example';
import { FlashMessageActionExample } from './flash-message-action.example';
import { FlashMessageGroupExample } from './flash-message-group.example';
import { PrimaryExample } from './primary.example';
import { SuccessExample } from './success.example';

export default {
  title: 'nd-flash-message-react',
  component: Dummy
} as ComponentMeta<typeof Dummy>;

export const Failure = () => <FailureExample />;
Failure.storyName = 'Basic Failure Flash Message';

export const Action = () => <FlashMessageActionExample />;
Action.storyName = 'FlashMessage with Action';

export const Group = () => <FlashMessageGroupExample />;
Group.storyName = 'Flash Message Group';

export const Primary = () => <PrimaryExample />;
Primary.storyName = 'Basic Primary Flash Message';

export const Success = () => <SuccessExample />;
Success.storyName = 'Basic Success Flash Message';
