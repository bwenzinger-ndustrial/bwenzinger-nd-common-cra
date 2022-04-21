import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { GlobalStyle } from '@ndustrial/nd-theme-react';
import { DateRangePickerExample } from './date-range-picker.example';
import { MonthPickerExample } from './month-picker.example';
import { MultiCalendarComparisonWithDaysExample } from './multi-calendar-comparison-widget-with-days.example';
import { MultiCalendarComparisonWithMonthsExample } from './multi-calendar-comparison-widget-with-months.example';
import { SingleDatePickerFinalFormExample } from './single-date-picker-final-form.example';
import { SingleDatePickerExample } from './single-date-picker.example';
import Dummy from '../dummy';

export default {
  title: 'nd-date-picker-react',
  component: Dummy
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   autoFillComparisonRangeEndDate: { control: 'boolean' },
  // },
} as ComponentMeta<typeof Dummy>;

export const DateRangePicker = () => <DateRangePickerExample />;
export const MonthPicker = () => <MonthPickerExample />;
export const MultiCalendarComparisonWithDays = () => (
  <MultiCalendarComparisonWithDaysExample />
);
MultiCalendarComparisonWithDays.storyName =
  'Multi Calendar Comparison Widget (with Date Range Picker)';
// MultiCalendarComparisonWithWithDays.args = {
//   autoFillComparisonRangeEndDate: false
// }
export const MultiCalendarComparisonWithMonths = () => (
  <MultiCalendarComparisonWithMonthsExample />
);
MultiCalendarComparisonWithMonths.storyName =
  'Multi Calendar Comparison Widget (with Month Picker)';
export const SingleDatePickerFinalForm = () => (
  <SingleDatePickerFinalFormExample />
);
SingleDatePickerFinalForm.storyName =
  'Multi Calendar Comparison Widget (Final Form Adapter)';
export const SingleDatePicker = () => <SingleDatePickerExample />;
