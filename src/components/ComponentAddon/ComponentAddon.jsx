import styled from 'styled-components';
import { oneOf, number } from 'prop-types';
import { positionEnum } from '../../enums/positionEnum';
import { getMultipliedIndent } from '../../theme/selectors';

const getAddonMargin = ({ position, marginSize, theme }) => {
  const indent = getMultipliedIndent(theme, marginSize);

  if (position === positionEnum.right) {
    return `
      margin-left: ${indent};
    `;
  }

  return `
      margin-right: ${indent};
    `;
};

const propTypes = {
  position: oneOf([positionEnum.left, positionEnum.right]),
  marginSize: number,
};

const ComponentAddon = styled.div.attrs(props => ({
  position: props.position || positionEnum.left,
  marginSize: props.marginSize || 1,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  ${getAddonMargin}
`;

ComponentAddon.propTypes = propTypes;

export default ComponentAddon;
