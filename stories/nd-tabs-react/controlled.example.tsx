import React from 'react';
import { ThemeProvider } from 'styled-components';
import { action } from '@storybook/addon-actions';

import { defaultTheme } from '@ndustrial/nd-theme-react';
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from '@ndustrial/nd-tabs-react';

export const ControlledExample = (args: any) => (
  <ThemeProvider theme={defaultTheme}>
    <Tabs
      index={args.index}
      // index={number('index', 0, { min: 0, max: 3, step: 1 })}
      onChange={action('select index')}
    >
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
