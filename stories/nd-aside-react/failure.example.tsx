import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@ndustrial/nd-theme-react';
import { WarningTriangle } from '@ndustrial/nd-icons-svg';
import { Aside } from '@ndustrial/nd-aside-react';
import { ComponentMeta } from '@storybook/react';

// export let name = 'Basic Failure Aside Message';

export const AsideFailureExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <Aside
      icon={(props) => <WarningTriangle {...props} />}
      type="failure"
      title="Danger Message"
    >
      This decision will have potentially destructive results. This decision
      will have potentially destructive results. This decision will have
      potentially destructive results. This decision will have potentially
      destructive results. This decision will have potentially destructive
      results. This decision will have potentially destructive results. This
      decision will have potentially destructive results. This decision will
      have potentially destructive results. This decision will have potentially
      destructive results. This decision will have potentially destructive
      results.
    </Aside>
  </ThemeProvider>
);
