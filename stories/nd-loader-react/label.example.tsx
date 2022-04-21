import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@ndustrial/nd-theme-react';
import { Loader } from '@ndustrial/nd-loader-react';

export const name = 'Loader with Label';

export const WithLabelExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <Loader label="Your content is loading..." />
  </ThemeProvider>
);
