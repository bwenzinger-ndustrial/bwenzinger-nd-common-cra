import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@ndustrial/nd-theme-react';
import { Information } from '@ndustrial/nd-icons-svg';
import { FlashMessage } from '@ndustrial/nd-flash-message-react';

export const PrimaryExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <FlashMessage icon={(props) => <Information {...props} />} type="primary">
      Test Flash Message
    </FlashMessage>
  </ThemeProvider>
);
