import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@ndustrial/nd-theme-react';
import {
  ButtonGroup,
  WarningButton,
  PrimaryButton,
  SecondaryButton,
} from '@ndustrial/nd-button-react';
import { Star as StarIcon } from '@ndustrial/nd-icons-svg';

const Spacer = styled.div`
  padding-bottom: 16px;
`;

const GroupDescription = styled.p`
  margin-bottom: 8px;
  margin-top: 0;
`;

export let ButtonsExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <React.Fragment>
      <Spacer>
        <GroupDescription>Primary</GroupDescription>
        <ButtonGroup>
          <PrimaryButton>Button</PrimaryButton>
          <PrimaryButton icon={<StarIcon />}>Button</PrimaryButton>
          <PrimaryButton icon={<StarIcon />} />
        </ButtonGroup>
      </Spacer>

      <Spacer>
        <GroupDescription>Primary (Disabled)</GroupDescription>
        <ButtonGroup>
          <PrimaryButton disabled>Button</PrimaryButton>
          <PrimaryButton disabled icon={<StarIcon />}>
            Button
          </PrimaryButton>
          <PrimaryButton disabled icon={<StarIcon />} />
        </ButtonGroup>
      </Spacer>

      <Spacer>
        <GroupDescription>Secondary</GroupDescription>
        <ButtonGroup>
          <SecondaryButton>Button</SecondaryButton>
          <SecondaryButton icon={<StarIcon />}>Button</SecondaryButton>
          <SecondaryButton icon={<StarIcon />} />
        </ButtonGroup>
      </Spacer>

      <Spacer>
        <GroupDescription>Secondary (Disabled)</GroupDescription>
        <ButtonGroup>
          <SecondaryButton disabled>Button</SecondaryButton>
          <SecondaryButton disabled icon={<StarIcon />}>
            Button
          </SecondaryButton>
          <SecondaryButton disabled icon={<StarIcon />} />
        </ButtonGroup>
      </Spacer>

      <Spacer>
        <GroupDescription>Warning</GroupDescription>
        <ButtonGroup>
          <WarningButton>Button</WarningButton>
          <WarningButton icon={<StarIcon />}>Button</WarningButton>
          <WarningButton icon={<StarIcon />} />
        </ButtonGroup>
      </Spacer>

      <Spacer>
        <GroupDescription>Warning (Disabled)</GroupDescription>
        <ButtonGroup>
          <WarningButton disabled>Button</WarningButton>
          <WarningButton disabled icon={<StarIcon />}>
            Button
          </WarningButton>
          <WarningButton disabled icon={<StarIcon />} />
        </ButtonGroup>
      </Spacer>
    </React.Fragment>
  </ThemeProvider>
);
