import React, { useRef, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  PrimaryButton,
  SecondaryButton,
  ButtonGroup
} from '@ndustrial/nd-button-react';

import {
  Checkbox,
  FormControlLabel,
  FormLabel,
  FormControl,
  FormGroup,
  InputTextField,
  InputText,
  RadioButton,
  RadioGroup
} from '@ndustrial/nd-inputs-react';
import { defaultTheme } from '@ndustrial/nd-theme-react';
import {
  NdCheckboxProps,
  NdRadioButtonProps
} from '@ndustrial/nd-inputs-react';

const StyledFormControl = styled(FormControl)`
  margin-bottom: 10px;

  ${FormControl} {
    margin: 10px;
  }
`;

const InlineFormControl = styled(StyledFormControl)`
  flex-direction: row;
  flex-wrap: wrap;

  ${InputTextField} {
    min-width: 150px;
  }
`;

const CodeBox = styled.pre`
  border: 1px solid #ccc;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

interface FormState {
  [key: string]: boolean | string;
}

const intialFormState = {
  firstName: '',
  lastName: '',
  cheese: false,
  mushrooms: false,
  pepperoni: false,
  sausage: false,
  sauce: 'red'
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export let FormExample = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState<FormState>(intialFormState);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);

  const handleChange =
    (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [name]: event.target.value });
    };

  const handleCheck =
    (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [name]: event.target.checked });
    };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await sleep(300);
    window.alert(JSON.stringify(values));
    setIsSubmitting(false);
  };

  const handleClear = () => {
    setValues(intialFormState);
  };

  const requiredAny = (fields: string[]) => {
    return fields
      .map((field) => values[field])
      .every((value) => value === false);
  };

  const invalidToppings = requiredAny([
    'cheese',
    'mushrooms',
    'pepperoni',
    'sausage'
  ]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <form onSubmit={handleSubmit}>
        <FormControl as="fieldset">
          <FormLabel as="legend">Delivery Info</FormLabel>
          <InlineFormControl>
            <InputTextField
              ref={inputRef}
              id="firstName"
              helperText={!values.firstName ? 'Required' : ''}
              invalid={!values.firstName}
              label="First Name"
              onChange={handleChange('firstName')}
              placeholder="First Name"
              required
              value={values.firstName as string}
            />
            <InputText
              ref={inputRef2}
              // text={'test'}
              placeholder={'Enter a group name'}
            />
            <InputTextField
              id="lastName"
              helperText={!values.lastName ? 'Required' : ''}
              invalid={!values.lastName}
              label="Last Name"
              onChange={handleChange('lastName')}
              placeholder="Last Name"
              required
              value={values.lastName as string}
            />
          </InlineFormControl>
        </FormControl>
        <StyledFormControl as="fieldset">
          <FormLabel as="legend">Order Details</FormLabel>
          <StyledFormControl>
            <FormLabel>Sauce</FormLabel>
            <RadioGroup
              id="sauce"
              onChange={handleChange('sauce')}
              value={values.sauce as string}
            >
              <FormControlLabel
                control={(props: NdRadioButtonProps) => (
                  <RadioButton {...props} />
                )}
                label="Red"
                value="red"
              />
              <FormControlLabel
                control={(props: NdRadioButtonProps) => (
                  <RadioButton {...props} />
                )}
                label="White"
                value="white"
              />
            </RadioGroup>
          </StyledFormControl>
          <StyledFormControl
            helperText={invalidToppings ? 'Please choose one' : ''}
            invalid={invalidToppings}
            label="Toppings"
            required
          >
            <FormGroup>
              <FormControlLabel
                checked={values.cheese}
                control={(props: NdCheckboxProps) => <Checkbox {...props} />}
                id="cheese"
                label="Cheese"
                onChange={handleCheck('cheese')}
              />
              <FormControlLabel
                checked={values.mushrooms}
                control={(props: NdCheckboxProps) => <Checkbox {...props} />}
                id="mushrooms"
                label="Mushrooms"
                onChange={handleCheck('mushrooms')}
              />
              <FormControlLabel
                checked={values.pepperoni}
                control={(props: NdCheckboxProps) => <Checkbox {...props} />}
                id="pepperoni"
                label="Pepperoni"
                onChange={handleCheck('pepperoni')}
              />
              <FormControlLabel
                checked={values.sausage}
                control={(props: NdCheckboxProps) => <Checkbox {...props} />}
                id="sausage"
                label="Sausage"
                onChange={handleCheck('sausage')}
              />
            </FormGroup>
          </StyledFormControl>
        </StyledFormControl>
        <ButtonGroup>
          <PrimaryButton type="submit" disabled={isSubmitting}>
            Submit
          </PrimaryButton>
          <SecondaryButton
            type="button"
            disabled={isSubmitting}
            onClick={handleClear}
          >
            Clear
          </SecondaryButton>
        </ButtonGroup>
        <CodeBox>{JSON.stringify(values)}</CodeBox>
      </form>
    </ThemeProvider>
  );
};
