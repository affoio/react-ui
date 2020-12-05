import styled from 'styled-components';
import { addStyleIfPropTruly } from '../../helpers/styledComponents';

const ControlContainer = styled.div`
  display: block;
  ${addStyleIfPropTruly('fullWidth', 'width: 100%;')}
  ${addStyleIfPropTruly('disabled', 'opacity: 0.5;')}
  position: relative;
  outline: none;
`;

export default ControlContainer;
