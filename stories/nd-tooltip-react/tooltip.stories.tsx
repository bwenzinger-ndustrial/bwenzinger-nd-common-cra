import React from 'react';

import { ComponentMeta } from '@storybook/react';
import Dummy from '../dummy';
import { TooltipDefinitionExample } from './definition.example';
import { TooltipDescriptionExample } from './description.example';
import { TooltipIconExample } from './icon.example';
import { TooltipInteractiveExample } from './interactive.example';
import { TOOLTIP_PLACEMENTS } from '@ndustrial/nd-tooltip-react';

export default {
  title: 'nd-tooltip-react',
  component: Dummy
} as ComponentMeta<typeof Dummy>;

export const TooltipDefinition = () => <TooltipDefinitionExample />;
TooltipDefinition.storyName = 'Definition';

export const TooltipDescription = () => <TooltipDescriptionExample />;
TooltipDescription.storyName = 'Description';

export const TooltipIcon = () => <TooltipIconExample />;
TooltipIcon.storyName = 'Icon';

export const TooltipInteractive = (args) => (
  <TooltipInteractiveExample {...args} />
);
TooltipInteractive.storyName = 'Interactive';
TooltipInteractive.argTypes = {
  placement: {
    type: 'string',
    options: TOOLTIP_PLACEMENTS,
    defaultValue: 'top',
    control: { type: 'select' }
  }
};
