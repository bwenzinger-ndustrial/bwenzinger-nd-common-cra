import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  FormControlLabel,
  FormLabel,
  InputTextField,
  RadioGroup,
  RadioButton
} from '@ndustrial/nd-inputs-react';
import * as icons from '@ndustrial/nd-icons-svg';
import { defaultTheme } from '@ndustrial/nd-theme-react';

const colorSchemes = {
  blackOnWhite: {
    bgColor: '#fff',
    borderColor: '#000',
    strokeColor: '#000',
    title: 'Black on White'
  },
  whiteOnPrimary: {
    bgColor: defaultTheme.colors.primary,
    borderColor: defaultTheme.colors.primary,
    strokeColor: '#fff',
    title: 'White On Primary'
  }
};

const Content = styled.div`
  > * {
    margin-bottom: 10px;
  }

  ${InputTextField} {
    max-width: 410px;
  }
`;

const InputContainer = styled.div`
  > * {
    margin-bottom: 10px;
  }
`;

const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const IconCard = styled.div<any>`
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 200px;
  margin-bottom: 10px;
  margin-right: 10px;
  width: 200px;
`;

const IconContainer = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
`;

const Description = styled.p<any>`
  align-items: center;
  color: ${({ textColor }) => textColor};
  display: flex;
  height: 50px;
  margin: 0;
  word-break: break-word;
`;

export const name = 'Icons';

export const Example = () => {
  const [scheme, setScheme] = useState('blackOnWhite');
  const [searchTerm, setSearchTerm] = useState('');
  const CloseIcon = icons['Close'];
  const { bgColor, borderColor, strokeColor } = colorSchemes[scheme];

  return (
    <ThemeProvider theme={defaultTheme}>
      <Content>
        <InputContainer>
          <RadioGroup
            onChange={(e) => setScheme(e.currentTarget.value)}
            value={scheme}
          >
            <FormLabel>Color Schemes</FormLabel>
            {Object.keys(colorSchemes).map((colorScheme) => {
              return (
                <FormControlLabel
                  key={colorScheme}
                  control={(props) => <RadioButton {...props} />}
                  value={colorScheme}
                  label={colorSchemes[colorScheme].title}
                />
              );
            })}
          </RadioGroup>
          <InputTextField
            id="clearable-text-field"
            label="Search by Name"
            onChange={(e) => setSearchTerm(e.currentTarget.value)}
            placeholder="Search for an icon"
            value={searchTerm}
            endIcon={
              searchTerm ? (
                <CloseIcon stroke="#0B588A" onClick={() => setSearchTerm('')} />
              ) : undefined
            }
          />
        </InputContainer>

        <Icons>
          {Object.keys(icons)
            .filter((iconName) =>
              iconName.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((iconName) => {
              const Component = icons[iconName];

              return (
                <IconCard
                  bgColor={bgColor}
                  borderColor={borderColor}
                  key={iconName}
                >
                  <IconContainer>
                    <Component stroke={strokeColor} height={50} width={50} />
                  </IconContainer>
                  <Description textColor={strokeColor}>{iconName}</Description>
                </IconCard>
              );
            })}
        </Icons>
      </Content>
    </ThemeProvider>
  );
};
