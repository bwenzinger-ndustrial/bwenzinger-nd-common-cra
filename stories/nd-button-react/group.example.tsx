import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@ndustrial/nd-theme-react';
import {
  ButtonGroup,
  DangerButton,
  GhostButton,
  PrimaryButton,
  SecondaryButton
} from '@ndustrial/nd-button-react';

export let GroupOfButtonExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <ButtonGroup>
      <PrimaryButton>The</PrimaryButton>
      <SecondaryButton>{`<ButtonGroup />`}</SecondaryButton>
      <GhostButton>Component</GhostButton>
      <DangerButton>Handles</DangerButton>
      <PrimaryButton>Button</PrimaryButton>
      <SecondaryButton>Wrapping</SecondaryButton>
    </ButtonGroup>
  </ThemeProvider>
);
