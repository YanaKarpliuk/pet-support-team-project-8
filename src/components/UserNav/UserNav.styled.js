import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HiUserCircle } from 'react-icons/hi';
export const Box = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 36px;
  @media ${p => p.theme.media.tablet} {
    margin-top: ${p => p.theme.space[0]}px;
  }
  @media ${p => p.theme.media.desktop} {
    margin-top: ${p => p.theme.space[0]}px;
  }
`;
export const Link = styled(NavLink)`
  display: flex;
  border: ${p => p.theme.borders.box};
  border-radius: ${p => p.theme.radius.normal};
  justify-content: center;
  text-align: center;
  align-items: center;
  font-family: ${p => p.theme.fonts.manrope};
  gap: 12px;
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  @media ${p => p.theme.media.mobile} {
    font-size: ${p => p.theme.fontSizes.s};
    letter-spacing: 0.04em;
    line-height: 19px;
    width: 164px;
    height: 35px;
    padding: 8px 28px;
  }
  @media ${p => p.theme.media.tablet} {
    font-size: ${p => p.theme.fontSizes.m};
    padding: 8px 28px;
    font-weight: 500;
font-size: 16px;
line-height: 22px;
    letter-spacing: 0.04em;
    width: 164px;
    height: 44px;
}
@media ${p => p.theme.media.desktop} {
    font - size: ${p => p.theme.fontSizes.m};
    padding: 10px 28px;
    font - weight: 500;
    font - size: 16px;
    line - height: 22px;
    letter - spacing: 0.04em;
    width: 164px;
    height: 44px;
}
`;
export const Icons = styled(HiUserCircle)`
  width: 28px;
  height: 28px;

  @media ${p => p.theme.media.mobile} {
    width: 20px;
    height: 20px;
  }
`;
