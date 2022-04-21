import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@ndustrial/nd-theme-react';
import { WarningTriangle } from '@ndustrial/nd-icons-svg';
import { FlashMessage } from '@ndustrial/nd-flash-message-react';

export const FailureExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <FlashMessage
      icon={(props) => <WarningTriangle {...props} />}
      type="failure"
    >
      Test Flash Message
    </FlashMessage>
  </ThemeProvider>
);
