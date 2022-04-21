import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@ndustrial/nd-theme-react';
import {
  UserDropdown,
  UserDropdownItem
} from '@ndustrial/nd-user-dropdown-react';

const DropdownContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
`;

const handleSelection = function (value) {
  switch (value) {
    case 'action1':
      return alert('Action 1 selected');
    case 'Action 2':
      return alert('Action 2 selected');
    case 'logOut':
      return alert('Logging out user');
  }
};

export let Example = () => (
  <ThemeProvider theme={defaultTheme}>
    <DropdownContainer>
      <UserDropdown
        avatarSrc="https://readjack.files.wordpress.com/2010/11/e-train1.jpg"
        onSelection={handleSelection}
        userName="Test User"
      >
        <UserDropdownItem value="action1">Action 1</UserDropdownItem>
        <UserDropdownItem>Action 2</UserDropdownItem>
        <UserDropdownItem value="logOut">Log Out</UserDropdownItem>
      </UserDropdown>
    </DropdownContainer>
  </ThemeProvider>
);
