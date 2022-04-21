import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@ndustrial/nd-theme-react';
import {
  WarningTriangle,
  CheckCircle,
  Information
} from '@ndustrial/nd-icons-svg';

import {
  FlashMessage,
  FlashMessageGroup
} from '@ndustrial/nd-flash-message-react';

export const FlashMessageGroupExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <FlashMessageGroup>
      <FlashMessage
        icon={(props) => <WarningTriangle {...props} />}
        type="failure"
      >
        This is a test message <a href="#">with a link</a>
      </FlashMessage>
      <FlashMessage icon={(props) => <Information {...props} />} type="primary">
        Test Flash Message
      </FlashMessage>
      <FlashMessage icon={(props) => <CheckCircle {...props} />} type="success">
        Test Flash Message
      </FlashMessage>
    </FlashMessageGroup>
  </ThemeProvider>
);
