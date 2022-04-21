import faker from 'faker';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@ndustrial/nd-theme-react';

import { ReactTable } from '@ndustrial/nd-table-react';

const data = [...Array(faker.random.number({ min: 30, max: 50 })).keys()].map(
  () => {
    return {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      age: faker.random.number({ min: 5, max: 60 }),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zip: faker.address.zipCode()
    };
  }
);

const columns = [
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    Header: 'Age',
    accessor: 'age'
  },
  {
    Header: 'Address',
    accessor: 'address'
  },
  {
    Header: 'City',
    accessor: 'city'
  },
  {
    Header: 'State',
    accessor: 'state'
  },
  {
    Header: 'Zip',
    accessor: 'zip'
  }
];

export let Example = () => (
  <ThemeProvider theme={defaultTheme}>
    <ReactTable columns={columns} data={data} />
  </ThemeProvider>
);
