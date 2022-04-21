import React from 'react';
import { Form, Field } from 'react-final-form';
import styled, { ThemeProvider } from 'styled-components';
import {
  PrimaryButton,
  SecondaryButton,
  ButtonGroup
} from '@ndustrial/nd-button-react';

import {
  FormLabel,
  FormControl,
  FormGroup,
  InputTextField,
  FormControlLabelAdapter,
  InputTextFieldAdapter
} from '@ndustrial/nd-inputs-react';
import { defaultTheme } from '@ndustrial/nd-theme-react';

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

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const initialValues = {
  firstName: '',
  lastName: '',
  cheese: false,
  mushrooms: false,
  pepperoni: false,
  sausage: false,
  sauce: 'red',
  instructions: ''
};

const required = (value: string) => (!value ? 'Required' : '');

export let FinalFormExample = () => {
  const onSubmit = async (values: {}) => {
    await sleep(300);
    window.alert(JSON.stringify(values));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <FormControl as="fieldset">
              <FormLabel as="legend">Delivery Info</FormLabel>
              <InlineFormControl>
                <Field<string>
                  name="firstName"
                  // @ts-ignore next-line this works for FormControlLabelAdapter but not here? seems the same
                  component={InputTextFieldAdapter}
                  label="First Name"
                  placeholder="First Name"
                  required
                  validate={required}
                />
                <Field<string>
                  name="lastName"
                  // @ts-ignore next-line this works for FormControlLabelAdapter but not here? seems the same
                  component={InputTextFieldAdapter}
                  label="Last Name"
                  placeholder="Last Name"
                  required
                  validate={required}
                />
              </InlineFormControl>
            </FormControl>
            <StyledFormControl as="fieldset">
              <FormLabel as="legend">Order Details</FormLabel>
              <StyledFormControl>
                <FormLabel>Sauce</FormLabel>
                <FormGroup>
                  <Field<string>
                    name="sauce"
                    component={FormControlLabelAdapter}
                    label="Red"
                    type="radio"
                    value="red"
                  />
                  <Field
                    name="sauce"
                    component={FormControlLabelAdapter}
                    label="White"
                    type="radio"
                    value="white"
                  />
                </FormGroup>
              </StyledFormControl>
              <StyledFormControl>
                <FormLabel>Toppings</FormLabel>
                <FormGroup>
                  <Field
                    name="cheese"
                    component={FormControlLabelAdapter}
                    label="Cheese"
                    type="checkbox"
                  />
                  <Field
                    name="mushrooms"
                    component={FormControlLabelAdapter}
                    label="Mushrooms"
                    type="checkbox"
                  />
                  <Field
                    name="pepperoni"
                    component={FormControlLabelAdapter}
                    label="Pepperoni"
                    type="checkbox"
                  />
                  <Field
                    name="sausage"
                    component={FormControlLabelAdapter}
                    label="Sausage"
                    type="checkbox"
                  />
                </FormGroup>
              </StyledFormControl>
            </StyledFormControl>
            <StyledFormControl>
              <Field
                name="instructions"
                component={InputTextFieldAdapter}
                label="Special Instructions"
                multiline
                placeholder="Enter any special instructions here ..."
              />
            </StyledFormControl>
            <ButtonGroup>
              <PrimaryButton type="submit" disabled={submitting}>
                Submit
              </PrimaryButton>
              <SecondaryButton
                type="button"
                disabled={submitting || pristine}
                onClick={form.reset}
              >
                Clear
              </SecondaryButton>
            </ButtonGroup>
            <CodeBox>{JSON.stringify(values)}</CodeBox>
          </form>
        )}
      />
    </ThemeProvider>
  );
};
