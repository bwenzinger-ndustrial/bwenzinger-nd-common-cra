import {
  datePickerConstants,
  MultiCalendarComparisonWidget
} from '@ndustrial/nd-date-picker-react';
import { defaultTheme } from '@ndustrial/nd-theme-react';
import React, { useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';

export const name = 'Multi Calendar Comparison Widget (with Month Picker)';

export const MultiCalendarComparisonWithMonthsExample = () => {
  const [primaryDates, setPrimaryDates] = useState({ from: null, to: null });
  const [comparisonDates, setComparisonDates] = useState({
    from: null,
    to: null
  });

  const onPrimaryDatesChange = useCallback(
    ({ from, to }) => {
      setPrimaryDates({ from, to });
    },
    [setPrimaryDates]
  );

  const onComparisonDatesChange = useCallback(
    ({ from, to }) => {
      setComparisonDates({ from, to });
    },
    [setComparisonDates]
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <MultiCalendarComparisonWidget
        label={'I want to compare'}
        onPrimaryDatesChange={onPrimaryDatesChange}
        onComparisonDatesChange={onComparisonDatesChange}
        primaryDates={primaryDates}
        comparisonDates={comparisonDates}
        calendarType={datePickerConstants.calendarTypes.MONTH}
        // autoFillComparisonRangeEndDate={boolean(
        //   'auto fill comparison range',
        //   false
        // )}
      />
    </ThemeProvider>
  );
};
