import React from 'react';

import { ComponentMeta } from '@storybook/react';
import { AsideGroupActionExample } from './aside-group-action.example';
import { AsideGroupExample } from './aside-group.example';
import { AsideInfoExample } from './info.example';
import { AsideSuccessExample } from './success.example';
import { AsideFailureExample } from './failure.example';
import Dummy from '../dummy';

export default {
  title: 'nd-aside-react',
  component: Dummy
} as ComponentMeta<typeof Dummy>;

export const AsideGroupAction = () => <AsideGroupActionExample />;
AsideGroupAction.storyName = 'Group of Actionable Aside Messages';

export const AsideGroup = () => <AsideGroupExample />;
AsideGroup.storyName = 'Group of Aside Messages';

export const AsideFailure = () => <AsideFailureExample />;
AsideFailure.storyName = 'Basic Failure Aside Message';

export const AsideInfo = () => <AsideInfoExample />;
AsideInfo.storyName = 'Basic Aside Info Message';

export const AsideSuccess = () => <AsideSuccessExample />;
AsideSuccess.storyName = 'Basic Success Aside Message';
