import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Log = styled(NavLink)`
  @media ${p => p.theme.media.mobile} {
    font-family: ${p => p.theme.fonts.logo};
    color: ${p => p.theme.colors.black};
    font-size: 28px;
    line-height: 42px;
    letter-spacing: 0.06em;
    font-weight: 700;
  }
  @media ${p => p.theme.media.tablet} {
    font-family: ${p => p.theme.fonts.logo};
    color: ${p => p.theme.colors.black};
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: 0.06em;
  }
  @media ${p => p.theme.media.desktop} {
    font-family: ${p => p.theme.fonts.logo};
    color: ${p => p.theme.colors.black};
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: 0.06em;
  }
`;
export const LogAccent = styled.span`
  @media ${p => p.theme.media.mobile} {
    font-family: ${p => p.theme.fonts.logo};
    color: ${p => p.theme.colors.accent};
    font-size: 28px;
    line-height: 42px;
    letter-spacing: 0.06em;
    font-weight: 700;
  }
  @media ${p => p.theme.media.tablet} {
    font-family: ${p => p.theme.fonts.logo};
    color: ${p => p.theme.colors.accent};
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: 0.06em;
  }
  @media ${p => p.theme.media.desktop} {
    font-family: ${p => p.theme.fonts.logo};
    color: ${p => p.theme.colors.accent};
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: 0.06em;
  }
`;
