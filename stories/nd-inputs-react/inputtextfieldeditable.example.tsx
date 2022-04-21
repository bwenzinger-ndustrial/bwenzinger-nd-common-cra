import { InputTextField } from '@ndustrial/nd-inputs-react';
import { defaultTheme } from '@ndustrial/nd-theme-react';
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const FieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${InputTextField} {
    margin: 10px;
    min-width: 310px;
    display: inline-flex;
  }
`;

const inputTypes = {
  text: 'text',
  number: 'number',
  password: 'password',
  search: 'search',
  email: 'email',
  url: 'url'
};

export let InputTextFieldEditableExample = (args: any) => {
  const [value, setValue] = useState('');

  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <FieldContainer>
          <InputTextField
            id="empty-text-field"
            {...args}
            onChange={(e) => setValue(e.currentTarget.value)}
            placeholder={args.placeholderTemp}
            type={args.typeTemp}
            // type={select('type', inputTypes, 'text')}
            value={value}
          />
        </FieldContainer>
      </>
    </ThemeProvider>
  );
};
