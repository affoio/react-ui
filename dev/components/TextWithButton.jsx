import React, { useState, useCallback } from 'react';
import Filler from './Filler';
import { Text, Button, Box } from '../../src';

const TextWithButton = () => {
  const [isLoading, changeLoading] = useState(false);
  const onClickHandler = useCallback(
    e => {
      e.preventDefault();
      return changeLoading(() => !isLoading);
    },
    [isLoading]
  );

  return (
    <Filler>
      <Text size="400" fontWeight="bold" inverse>
        Lorem ipsum dolor
      </Text>
      <Box py={2}>
        <Button isLoading={isLoading} onClick={onClickHandler} inverse>
          click meClick me Lorem ipsum dolor sit amet
        </Button>
      </Box>
    </Filler>
  );
};

export default TextWithButton;
