import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@ndustrial/nd-theme-react';
import { Loader } from '@ndustrial/nd-loader-react';

export const name = 'Basic Loader';

export const BasicExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <Loader />
  </ThemeProvider>
);
