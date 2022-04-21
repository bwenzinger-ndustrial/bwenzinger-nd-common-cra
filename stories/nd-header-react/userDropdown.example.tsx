import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Header } from '@ndustrial/nd-header-react';
import { NsightLogo } from '@ndustrial/nd-icons-svg';
import { defaultTheme } from '@ndustrial/nd-theme-react';
import {
  UserDropdown,
  UserDropdownItem
} from '@ndustrial/nd-user-dropdown-react';

const StyledUserDropdown = styled(UserDropdown)`
  display: flex;
  margin-left: auto;
  margin-right: 16px;
`;

const handleSelection = function (value) {
  switch (value) {
    case 'logOut':
      return alert('Logging out user');
  }
};

export const UserDropdownExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <Header appName="nSight" logoSrc={<NsightLogo />}>
      <StyledUserDropdown
        avatarSrc="https://readjack.files.wordpress.com/2010/11/e-train1.jpg"
        onSelection={handleSelection}
        userName="Test User"
      >
        <UserDropdownItem value="logOut">Log Out</UserDropdownItem>
      </StyledUserDropdown>
    </Header>
  </ThemeProvider>
);
