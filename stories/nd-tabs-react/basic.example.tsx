import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@ndustrial/nd-theme-react';
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from '@ndustrial/nd-tabs-react';

export const BasicExample = () => (
  <ThemeProvider theme={defaultTheme}>
    <Tabs>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
        <Tab disabled>Four</Tab>
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
