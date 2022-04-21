import React from 'react';
import { Form, Field } from 'react-final-form';
import styled, { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@ndustrial/nd-theme-react';
import { SingleDatePickerAdapter as UnstyledSingleDatePickerAdapter } from '@ndustrial/nd-date-picker-react';
import { FormControl } from '@ndustrial/nd-inputs-react';
import { FieldValidator } from 'final-form';

const initialValues = {};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const SingleDatePickerAdapter = styled(UnstyledSingleDatePickerAdapter)``;

const InlineFormControl = styled(FormControl)`
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 10px;

  ${SingleDatePickerAdapter} {
    margin-right: 10px;
  }
`;

const CodeBox = styled.pre`
  border: 1px solid #ccc;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;
// (value: FieldValue, allValues: object, meta?: FieldState<FieldValue> | undefined)
const required: FieldValidator<moment.Moment> = (value, values, meta) =>
  !value ? 'Required' : '';

export const name = 'Single Date Picker (Final Form Adapter)';

export const SingleDatePickerFinalFormExample = () => {
  const onSubmit = async (values: any) => {
    await sleep(300);
    window.alert(JSON.stringify(values));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <InlineFormControl>
              <Field
                name="startDate"
                component={SingleDatePickerAdapter}
                placeholder="Start Date"
                validate={required}
              />
              <Field
                name="endDate"
                component={SingleDatePickerAdapter}
                placeholder="End Date"
                validate={required}
              />
            </InlineFormControl>
            <CodeBox>{JSON.stringify(values)}</CodeBox>
          </form>
        )}
      />
    </ThemeProvider>
  );
};
