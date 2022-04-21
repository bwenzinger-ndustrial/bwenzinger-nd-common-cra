import React, { ChangeEventHandler, useReducer } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Close } from '@ndustrial/nd-icons-svg';

import { defaultTheme } from '@ndustrial/nd-theme-react';
import { InputTextField } from '@ndustrial/nd-inputs-react';

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

interface State {
  'empty-text-field': string;
  'filled-text-field': string;
  'validated-text-field': string;
  'required-text-field': string;
  'number-field': number;
  'clearable-text-field': string;
  'multiline-text-field': string;
  'tooltip-text-field': string;
}

interface Action {
  type: string;
  payload: {
    key: string;
    value: string;
  };
}

const initialState: State = {
  'empty-text-field': '',
  'filled-text-field': 'Intial value',
  'validated-text-field': '',
  'required-text-field': '',
  'number-field': 0,
  'clearable-text-field': '',
  'multiline-text-field': '',
  'tooltip-text-field': ''
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'change':
      return {
        ...state,
        [action.payload.key]: action.payload.value
      };
    default:
      return state;
  }
}

export let InputTextFieldExample = (args) => {
  const [values, dispatch] = useReducer(reducer, initialState);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: 'change',
      payload: {
        key: event.target.id,
        value: event.target.value
      }
    });
  }

  function clearInput(key: string) {
    dispatch({
      type: 'change',
      payload: {
        key,
        value: ''
      }
    });
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <FieldContainer>
          <InputTextField
            id="empty-text-field"
            autoFocus
            label="Empty Text Field"
            onChange={handleChange}
            placeholder="Placeholder"
            value={values['empty-text-field']}
          />
          <InputTextField
            id="filled-text-field"
            label="Filled Text Field"
            onChange={handleChange}
            placeholder="Placeholder"
            value={values['filled-text-field']}
          />
          <InputTextField
            id="validated-text-field"
            helperText={
              !values['validated-text-field'] ? 'Please enter a value' : ''
            }
            invalid={!values['validated-text-field']}
            label="Validated Text Field"
            onChange={handleChange}
            placeholder="Validated"
            value={values['validated-text-field']}
          />
          <InputTextField
            id="required-text-field"
            label="Required Text Field"
            onChange={handleChange}
            placeholder="Required"
            required
            value={values['required-text-field']}
          />
          <InputTextField
            id="number-field"
            label="Number Field"
            onChange={handleChange}
            placeholder="kWh"
            type="number"
            value={values['number-field']}
          />
          <InputTextField
            id="clearable-text-field"
            label="Clearable Text Field"
            onChange={handleChange}
            placeholder="Search Box"
            value={values['clearable-text-field']}
            endIcon={
              values['clearable-text-field'] ? (
                <Close
                  stroke="#0B588A"
                  onClick={() => clearInput('clearable-text-field')}
                />
              ) : undefined
            }
          />
          <InputTextField
            disabled
            id="disabled-text-field"
            label="Disabled Text Field"
            onChange={() => {}}
            placeholder="Disabled"
            value={''}
          />
          <InputTextField
            id="multiline-text-field"
            label="Multiline Text Field"
            multiline
            onChange={handleChange}
            placeholder="Placeholder"
            value={values['multiline-text-field']}
          />
          <InputTextField
            id="tooltip-text-field"
            label="Tooltip Text Field"
            onChange={handleChange}
            placeholder="Hover to see tooltip"
            tooltipContent="Helpful info"
            value={values['tooltip-text-field']}
          />
        </FieldContainer>
      </>
    </ThemeProvider>
  );
};
