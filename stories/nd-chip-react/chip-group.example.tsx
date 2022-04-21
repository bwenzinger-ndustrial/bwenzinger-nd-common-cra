import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Close, Drag } from '@ndustrial/nd-icons-svg';

import { Chip, ChipGroup, ChipIcon, ChipLabel } from '@ndustrial/nd-chip-react';
import { defaultTheme } from '@ndustrial/nd-theme-react';

export const ChipGroupExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <ChipGroup>
      <Chip>
        <ChipIcon
          onClick={() => {
            alert('You clicked the Remove icon');
          }}
        >
          <Close />
        </ChipIcon>
        <ChipLabel>Chip Remove Icon</ChipLabel>
      </Chip>
      <Chip>
        <ChipIcon
          onClick={() => {
            alert('You clicked the Drag icon');
          }}
        >
          <Drag />
        </ChipIcon>
        <ChipLabel>Chip Drag Icon</ChipLabel>
      </Chip>
      <Chip>
        <ChipLabel>No Icon</ChipLabel>
      </Chip>
      <Chip>
        <ChipLabel>Icon on Right</ChipLabel>
        <ChipIcon
          onClick={() => {
            alert('You clicked the Remove icon on the right');
          }}
        >
          <Close />
        </ChipIcon>
      </Chip>
    </ChipGroup>
  </ThemeProvider>
);
