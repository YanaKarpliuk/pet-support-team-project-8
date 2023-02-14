import styled from 'styled-components';
import theme from '../../theme';

const ErrorElem = styled.div`
  padding-top: 5px;
  display: block;
  position: absolute;
  width: 100%;
  right: 50%;
  transform: translateX(50%);
  font-family: ${theme.fonts.manrope};
  font-size: ${theme.fontSizes.s};
  text-align: center;
  color: #e00e0e;

  @media screen and (${theme.media.fromTablet}) {
    font-size: 17px;
  }
`;

export default ErrorElem;
