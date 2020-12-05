import styled from 'styled-components';

const PortalOverlay = styled.div`
  position: fixed;
  ${({ top }) => top && `top: ${top}`};
  ${({ left }) => left && `left: ${left}`};
  ${({ bottom }) => bottom && `bottom: ${bottom}`};
  ${({ right }) => right && `right: ${right}`};
`;

export default PortalOverlay;
