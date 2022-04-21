import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Information } from '@ndustrial/nd-icons-svg';
import {
  Tooltip as UnstyledTooltip,
  TOOLTIP_PLACEMENTS
} from '@ndustrial/nd-tooltip-react';
import { defaultTheme } from '@ndustrial/nd-theme-react';

const Tooltip = styled(UnstyledTooltip)`
  display: inline-flex;
`;

const Container = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InformationIcon = styled(Information)`
  font-size: 16px;
  vertical-align: text-bottom;
`;

const Text = styled.p`
  align-items: center;
  color: ${({ theme }) => theme.colors.textLight};
  display: flex;
  font-size: 12px;
  letter-spacing: 0.4px;
  line-height: 1.33;

  ${Tooltip} {
    margin-left: 0.75em;
  }
`;

export const TooltipDefinitionExample = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Text>
          Field Label:{' '}
          <Tooltip
            content="This briefly describes the associated field."
            placement="top"
            tagName="span"
          >
            <InformationIcon />
          </Tooltip>
        </Text>
      </Container>
    </ThemeProvider>
  );
};
