import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Dashboard as DashboardIcon } from '@ndustrial/nd-icons-svg';

import { defaultTheme } from '@ndustrial/nd-theme-react';
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from '@ndustrial/nd-tabs-react';

export const IconExample = (args: { size: string }) => (
  <ThemeProvider theme={defaultTheme}>
    {/* <Tabs size={select('size', ['large', 'small'], 'large')}> */}
    <Tabs $size={args.size}>
      <TabList>
        <Tab icon={<DashboardIcon />}>One</Tab>
        <Tab icon={<DashboardIcon />}>Two</Tab>
        <Tab icon={<DashboardIcon />}>Three</Tab>
        <Tab disabled icon={<DashboardIcon />}>
          Four
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </ThemeProvider>
);
