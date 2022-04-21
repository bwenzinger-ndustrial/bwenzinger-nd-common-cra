import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {
  Tooltip as UnstyledTooltip,
  TOOLTIP_PLACEMENTS
} from '@ndustrial/nd-tooltip-react';
import { defaultTheme } from '@ndustrial/nd-theme-react';

const Tooltip = styled(UnstyledTooltip)`
  border-bottom: 1px dashed ${({ theme }) => theme.colors.primary};
  display: inline-flex;
`;

const Container = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 12px;
  letter-spacing: 0.4px;
  line-height: 1.33;
`;

export const name = 'Description';

export const TooltipDescriptionExample = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Text>
          Body copy with{' '}
          <Tooltip
            content="This briefly describes the associated text."
            placement="bottom-start"
            tagName="span"
          >
            <div>definition</div>
          </Tooltip>{' '}
          hoverstate.
        </Text>
      </Container>
    </ThemeProvider>
  );
};
