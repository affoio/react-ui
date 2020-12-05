import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import Button from '../src/components/Button/Button';
import InverseWrapper from './helpers/components/InverseWrapper/InverseWrapper';
import { sizes } from '../src/enums/sizeEnum';

storiesOf('Components', module)
  .addDecorator(storyFn => <InverseWrapper show={boolean('Inverse', false)}>{storyFn()}</InverseWrapper>)
  .add(
    'Button',
    () => (
      <Button
        size={select('Size', [sizes.medium, sizes.small], sizes.small)}
        use={select('Use', ['primary', 'secondary', 'tertiary'], 'primary')}
        inverse={boolean('Inverse', false)}
        disabled={boolean('Disabled', false)}
        isLoading={boolean('isLoading', false)}
        onClick={action('На меня кликнули')}
        fullWidth={boolean('fullWidth', false)}
      >
        {text('Text', 'Some Text')}
      </Button>
    ),
    {
      info: {
        inline: true,
        text: `
              description or documentation about my component, supports markdown
    
              ~~~js
              <Button>Click Here</Button>
              ~~~
            `,
      },
    }
  );
