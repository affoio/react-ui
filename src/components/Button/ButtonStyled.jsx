import styled from 'styled-components';
import { ifElse, __ } from 'ramda';
import colors from '../../colors';
import { getTypographyFontSizeStyles } from '../../theme/selectors';
import { sizes } from '../../enums/sizeEnum';

const concatStyles = (...args) => [].reduce.call(args, (a, b) => `${a}${b}`);
const addStyleByPredicate = ifElse(
  __,
  (_, style) => style,
  () => ''
);
const addStyleByPredicateWithProps = (predicate, style) => addStyleByPredicate(predicate)(__, style);
const addHoverStyle = addStyleByPredicate(({ disabled, isLoading }) => !(disabled || isLoading));
const addLoadingStyle = addStyleByPredicate(({ isLoading }) => isLoading);
const addInverseStyle = addStyleByPredicate(({ inverse }) => inverse);

const getInverseStyle = ifElse(
  ({ inverse }) => inverse,
  props =>
    concatStyles(
      `
      background-color: transparent;
      color: ${colors.white};
      border-color: ${colors.white};
    `,
      addHoverStyle(
        props,
        `&:hover {
          border-color: ${colors.white};
          background-color: ${colors.white};
          color: ${colors.indigoBlue[800]};
        }

        &:focus {
          border-color: ${colors.white};
          background-color: ${colors.white};
          color: ${colors.indigoBlue[800]};
        }`
      )
    ),
  () => ''
);

const getSecondaryStyle = ifElse(
  ({ inverse }) => !inverse,
  () => `
    background-color: transparent;
    color: ${colors.cerise[800]};
    border-color: ${colors.cerise[800]};
  `,
  getInverseStyle
);

const getTertiaryStyle = props => {
  return concatStyles(
    `
      background-color: transparent;
      color: ${colors.indigoBlue[800]};
      border-color: transparent;
      height: 32px;
      ${getTypographyFontSizeStyles(props.theme, 300)}
      text-transform: none;
      padding: 0 8px;
      font-weight: 400;
    `,
    addLoadingStyle(props, `background-color: ${colors.indigoBlue[200]}`),
    addHoverStyle(
      props,
      `&:hover {
          border-color: transparent;
          background-color: ${colors.indigoBlue[200]}
          color: ${colors.indigoBlue[800]};
        }

        &:focus {
          background-color: ${colors.indigoBlue[200]};
          color: ${colors.indigoBlue[800]};
          border-color: ${colors.indigoBlue[800]};
        }
        `
    ),
    addInverseStyle(
      props,
      concatStyles(
        `
          border-color: transparent;
          color: ${colors.white};
        `,
        addHoverStyle(
          props,
          `&:hover {
              border-color: transparent;
              background-color: ${colors.indigoBlue[700]};
              color: ${colors.white};
            }

            &:focus {
              border-color: ${colors.white};
              background-color: ${colors.indigoBlue[700]};
              color: ${colors.white};
            }`
        ),
        addLoadingStyle(props, `background-color: ${colors.indigoBlue[700]}`)
      )
    )
  );
};

const getButtonSize = ({ size, theme }) => {
  if (size === sizes.small) {
    return `
      height: 40px;
      padding: 0 16px;
      ${getTypographyFontSizeStyles(theme, 200)}
    `;
  }

  return `
    height: 56px;
    padding: 0 40px;
    ${getTypographyFontSizeStyles(theme, 400)}`;
};

const getThemeStyles = props => {
  const { use } = props;

  if (use === 'secondary') {
    return getSecondaryStyle();
  }
  if (use === 'tertiary') {
    return getTertiaryStyle(props);
  }

  return '';
};

export const ButtonStyled = styled.button.attrs(({ disabled, isLoading }) => ({
  disabled: disabled || isLoading,
}))`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: ${colors.cerise[800]};
  color: ${colors.white};
  font-weight: 600;
  text-transform: uppercase;
  border: 1px solid ${colors.cerise[800]};
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  text-transform: uppercase;
  max-width: 100%;

  ${addStyleByPredicateWithProps(
    ({ disabled, isLoading }) => disabled && !isLoading,
    `cursor: not-allowed;
      opacity: 0.5;`
  )}

  ${addHoverStyle(
    __,
    `&:hover {
          border-color: ${colors.indigoBlue[800]};
          background-color: ${colors.indigoBlue[800]};
          color: ${colors.white};
        }

        &:active {
          transform: translateY(1px) scale(0.98);
        }
        &:focus {
          border-color: ${colors.indigoBlue[800]};
          background-color: ${colors.indigoBlue[800]};
          color: ${colors.white};
        }
      }
    `
  )}

  ${getButtonSize}
  ${getInverseStyle}
  ${getThemeStyles}
  ${addStyleByPredicateWithProps(({ fullWidth }) => fullWidth, 'width: 100%')}
`;

export const ButtonChildrenWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ hide }) => hide && 'visibility: hidden;'}
  max-width: 100%;
`;

export const ButtonText = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
