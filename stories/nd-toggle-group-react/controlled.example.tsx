import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@ndustrial/nd-theme-react';

import { ToggleGroup, ToggleOption } from '@ndustrial/nd-toggle-group-react';

const GroupDescription = styled.p`
  margin-bottom: 8px;

  &:not(:first-child) {
    margin-top: 16px;
  }
`;

export function ControlledExample() {
  const [selectedFirstOption, setSelectedFirstOption] = useState('content1');
  const [selectedSecondOption, setSelectedSecondOption] = useState('content1');
  const [selectedDisabledOption, setSelectedDisabledOption] =
    useState<string>();

  return (
    <ThemeProvider theme={defaultTheme}>
      <GroupDescription>Regular</GroupDescription>
      <ToggleGroup>
        <ToggleOption
          isSelected={selectedFirstOption === 'content1'}
          onClick={() => setSelectedFirstOption('content1')}
        >
          Content 1
        </ToggleOption>
        <ToggleOption
          isSelected={selectedFirstOption === 'content2'}
          onClick={() => setSelectedFirstOption('content2')}
        >
          Content 2
        </ToggleOption>
        <ToggleOption
          isSelected={selectedFirstOption === 'content3'}
          onClick={() => setSelectedFirstOption('content3')}
        >
          Content 3
        </ToggleOption>
      </ToggleGroup>

      <GroupDescription>Small</GroupDescription>
      <ToggleGroup>
        <ToggleOption
          isSelected={selectedSecondOption === 'content1'}
          onClick={() => setSelectedSecondOption('content1')}
          size="small"
        >
          Content 1
        </ToggleOption>
        <ToggleOption
          isSelected={selectedSecondOption === 'content2'}
          onClick={() => setSelectedSecondOption('content2')}
          size="small"
        >
          Content 2
        </ToggleOption>
        <ToggleOption
          isSelected={selectedSecondOption === 'content3'}
          onClick={() => setSelectedSecondOption('content3')}
          size="small"
        >
          Content 3
        </ToggleOption>
      </ToggleGroup>

      <GroupDescription>Disabled</GroupDescription>
      <ToggleGroup>
        <ToggleOption
          disabled
          isSelected={selectedDisabledOption === 'content1'}
          onClick={() => setSelectedDisabledOption('content1')}
        >
          Content 1
        </ToggleOption>
        <ToggleOption
          disabled
          isSelected={selectedDisabledOption === 'content2'}
          onClick={() => setSelectedDisabledOption('content2')}
        >
          Content 2
        </ToggleOption>
        <ToggleOption
          disabled
          isSelected={selectedDisabledOption === 'content3'}
          onClick={() => setSelectedDisabledOption('content3')}
        >
          Content 3
        </ToggleOption>
      </ToggleGroup>
    </ThemeProvider>
  );
}
