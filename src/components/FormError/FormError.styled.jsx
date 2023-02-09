import styled from 'styled-components';

const ErrorElem = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  right: 50%;
  transform: translateX(50%);
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: ${({ theme }) => theme.fontSizes.s};
  text-align: center;
  color: #e00e0e;

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`;

export default ErrorElem;
