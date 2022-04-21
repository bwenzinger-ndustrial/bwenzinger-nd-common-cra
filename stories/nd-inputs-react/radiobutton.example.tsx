import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {
  RadioButton,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from '@ndustrial/nd-inputs-react';
import { defaultTheme } from '@ndustrial/nd-theme-react';
import { NdRadioButtonProps } from '@ndustrial/nd-inputs-react';

const StyledFormControl = styled(FormControl)`
  margin-bottom: 10px;
`;

const RadioButtonContainer = styled.div`
  margin: 10px;
  display: inline-block;
`;

export let RadioButtonExample = () => {
  const [value, setValue] = useState('a');

  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <StyledFormControl as="fieldset">
          <FormLabel as="legend">Radio Button Inputs</FormLabel>
          <div>
            <RadioButtonContainer>
              <RadioButton
                id="basic-radio"
                onChange={(e) => setValue(e.currentTarget.value)}
                checked={value === 'a'}
                value="a"
              />
            </RadioButtonContainer>
            <RadioButtonContainer>
              <RadioButton
                id="basic-radio"
                onChange={(e) => setValue(e.currentTarget.value)}
                checked={value === 'b'}
                value="b"
              />
            </RadioButtonContainer>
            <RadioButtonContainer>
              <RadioButton
                id="basic-radio"
                onChange={(e) => setValue(e.currentTarget.value)}
                checked={value === 'c'}
                disabled
                value="c"
              />
            </RadioButtonContainer>
          </div>
        </StyledFormControl>
        <StyledFormControl as="fieldset">
          <FormLabel as="legend">Labeled Radio Button Group</FormLabel>
          <RadioGroup
            id="radio-group"
            onChange={(e) => setValue(e.currentTarget.value)}
            value={value}
          >
            <FormControlLabel
              control={(props: NdRadioButtonProps) => (
                <RadioButton {...props} />
              )}
              value="a"
              label="Option A"
            />
            <FormControlLabel
              control={(props: NdRadioButtonProps) => (
                <RadioButton {...props} />
              )}
              value="b"
              label="Option B"
            />
            <FormControlLabel
              control={(props: NdRadioButtonProps) => (
                <RadioButton {...props} />
              )}
              disabled
              value="c"
              label="Option C"
            />
          </RadioGroup>
        </StyledFormControl>

        <StyledFormControl as="fieldset">
          <FormLabel as="legend">Inline Radio Button Group</FormLabel>
          <RadioGroup
            id="inline-radio-group"
            inline
            onChange={(e) => setValue(e.currentTarget.value)}
            value={value}
          >
            <FormControlLabel
              control={(props: NdRadioButtonProps) => (
                <RadioButton {...props} />
              )}
              value="a"
              label="Option A"
            />
            <FormControlLabel
              control={(props: NdRadioButtonProps) => (
                <RadioButton {...props} />
              )}
              value="b"
              label="Option B"
            />
            <FormControlLabel
              control={(props: NdRadioButtonProps) => (
                <RadioButton {...props} />
              )}
              disabled
              value="c"
              label="Option C"
            />
          </RadioGroup>
        </StyledFormControl>
      </>
    </ThemeProvider>
  );
};
