import styled from 'styled-components';
import theme from '../../theme';
import { Link } from 'react-router-dom';

const Title = styled.h2`
  margin-bottom: 28px;
  font-family: ${theme.fonts.manrope};
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 66px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 60px;
  }
`;

const Container = styled.div`
  background-color: ${theme.colors.bg};
  padding-top: 100px;
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding-top: 160px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 126px;
    padding-bottom: 200px;
  }
`;

const List = styled.ul`
  list-style: none;
  max-width: 320px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1280px;
  }
`;

const Card = styled.li`
  padding: 14px 4px 12px;
  background-color: ${theme.colors.white};
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  @media screen and (min-width: 768px) {
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

  @media screen and (min-width: 768px) {
    line-height: 19px;
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    line-height: 22px;
    font-size: 16px;
  }
`;

const ImageBox = styled.div`
  margin-right: 12px;
  width: 110px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    height: 100%;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 85px;
    margin-right: 14px;
  }

  @media screen and (min-width: 1280px) {
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

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    line-height: 19px;
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
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

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  @media screen and (min-width: 1280px) {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;

const ContentItemModal = styled.ul`
  display: none;
  flex-direction: column;
  position: absolute;
  background-color: #fff;
  border: 1px solid ${theme.colors.accent};
  padding: 12px 0;
  border-radius: 8px;
  z-index: 10;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  width: 120px;
`;

const ContentItemTime = styled.div`
  margin-bottom: 4px;
  cursor: pointer;
  position: relative;

  &:hover {
    color: ${theme.colors.accent};
  }

  &:hover > ${ContentItemModal} {
    display: flex;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 12px;
  }
`;

const ContentItemModalSchedude = styled.li`
  color: black;
  display: flex;
  width: max-content;
  justify-content: space-between;
  padding: 0 12px;
  font-size: 12px;
  line-height: 16px;
  width: 120px;

  &:not(:last-child) {
    margin-bottom: 4px;
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
  ContentItemTime,
  ContentItemModal,
  ContentItemModalSchedude,
  Title,
};

export default elements;
