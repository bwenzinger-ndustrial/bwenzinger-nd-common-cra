import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@ndustrial/nd-theme-react';
import { CheckCircle } from '@ndustrial/nd-icons-svg';
import { FlashMessage } from '@ndustrial/nd-flash-message-react';

export const SuccessExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <FlashMessage icon={(props) => <CheckCircle {...props} />} type="success">
      Test Flash Message
    </FlashMessage>
  </ThemeProvider>
);
