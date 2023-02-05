const theme = {
 media: {
 mobile: "(max-width: 767px)",
  tablet: "(max-width: 1279px) and (min-width: 768px)",
  desktop: "(min-width: 1280px)",
 },
 colors: {
  bg: "#FDF7F2",
  black: "#111111",
  white: "#FFFFFF",
  accent: "#F59256",
 },
 space: [0, 2, 4, 8, 16, 32, 64, 128, 256],

 fonts: {
  logo: "Poppins, sans-serif",
  manrope: "Manrope, sans-serif",
  inter: "Inter, sans-serif",
 },
 fontSizes: {
  xs: "12px",
  s: "14px",
  m: "16px",
  l: "32px",
  xl: "64px",
 },
 fontWeights: {
  normal: 500,
  bold: 700,
 },
 lineHeights: {
  body: 1.5,
  heading: 1.125,
 },
 borders: {
  none: "none",
  box: "2px solid #F59256",
 },
 radius: {
  none: "0",
  normal: "40px",
  round: "50%",
 },
};

export default theme;