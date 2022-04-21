import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@ndustrial/nd-theme-react';
import { CheckCircle } from '@ndustrial/nd-icons-svg';
import { Aside } from '@ndustrial/nd-aside-react';

export const name = 'Basic Success Aside Message';

export const AsideSuccessExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <Aside
      icon={(props) => <CheckCircle {...props} />}
      type="success"
      title="Success Message"
    >
      This is a message saying what a good job you did! This is a message saying
      what a good job you did! This is a message saying what a good job you did!
      This is a message saying what a good job you did! This is a message saying
      what a good job you did! This is a message saying what a good job you did!
      This is a message saying what a good job you did! This is a message saying
      what a good job you did! This is a message saying what a good job you did!
      This is a message saying what a good job you did!
    </Aside>
  </ThemeProvider>
);
