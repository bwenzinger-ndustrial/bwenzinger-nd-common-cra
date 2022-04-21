import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@ndustrial/nd-theme-react';
import {
  DropdownButton,
  Menu,
  MenuItem,
  Wrapper
} from '@ndustrial/nd-dropdown-react';

export let DropdownExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <Wrapper onSelection={(value) => alert(value)}>
      <DropdownButton>Actions</DropdownButton>
      <Menu>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
      </Menu>
    </Wrapper>
  </ThemeProvider>
);
