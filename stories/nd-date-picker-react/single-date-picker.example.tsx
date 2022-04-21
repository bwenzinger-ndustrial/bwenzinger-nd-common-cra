import moment from 'moment';
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@ndustrial/nd-theme-react';
import { SingleDatePicker as UnstyledSingleDatePicker } from '@ndustrial/nd-date-picker-react';

const SingleDatePicker = styled(UnstyledSingleDatePicker)``;

const DatePickerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${SingleDatePicker} {
    margin: 10px;
  }
`;

const initialState = {
  'previously-filled': moment('07/12/2020', 'MM/DD/YYYY'),
  basic: null,
  'with-label': null,
  'with-label-and-helper-text': null,
  required: null,
  disabled: null,
  'with-different-acccent-color': null
};

export const name = 'Single Date Picker';

export const SingleDatePickerExample = () => {
  const [dates, setDates] = useState(initialState);

  const handleDateChange = function (name: string) {
    return function (selectedDate: moment.Moment | null) {
      setDates(function (prevState) {
        return { ...prevState, [name]: selectedDate };
      });
    };
  };
  // id: string;

  // // required props for a functional interactive SingleDatePicker
  // date: moment.Moment | null;
  // focused: boolean;

  // onDateChange: (date: moment.Moment | null) => void;
  // onFocusChange: (arg: { focused: boolean }) => void;

  return (
    <ThemeProvider theme={defaultTheme}>
      <DatePickerContainer>
        <SingleDatePicker
          hasMonthYearSelection={false}
          id="basic"
          onDateChange={handleDateChange('basic')}
          value={dates['basic']}
        />
        <SingleDatePicker
          id="with-label"
          label="With Label (And Month/Year Dropdowns)"
          onDateChange={handleDateChange('with-label')}
          value={dates['with-label']}
        />
        <SingleDatePicker
          helperText="This is a description of the field"
          id="with-label-and-helper-text"
          label="With Label (And Helper Text)"
          onDateChange={handleDateChange('with-label-and-helper-text')}
          value={dates['with-label-and-helper-text']}
        />
        <SingleDatePicker
          id="required"
          label="Required"
          onDateChange={handleDateChange('required')}
          required
          value={dates['required']}
        />
        <SingleDatePicker
          disabled
          id="disabled"
          label="Disabled"
          onDateChange={handleDateChange('disabled')}
          value={dates['disabled']}
        />
        <SingleDatePicker
          id="previously-filled"
          label="Previously Filled"
          onDateChange={handleDateChange('previously-filled')}
          value={dates['previously-filled']}
        />
        <SingleDatePicker
          accentColor="#2ab7cc"
          id="with-different-acccent-color"
          label="With Different Accent Color"
          onDateChange={handleDateChange('with-different-acccent-color')}
          value={dates['with-different-acccent-color']}
        />
      </DatePickerContainer>
    </ThemeProvider>
  );
};
