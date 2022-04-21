import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { CheckboxExample } from './checkbox.example';
import { FinalFormExample } from './finalform.example';
import { FormExample } from './form.example';
import { InputTextFieldExample } from './inputtextfield.example';
import { RadioButtonExample } from './radiobutton.example';
import Dummy from '../dummy';
import { InputTextFieldEditableExample } from './inputtextfieldeditable.example';
import { InputTextAreaFieldEditableExample } from './inputtextareaeditable.example';

export default {
  title: 'nd-inputs-react',
  component: Dummy
} as ComponentMeta<typeof Dummy>;

export const Checkbox = () => <CheckboxExample />;
Checkbox.storyName = 'Checkbox Inputs';

export const FinalForm = () => <FinalFormExample />;
FinalForm.storyName = 'Final-Form Example';

export const Form = () => <FormExample />;
Form.storyName = 'Form Example';

export const InputTextField = () => <InputTextFieldExample />;
InputTextField.storyName = 'Text Field Inputs';

export const InputTextFieldEditable = (args) => (
  <InputTextFieldEditableExample {...args} />
);
InputTextFieldEditable.storyName = 'Text Field Input Editable';
InputTextFieldEditable.argTypes = {
  disabled: { type: 'boolean', defaultValue: false },
  helperText: { type: 'string', defaultValue: 'Helper Text' },
  invalid: { type: 'boolean', defaultValue: false },
  label: { type: 'string', defaultValue: 'Text Field Label' },
  max: { type: 'number', defaultValue: 10 },
  min: { type: 'number', defaultValue: 0 },
  placeholderTemp: {
    type: 'string',
    name: 'placeholder',
    defaultValue: 'Placeholder'
  },
  readOnly: { type: 'boolean', defaultValue: false },
  required: { type: 'boolean', defaultValue: false },
  step: { type: 'number', defaultValue: 1 },
  typeTemp: {
    name: 'type',
    type: 'string',
    options: ['text', 'number', 'password', 'search', 'email', 'url'],
    defaultValue: 'text',
    control: { type: 'radio' }
  }
};

export const InputTextAreaFieldEditable = (args) => (
  <InputTextAreaFieldEditableExample {...args} />
);
InputTextAreaFieldEditable.storyName = 'Text Area Field Input Editable';
InputTextAreaFieldEditable.argTypes = {
  disabled: { type: 'boolean', defaultValue: false },
  helperText: { type: 'string', defaultValue: 'Helper Text' },
  invalid: { type: 'boolean', defaultValue: false },
  label: { type: 'string', defaultValue: 'Text Field Label' },
  placeholderTemp: {
    type: 'string',
    name: 'placeholder',
    defaultValue: 'Placeholder'
  },
  readOnly: { type: 'boolean', defaultValue: false },
  required: { type: 'boolean', defaultValue: false }
};

export const RadioButton = () => <RadioButtonExample />;
RadioButton.storyName = 'Radio Button Inputs';
