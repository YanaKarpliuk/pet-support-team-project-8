const theme = {
  media: {
    mobile: '(max-width: 767px)',
    tablet: '(max-width: 1279px) and (min-width: 768px)',
    fromTablet: '(min-width: 768px)',
    desktop: '(min-width: 1280px)',
  },
  colors: {
    bg: '#FDF7F2',
    black: '#111111',
    blackSemitransparent: 'rgba(17, 17, 17, 0.6)',
    white: '#FFFFFF',
    accent: '#F59256',
    accentHover: '#fb731e',
    blue: '#3091eb',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],

  fonts: {
    logo: 'Poppins, sans-serif',
    manrope: 'Manrope, sans-serif',
    inter: 'Inter, sans-serif',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    ml: '24px',
    l: '32px',
    xl: '64px',
  },
  fontWeights: {
    normal: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    normal: 1.35,
    heading: 1.125,
  },

  letterSpacings: {
    min: '-0.01em',
    normal: '0.0em',
    max: '0.07em',
  },

  borders: {
    none: 'none',
    box: '2px solid #F59256',
  },
  radius: {
    none: '0',
    normal: '40px',
    round: '50%',
  },
};

export default theme;
