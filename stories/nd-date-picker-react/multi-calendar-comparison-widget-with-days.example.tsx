import { MultiCalendarComparisonWidget } from '@ndustrial/nd-date-picker-react';
import constants from '@ndustrial/nd-date-picker-react/src/constants';
import { defaultTheme } from '@ndustrial/nd-theme-react';
import React, { useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';

export const name = 'Multi Calendar Comparison Widget (with Date Range Picker)';

export const MultiCalendarComparisonWithDaysExample = () => {
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
        calendarType={constants.calendarTypes.DAY}
        autoFillComparisonRangeEndDate={true}
        // autoFillComparisonRangeEndDate={args.autoFillComparisonRangeEndDate}
      />
    </ThemeProvider>
  );
};
