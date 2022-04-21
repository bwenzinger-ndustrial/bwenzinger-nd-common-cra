import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@ndustrial/nd-theme-react';
import {
  WarningTriangle,
  CheckCircle,
  WarningCircle
} from '@ndustrial/nd-icons-svg';
import { Aside, AsideGroup } from '@ndustrial/nd-aside-react';

// export let name = 'Group of Aside Messages';

export const AsideGroupExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <AsideGroup>
      <Aside
        icon={(props) => <CheckCircle type="success" {...props} />}
        type="success"
        title="Success Message"
      >
        This is a message saying what a good job you did! This is a message
        saying what a good job you did! This is a message saying what a good job
        you did! This is a message saying what a good job you did! This is a
        message saying what a good job you did! This is a message saying what a
        good job you did! This is a message saying what a good job you did! This
        is a message saying what a good job you did! This is a message saying
        what a good job you did! This is a message saying what a good job you
        did!
      </Aside>
      <Aside
        icon={(props) => <WarningCircle {...props} />}
        type="primary"
        title="Info Message"
      >
        Under real time pricing (RTP) tariffs, utility consumers are charged
        prices that vary over short time intervals, typically hourly, and are
        quoted one day or less in advance to reflect contemporaneous marginal
        supply costs. RTP differs from conventional rate tariffs, which are
        based on prices that are fixed for months or years at a time to reflect
        average, embedded supply costs. Due to these differences we are not
        currently able to provide the appropriate visualizations at this time.
      </Aside>
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
        have potentially destructive results. This decision will have
        potentially destructive results. This decision will have potentially
        destructive results.
      </Aside>
    </AsideGroup>
  </ThemeProvider>
);
