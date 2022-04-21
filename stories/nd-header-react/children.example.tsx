import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Header } from '@ndustrial/nd-header-react';
import { NsightLogo } from '@ndustrial/nd-icons-svg';
import { defaultTheme } from '@ndustrial/nd-theme-react';

const StyledTitle = styled.h3`
  color: white;
  padding-left: 16px;
`;

export const name = 'Header With Children';

export const ChildrenExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <Header appName="nSight" logoSrc={<NsightLogo />}>
      <StyledTitle>This is a child</StyledTitle>
      <StyledTitle>This is a second child</StyledTitle>
    </Header>
  </ThemeProvider>
);
