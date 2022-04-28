import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  Button,
  Menu,
  MenuItem,
  Wrapper,
} from '@ndustrial/nd-menu-button-react';
import { defaultTheme } from '@ndustrial/nd-theme-react';

export const BasicExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <Wrapper onSelection={(value: any, event: any) => alert(value)}>
      <Button>Actions</Button>
      <Menu>
        <>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
        </>
      </Menu>
    </Wrapper>
  </ThemeProvider>
);
