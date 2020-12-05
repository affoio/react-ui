import React from 'react';
import { string } from 'prop-types';
import * as images from './images';

const propTypes = {
  country: string,
};

const Flag = React.memo(({ country }) => <img data-testid="flag" src={images[country]} />);

Flag.propTypes = propTypes;

export default Flag;
