import { path, either, pipe, pathOr, converge, concat } from 'ramda';
import { defaultTheme } from '../index';

export const getDefaultTheme = () => defaultTheme;
export const getThemeFromProps = path(['theme']);

export const getParamFromTheme = themeProp => either(path(themeProp), pipe(getDefaultTheme, path(themeProp)));

export const getBaseIndent = getParamFromTheme(['baseIndent']);
export const getMultipliedIndent = (theme, coefficient) => `${getBaseIndent(theme) * coefficient}px`;
export const getMultipliedIndentFromProp = coefficient => ({ theme }) => `${getBaseIndent(theme) * coefficient}px`;
export const getBreakpoints = getParamFromTheme(['breakpoints']);
export const getContainerIndents = getParamFromTheme(['container', 'indent']);
export const getContainerMaxWidth = getParamFromTheme(['container', 'maxWidth']);
export const getGridSize = getParamFromTheme(['gridSize']);
export const getGutterWidth = getParamFromTheme(['gutterWidth']);
export const getTypography = getParamFromTheme(['typography']);
export const getTypographySpecificSize = (theme, size) => {
  const typography = getTypography(theme);
  return pathOr(path(['100'], typography), [size], typography);
};

const getFontSize = ({ fontSize }) => `font-size: ${fontSize};`;
const getLineHeight = ({ lineHeight }) => `line-height: ${lineHeight};`;

export const getTypographyFontSizeStyles = pipe(getTypographySpecificSize, getFontSize);

export const getTypographyLineHeightStyles = pipe(getTypographySpecificSize, getLineHeight);

export const getTypographyFontStyle = converge(concat, [getTypographyFontSizeStyles, getTypographyLineHeightStyles]);
