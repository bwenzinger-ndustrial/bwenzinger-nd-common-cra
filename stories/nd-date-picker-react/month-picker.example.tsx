import React, { useState, useCallback } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@ndustrial/nd-theme-react';
import { MonthPicker as _MonthPicker } from '@ndustrial/nd-date-picker-react';

const MonthPicker = styled(_MonthPicker)``;

const MonthPickerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 310px; /* this should be a constant somewhere */
`;

export const name = 'Month Range Picker';

export const MonthPickerExample = () => {
  const [range, setRange] = useState({ from: null, to: null });

  const onDatesChange = useCallback(
    ({ startDate, endDate }) => {
      setRange({ from: startDate, to: endDate });
    },
    [setRange]
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <MonthPickerContainer>
        <MonthPicker range={range} onSetRange={onDatesChange} />
      </MonthPickerContainer>
    </ThemeProvider>
  );
};
