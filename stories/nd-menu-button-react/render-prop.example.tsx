import React, { Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {
  Button,
  Menu,
  MenuItem,
  Wrapper
} from '@ndustrial/nd-menu-button-react';
import { PrimaryButton } from '@ndustrial/nd-button-react';
import { defaultTheme } from '@ndustrial/nd-theme-react';
import { WrapperState } from 'react-aria-menubutton';

const ExampleWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
`;

export const RenderPropExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <ExampleWrapper onSelection={(value) => alert(value)}>
      {({ isOpen }: WrapperState) => (
        <Fragment>
          <p>
            You can pass a render prop that received information about if the
            menu is open instead of just regular children.
          </p>
          <p>The menu is currently: {isOpen ? 'open' : 'closed'}.</p>
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
        </Fragment>
      )}
    </ExampleWrapper>
  </ThemeProvider>
);
