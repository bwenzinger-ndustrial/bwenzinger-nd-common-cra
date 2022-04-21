import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@ndustrial/nd-theme-react';
import { WarningTriangle } from '@ndustrial/nd-icons-svg';
import { FlashMessage } from '@ndustrial/nd-flash-message-react';

export const FlashMessageActionExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <FlashMessage
      dismissible
      icon={(props) => <WarningTriangle {...props} />}
      onDismiss={() => console.log('Flash message dimissed')} // eslint-disable-line no-console
      type="failure"
    >
      Test Flash Message
    </FlashMessage>
  </ThemeProvider>
);
