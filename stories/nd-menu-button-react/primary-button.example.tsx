import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import {
  Button,
  Menu,
  MenuItem,
  Wrapper
} from '@ndustrial/nd-menu-button-react';
import { PrimaryButton } from '@ndustrial/nd-button-react';
import { defaultTheme } from '@ndustrial/nd-theme-react';

export const name = 'Primary Button Menu';

export const PrimaryButtonExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <Fragment>
      <Wrapper onSelection={(value) => alert(value)}>
        <Button>
          <PrimaryButton>Actions</PrimaryButton>
        </Button>
        <Menu>
          <>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
          </>
        </Menu>
      </Wrapper>
    </Fragment>
  </ThemeProvider>
);
