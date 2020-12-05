import styled from 'styled-components';

const Icon = styled.svg`
  fill: ${({ color }) => color || 'currentColor'};
  ${({ hoverColor }) => (hoverColor ? `&:hover { fill: ${hoverColor};}` : '')}
`;

export default Icon;
