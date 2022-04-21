import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@ndustrial/nd-theme-react';
import { WarningCircle } from '@ndustrial/nd-icons-svg';
import { Aside } from '@ndustrial/nd-aside-react';

export const name = 'Basic Info Aside Message';

export const AsideInfoExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <Aside
      icon={(props) => <WarningCircle {...props} />}
      type="primary"
      title="Info Message"
    >
      Under real time pricing (RTP) tariffs, utility consumers are charged
      prices that vary over short time intervals, typically hourly, and are
      quoted one day or less in advance to reflect contemporaneous marginal
      supply costs. RTP differs from conventional rate tariffs, which are based
      on prices that are fixed for months or years at a time to reflect average,
      embedded supply costs. Due to these differences we are not currently able
      to provide the appropriate visualizations at this time.
    </Aside>
  </ThemeProvider>
);
