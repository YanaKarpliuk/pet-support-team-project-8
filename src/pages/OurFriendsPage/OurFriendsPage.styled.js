import styled from "styled-components";
import theme from "../../theme";
import { Link } from "react-router-dom";

{
  /*Grid not working */
}
const Container = styled.div`
  background-color: ${theme.colors.bg};
  padding: 20px;
`;

const List = styled.div`
  list-style: none;
  max-width: 320px;
  margin: 0 auto;
  @media screen and (${theme.media.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    max-width: 768px;
  }
  @media screen and (${theme.media.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    max-width: 1280px;
  }
`;

const Card = styled.li`
  padding: 14px 4px 12px;
  background-color: ${theme.colors.white};
  border-radius: 20px;
  filter: drop-shadow(7px 4px 14px rgba(49, 21, 4, 0.07));
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  @media screen and (${theme.media.tablet}) {
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
  @media screen and (${theme.media.desktop}) {
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

const Box = styled.div`
  display: flex;
`;

const ContentBox = styled.div`
  font-family: ${theme.fonts.manrope};
  font-size: 12px;
  color: ${theme.colors.black};
  font-weight: ${theme.fontWeights.normal};
  line-height: 16px;

  @media screen and (${theme.media.tablet}) {
    line-height: 19px;
    font-size: 14px;
  }
  @media screen and (${theme.media.desktop}) {
    line-height: 22px;
    font-size: 16px;
  }
`;

const ImageBox = styled.div`
  margin-right: 12px;
  background: black;
  width: 110px;
  height: 80px;

  @media screen and (${theme.media.tablet}) {
    width: 120px;
    height: 85px;
    margin-right: 14px;
  }
  @media screen and (${theme.media.desktop}) {
    width: 158px;
    height: 112px;
    margin-right: 16px;
  }
`;

const TitleLink = styled(Link)`
  font-family: ${theme.fonts.manrope};
  font-size: 12px;
  display: block;
  color: ${theme.colors.accent};
  font-weight: ${theme.fontWeights.bold};
  line-height: 16px;
  text-decoration-line: underline;
  margin-bottom: 10px;
  text-align: center;

  @media screen and (${theme.media.tablet}) {
    margin-bottom: 16px;
    line-height: 19px;
    font-size: 14px;
  }
  @media screen and (${theme.media.desktop}) {
    margin-bottom: 16px;
    line-height: 22px;
    font-size: 16px;
  }
`;

const ContentLink = styled(Link)`
  color: ${theme.colors.black};
  &:hover {
    text-decoration: underline;
  }
`;

const ContentA = styled.a`
  color: ${theme.colors.black};
  &:hover {
    text-decoration: underline;
  }
`;

const ContentItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 4px;
  }

  @media screen and (${theme.media.tablet}) {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
  @media screen and (${theme.media.desktop}) {
    margin-bottom: 12px;
  }
`;

const elements = {
  Container,
  Card,
  ImageBox,
  ContentBox,
  TitleLink,
  ContentLink,
  ContentA,
  ContentItem,
  Box,
  List,
};

export default elements;
