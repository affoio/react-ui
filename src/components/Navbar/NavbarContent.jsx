import styled from 'styled-components';

export const NavbarContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;
