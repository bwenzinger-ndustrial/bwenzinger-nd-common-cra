import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  DropdownButton,
  Menu,
  MenuItem,
  Wrapper
} from '@ndustrial/nd-dropdown-react';
import { defaultTheme } from '@ndustrial/nd-theme-react';

export let name = 'Dropdown Menu with managed state';

interface State {
  selectedValue?: string;
}

export class DropdownManagedStateExample extends Component<{}, State> {
  state = {
    selectedValue: 'No Selection'
  };

  handleSelection = (newSelection) => {
    this.setState({ selectedValue: newSelection });
  };

  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Fragment>
          <label>Counties</label>
          <Wrapper onSelection={this.handleSelection}>
            <DropdownButton>
              {this.state.selectedValue || 'No Selection'}
            </DropdownButton>
            <Menu>
              <MenuItem>Alamance</MenuItem>
              <MenuItem>Durham</MenuItem>
              <MenuItem>Orange</MenuItem>
              <MenuItem>Wake</MenuItem>
            </Menu>
          </Wrapper>
        </Fragment>
      </ThemeProvider>
    );
  }
}
