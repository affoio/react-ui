import styled from 'styled-components';
import colors from '../../src/colors';

const Filler = styled.div`
  box-sizing: border-box;
  padding: 16px;
  min-height: 50px;
  background: ${colors.indigoBlue[800]};
`;

export const FillerCerise = styled(Filler)`
  background: ${colors.cerise[800]};
`;

export default Filler;
