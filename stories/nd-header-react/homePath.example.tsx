import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from '@ndustrial/nd-header-react';
import { NsightLogo } from '@ndustrial/nd-icons-svg';
import { defaultTheme } from '@ndustrial/nd-theme-react';

export const name = 'Header with Home Path';

export const HomepathExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <Header
      appName="nSight"
      homePath={{ pathname: '/new-path', search: '?foo=bar' }}
      logoSrc={<NsightLogo />}
    />
  </ThemeProvider>
);
