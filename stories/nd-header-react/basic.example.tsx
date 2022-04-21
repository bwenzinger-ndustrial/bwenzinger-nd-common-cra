import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from '@ndustrial/nd-header-react';
import { NsightLogo } from '@ndustrial/nd-icons-svg';
import { defaultTheme } from '@ndustrial/nd-theme-react';

export const name = 'Basic Header';

export const BasicExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <Header appName="nSight" logoSrc={<NsightLogo />} />
  </ThemeProvider>
);
