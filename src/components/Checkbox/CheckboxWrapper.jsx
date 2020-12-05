import styled from 'styled-components';
import { getMultipliedIndent } from '../../theme/selectors';
import { addStyleIfPropTruly } from '../../helpers/styledComponents';

const CheckboxWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  height: 24px;
  margin-right: ${({ theme }) => getMultipliedIndent(theme, 2)};
  &:hover {
    cursor: pointer;
  }

  ${addStyleIfPropTruly(
    'disabled',
    `
    opacity: 0.5;

    &:hover {
      cursor: default;
    }
  `
  )};
`;

export default CheckboxWrapper;
