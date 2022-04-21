import React, { FormEventHandler, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {
  Checkbox,
  FormControlLabel,
  FormLabel,
  FormControl,
  FormGroup
} from '@ndustrial/nd-inputs-react';
import { defaultTheme } from '@ndustrial/nd-theme-react';

const StyledFormControl = styled(FormControl)`
  margin-bottom: 10px;
`;

const CheckboxContainer = styled.div`
  margin: 10px;
  display: inline-block;
`;

export let name = 'Checkbox Inputs';

export let CheckboxExample = () => {
  const [state, setState] = useState({
    checkedA: false,
    checkedB: true,
    checkedC: true,
    checkedRequired: false
  });

  const handleChange =
    (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      // const handleChange = (name: string) => (event: any) => {
      setState({ ...state, [name]: event.target.checked });
    };

  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <StyledFormControl as="fieldset">
          <FormLabel as="legend">Checkbox Inputs</FormLabel>
          <div>
            <CheckboxContainer>
              <Checkbox
                aria-label="Option A"
                id="checkbox-input-a"
                checked={state.checkedA}
                onChange={handleChange('checkedA')}
                value="checkedA"
              />
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox
                aria-label="Option B"
                id="checkbox-input-b"
                checked={state.checkedB}
                onChange={handleChange('checkedB')}
                value="checkedB"
              />
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox
                aria-label="Option C"
                disabled
                id="checkbox-input-c"
                checked={state.checkedC}
                onChange={handleChange('checkedC')}
                value="checkedC"
              />
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox
                aria-label="Required Option"
                id="checkbox-input-required"
                checked={state.checkedRequired}
                onChange={handleChange('checkedRequired')}
                required
                value="checkedRequired"
              />
            </CheckboxContainer>
          </div>
        </StyledFormControl>
        <StyledFormControl as="fieldset">
          <FormLabel as="legend">Labeled Checkboxes</FormLabel>
          <FormGroup>
            <FormControlLabel
              id="label-checkbox-a"
              checked={state.checkedA}
              control={(props: any) => <Checkbox {...props} />}
              label="Option A"
              onChange={handleChange('checkedA')}
              value="checkedA"
            />
            <FormControlLabel
              id="label-checkbox-b"
              checked={state.checkedB}
              control={(props: any) => <Checkbox {...props} />}
              label="Option B"
              onChange={handleChange('checkedB')}
              value="checkedB"
            />
            <FormControlLabel
              id="label-checkbox-c"
              checked={state.checkedC}
              control={(props: any) => <Checkbox {...props} />}
              disabled
              label="Option C"
              onChange={handleChange('checkedC')}
              value="checkedC"
            />
            <FormControlLabel
              id="label-checkbox-required"
              checked={state.checkedRequired}
              control={(props: any) => <Checkbox {...props} />}
              label="Required Option"
              onChange={handleChange('checkedRequired')}
              required
              value="checkedRequired"
            />
          </FormGroup>
        </StyledFormControl>

        <StyledFormControl as="fieldset">
          <FormLabel as="legend">Inline Checkbox group</FormLabel>
          <FormGroup inline={true}>
            <FormControlLabel
              id="inline-label-checkbox-a"
              checked={state.checkedA}
              control={(props: any) => <Checkbox {...props} />}
              label="Option A"
              onChange={handleChange('checkedA')}
              value="checkedA"
            />
            <FormControlLabel
              id="inline-label-checkbox-b"
              checked={state.checkedB}
              control={(props: any) => <Checkbox {...props} />}
              label="Option B"
              onChange={handleChange('checkedB')}
              value="checkedB"
            />
            <FormControlLabel
              id="inline-label-checkbox-c"
              checked={state.checkedC}
              control={(props: any) => <Checkbox {...props} />}
              disabled
              label="Option C"
              onChange={handleChange('checkedC')}
              value="checkedC"
            />
            <FormControlLabel
              id="inline-label-checkbox-required"
              checked={state.checkedRequired}
              control={(props: any) => <Checkbox {...props} />}
              label="Required Option"
              onChange={handleChange('checkedRequired')}
              required
              value="checkedRequired"
            />
          </FormGroup>
        </StyledFormControl>
      </>
    </ThemeProvider>
  );
};
