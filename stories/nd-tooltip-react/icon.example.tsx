import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Print } from '@ndustrial/nd-icons-svg';
import {
  Tooltip as UnstyledTooltip,
  TOOLTIP_PLACEMENTS
} from '@ndustrial/nd-tooltip-react';
import { defaultTheme } from '@ndustrial/nd-theme-react';

const Tooltip = styled(UnstyledTooltip)`
  background-color: #f5f5f5;
  padding: 12px;
`;

const Container = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PrintIcon = styled(Print)`
  font-size: 20px;
`;

export const TooltipIconExample = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Tooltip content="Print" placement="top" tagName="span">
          <PrintIcon />
        </Tooltip>
      </Container>
    </ThemeProvider>
  );
};
