import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@ndustrial/nd-theme-react';
import { PrimaryButton } from '@ndustrial/nd-button-react';

export let LinkExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <PrimaryButton as="a" href="/">
      This will take you to the storybook root
    </PrimaryButton>
  </ThemeProvider>
);
