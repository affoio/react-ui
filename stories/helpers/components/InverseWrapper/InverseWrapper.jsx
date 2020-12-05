import styled from 'styled-components';
import { bool } from 'prop-types';
import colors from '../../../../src/colors';

const propTypes = {
  show: bool,
};

const InverseWrapper = styled.div`
  display: block;
  padding: 24px;
  background-color: ${({ show }) => (show ? colors.indigoBlue[800] : 'transparent')};
`;

InverseWrapper.propTypes = propTypes;

export default InverseWrapper;
