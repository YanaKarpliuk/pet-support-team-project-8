import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Box = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  padding-top: 26px;
  @media ${p => p.theme.media.tablet} {
    gap: 20px;
    padding-top: 0;
  }
  @media ${p => p.theme.media.desktop} {
    gap: 20px;
    padding-top: 0;
  }
`;
export const Link = styled(NavLink)`
  border: ${p => p.theme.borders.box};
  margin-top: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radius.normal};
  padding: 8px 28px;
  font-family: ${p => p.theme.fonts.manrope};
  color: ${p => p.theme.colors.black};

  &:hover {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  @media ${p => p.theme.media.mobile} {
    font-size: ${p => p.theme.fontSizes.s};
    margin: ${p => p.theme.space[0]}px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0.07em;
  }
  @media ${p => p.theme.media.tablet} {
    margin: ${p => p.theme.space[0]}px;
    font-size: 20px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0.04em;
  }

  @media ${p => p.theme.media.desktop} {
    margin-top: ${p => p.theme.space[0]}px;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0.04em;
    padding: 10px 28px;
    order: 0;
    flex-grow: 0;
    gap: 10px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;