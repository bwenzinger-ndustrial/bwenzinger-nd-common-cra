import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { PrimaryButton } from '@ndustrial/nd-button-react';
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

const TooltipText = styled.p`
  margin: 0;
`;

const ActionsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CallToAction = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.75px;
  line-height: 1.14;
  margin: 0;
  text-transform: uppercase;

  &:hover {
    color: #fff;
  }
`;

const TooltipButton = styled(PrimaryButton)`
  cursor: pointer;
  height: 40px;
  font-weight: 500;
  text-transform: uppercase;
  width: 100px;
`;

const Content = styled.div`
  ${TooltipText} {
    margin-bottom: 16px;
  }
`;

function TooltipContent() {
  return (
    <Content>
      <TooltipText>
        This is a longer text description with a call to action or option to
        learn more. Typically used for training/learning purposes.
      </TooltipText>
      <ActionsContainer>
        <CallToAction>Learn More</CallToAction>
        <TooltipButton>Ok</TooltipButton>
      </ActionsContainer>
    </Content>
  );
}

export const TooltipInteractiveExample = (args: any) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Text>
          Field Label:{' '}
          <Tooltip
            content={<TooltipContent />}
            interactive
            placement={args.placement}
            tagName="span"
          >
            <InformationIcon />
          </Tooltip>
        </Text>
      </Container>
    </ThemeProvider>
  );
};
