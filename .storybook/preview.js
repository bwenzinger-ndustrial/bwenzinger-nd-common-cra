import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '@ndustrial/nd-theme-react';
import { MemoryRouter } from 'react-router-dom';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

addDecorator((storyFn) => {
  return (
    <MemoryRouter>
      <GlobalStyle />
      {storyFn()}
    </MemoryRouter>
  );
});
