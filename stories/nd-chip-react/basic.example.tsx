import { Close } from '@ndustrial/nd-icons-svg';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Chip, ChipIcon, ChipLabel } from '@ndustrial/nd-chip-react';
import { defaultTheme } from '@ndustrial/nd-theme-react';

export let BasicExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <Chip>
      <ChipIcon
        onClick={() => {
          alert('You clicked the Remove icon');
        }}
      >
        <Close />
      </ChipIcon>
      <ChipLabel>Test Chip</ChipLabel>
    </Chip>
  </ThemeProvider>
);
