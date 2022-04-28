import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@ndustrial/nd-theme-react';
import {
  WarningButton,
  PrimaryButton,
  SecondaryButton,
} from '@ndustrial/nd-button-react';
import { Info as InfoIcon } from '@ndustrial/nd-icons-svg';

export const buttonVariations = ['primary', 'secondary', 'warning'];

interface Props {
  text: string;
  variation: 'primary' | 'secondary' | 'warning';
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
    case 'warning':
      return (
        <WarningButton icon={icon} {...rest}>
          {text}
        </WarningButton>
      );
  }
};

export let ButtonExample = (args: any) => (
  <ThemeProvider theme={defaultTheme}>
    <Button {...args} />
  </ThemeProvider>
);
