import moment from 'moment';
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { defaultTheme, GlobalStyle } from '@ndustrial/nd-theme-react';
import { DateRangePicker as UnstyledDateRangePicker } from '@ndustrial/nd-date-picker-react';
import { ComponentMeta } from '@storybook/react';

const DateRangePicker = styled(UnstyledDateRangePicker)``;

const DatePickerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${DateRangePicker} {
    margin: 10px;
  }
`;

const initialState = {
  'previously-filled': {
    startDate: moment('07/12/2020', 'MM/DD/YYYY'),
    endDate: moment('08/12/2020', 'MM/DD/YYYY')
  }
};

// export const storyName = 'Date Range Picker testing';

export const DateRangePickerExample = () => {
  const [dates, setDates] = useState(initialState);

  const handleDateChange = function (name) {
    return function ({ endDate, startDate }) {
      setDates(function (prevState) {
        const prev = { ...prevState[name] };

        if (endDate) {
          prev.endDate = endDate;
        }

        if (startDate) {
          prev.startDate = startDate;
        }

        return {
          ...prevState,
          [name]: {
            ...prev
          }
        };
      });
    };
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <DatePickerContainer>
        <DateRangePicker
          endDate={dates['basic'] && dates['basic'].endDate}
          endDateId="basic-end-date"
          hasMonthYearSelection={false}
          onDatesChange={handleDateChange('basic')}
          startDate={dates['basic'] && dates['basic'].startDate}
          startDateId="basic-start-date"
        />
        <DateRangePicker
          endDate={dates['with-label'] && dates['with-label'].endDate}
          endDateId="with-label-end-date"
          label="With Label (And Month/Year Dropdowns)"
          onDatesChange={handleDateChange('with-label')}
          startDate={dates['with-label'] && dates['with-label'].startDate}
          startDateId="with-label-start-date"
        />
        <DateRangePicker
          endDate={
            dates['with-label-and-helper-text'] &&
            dates['with-label-and-helper-text'].endDate
          }
          endDateId="with-label-and-helper-text-end-date"
          helperText="This is a description of the field"
          label="With Label (And Helper Text)"
          onDatesChange={handleDateChange('with-label-and-helper-text')}
          startDate={
            dates['with-label-and-helper-text'] &&
            dates['with-label-and-helper-text'].startDate
          }
          startDateId="with-label-and-helper-text-start-date"
        />
        <DateRangePicker
          endDate={dates['required'] && dates['required'].endDate}
          endDateId="required-end-date"
          label="Required"
          onDatesChange={handleDateChange('required')}
          required
          startDate={dates['required'] && dates['required'].startDate}
          startDateId="required-start-date"
        />
        <DateRangePicker
          disabled
          endDate={dates['disabled'] && dates['disabled'].endDate}
          endDateId="disabled-end-date"
          label="Disabled"
          onDatesChange={handleDateChange('disabled')}
          startDate={dates['disabled'] && dates['disabled'].startDate}
          startDateId="disabled-start-date"
        />
        <DateRangePicker
          endDate={
            dates['previously-filled'] && dates['previously-filled'].endDate
          }
          endDateId="previously-filled-end-date"
          label="Previously Filled"
          onDatesChange={handleDateChange('previously-filled')}
          startDate={
            dates['previously-filled'] && dates['previously-filled'].startDate
          }
          startDateId="previously-filled-start-date"
        />
        <DateRangePicker
          accentColor="#2ab7cc"
          endDate={
            dates['with-different-acccent-color'] &&
            dates['with-different-acccent-color'].endDate
          }
          endDateId="with-different-acccent-color-end-date"
          label="With Different Accent Color"
          onDatesChange={handleDateChange('with-different-acccent-color')}
          startDate={
            dates['with-different-acccent-color'] &&
            dates['with-different-acccent-color'].startDate
          }
          startDateId="with-different-acccent-color-start-date"
        />
      </DatePickerContainer>
    </ThemeProvider>
  );
};

// // @ts-ignore next-line
// DateRangePickerExample.storyName = 'Date Range Picker testing';
