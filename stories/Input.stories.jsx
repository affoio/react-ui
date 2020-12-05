import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { Input } from '../src';

storiesOf('Components', module).add(
  'Input',
  () => (
    <Input
      defaultValue={text('Default text', '123')}
      placeholder="Enter text"
      error={text('Error text', '')}
      label={text('Label text', 'Label')}
      helperText={text('Helper text', 'helper')}
      disabled={boolean('Disabled', false)}
      onFocus={action('Focused')}
      onBlur={action('Blured')}
      onChange={action('Changed')}
    />
  ),
  {
    info: {
      inline: true,
      text: `
              description or documentation about my component, supports markdown
            `,
    },
  }
);
