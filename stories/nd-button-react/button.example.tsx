import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@ndustrial/nd-theme-react';
import {
  DangerButton,
  GhostButton,
  PrimaryButton,
  SecondaryButton
} from '@ndustrial/nd-button-react';
import { Info as InfoIcon } from '@ndustrial/nd-icons-svg';

export const buttonVariations = ['primary', 'secondary', 'ghost', 'danger'];

interface Props {
  text: string;
  variation: 'primary' | 'secondary' | 'ghost' | 'danger';
  withIcon: boolean;
}

const Button = ({ text, variation = 'primary', withIcon, ...rest }: Props) => {
  const icon = withIcon ? <InfoIcon /> : null;
  switch (variation) {
    case 'primary':
      return (
        <PrimaryButton icon={icon} {...rest}>
          {text}
        </PrimaryButton>
      );
    case 'secondary':
      return (
        <SecondaryButton icon={icon} {...rest}>
          {text}
        </SecondaryButton>
      );
    case 'ghost':
      return (
        <GhostButton icon={icon} {...rest}>
          {text}
        </GhostButton>
      );
    case 'danger':
      return (
        <DangerButton icon={icon} {...rest}>
          {text}
        </DangerButton>
      );
  }
};

export let ButtonExample = (args: any) => (
  <ThemeProvider theme={defaultTheme}>
    <Button {...args} />
  </ThemeProvider>
);
