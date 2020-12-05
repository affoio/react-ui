export const defaultTheme = {
  baseIndent: 4,
  breakpoints: { xs: 320, sm: 768, lg: 1280 },
  gridSize: 12,
  gutterWidth: 2,
  container: {
    indent: {
      xs: 4,
      sm: 4,
      lg: 15,
    },
    maxWidth: '1920px',
  },
  typography: {
    '100': { fontSize: '12px', lineHeight: '20px' },
    '200': { fontSize: '14px', lineHeight: '23px' },
    '300': { fontSize: '16px', lineHeight: '25px' },
    '400': { fontSize: '18px', lineHeight: '28px' },
    '500': { fontSize: '24px', lineHeight: '32px' },
    '600': { fontSize: '32px', lineHeight: '44px' },
  },
};

export const themeConfig = {
  breakpointNames: ['xs', 'sm', 'lg'],
  breakpointOffsetNames: ['xsOffset', 'smOffset', 'lgOffset'],
};
