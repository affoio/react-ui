import styled from 'styled-components';
import { oneOf, element } from 'prop-types';
import { sizes } from '../../enums/sizeEnum';
import ComponentAddon from '../ComponentAddon/ComponentAddon';
import { positionEnum } from '../../enums/positionEnum';

const getButtonAddonSize = ({ size }) => {
  if (sizes.small === size) {
    return `
      width: 20px;
      height: 20px;
    `;
  }

  return `
    width: 24px;
    height: 24px;
  `;
};

export const buttonAddonProps = {
  position: oneOf([positionEnum.left, positionEnum.right]),
  children: element,
  size: oneOf(Object.values(sizes)),
};

const ButtonAddon = styled(ComponentAddon).attrs({
  marginSize: 1,
})`
  ${getButtonAddonSize}
`;

ButtonAddon.defaultProps = {
  size: sizes.medium,
};

export default ButtonAddon;
