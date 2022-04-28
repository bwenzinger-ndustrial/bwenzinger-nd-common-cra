import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@ndustrial/nd-theme-react';
import {
  ButtonGroup,
  WarningButton,
  PrimaryButton,
  SecondaryButton,
} from '@ndustrial/nd-button-react';

export let GroupOfButtonExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <ButtonGroup>
      <PrimaryButton>The</PrimaryButton>
      <SecondaryButton>{`<ButtonGroup />`}</SecondaryButton>
      <WarningButton>Component</WarningButton>
      <PrimaryButton>Handles</PrimaryButton>
      <SecondaryButton>Button</SecondaryButton>
      <WarningButton>Wrapping</WarningButton>
    </ButtonGroup>
  </ThemeProvider>
);
