import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
const Container = styled.div`
  padding: 32px 20px;

  @media ${p => p.theme.media.mobile} {
    padding: 60px 20px;
  }
`;
const Box = styled.div`
  display: flex;
  gap: 20px;

  @media ${p => p.theme.media.mobile} {
  }
`;
const ImgBox = styled.div`
  width: 288px;
  height: 328px;
  border-radius: 0px 0px 40px 40px;
  background-color: ${p => p.theme.colors.bg};
`;
const InfoBox = styled.div`
  width: 321px;
  height: 328px;
`;
const Title = styled.h2`
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 28px;
  color: ${p => p.theme.colors.black};
  line-height: 38px;
  letter-spacing: -0.01em;
`;

const List = styled.ul``;
const Item = styled.li`
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.black};
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const ComentsBox = styled.div`
  margin-top: 28px;
  margin-bottom: 32px;
  width: 660px;
  //   display: flex;
  //   align-items: center;
  //   text-align: center;
`;
const Coments = styled.span`
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.black};
  align-items: center;
  letter-spacing: 0.04em;
`;

const ComentsContent = styled.span`
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.black};
  line-height: 24px;
  letter-spacing: 0.04em;
`;
const BtnBox = styled.div`
  display: flex;
justify-content: flex-end;
  gap: 12px;
  margin-right: 20px;
`;

const AddBtn = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 12px;
  border: ${p => p.theme.borders.box};
  border-radius: ${p => p.theme.radius.normal};
  width: 160px;
  padding: 12px;
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.white};

  &:hover {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  @media ${p => p.theme.media.tablet} {
    margin: ${p => p.theme.space[0]}px;
    font-size: 20px;
  }

  @media ${p => p.theme.media.desktop} {
    margin-top: ${p => p.theme.space[0]}px;
  }

  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;
const ContactLink = styled.a`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border: ${p => p.theme.borders.box};
  border-radius: ${p => p.theme.radius.normal};
  width: 160px;
  padding: 12px;
  font-family: ${p => p.theme.fonts.manrope};
  font-size: 20px;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.white};
  letter-spacing: 0.07em;

  &:hover {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  @media ${p => p.theme.media.tablet} {
    margin: ${p => p.theme.space[0]}px;
    font-size: 20px;
  }

  @media ${p => p.theme.media.desktop} {
    margin-top: ${p => p.theme.space[0]}px;
  }

  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;
const IconHeart = styled(AiFillHeart)`
size = 16px;
color: ${p => p.theme.colors.accent};

  &:hover {
    color: ${p => p.theme.colors.white};
`;

const steyles = {
  Container,
  Box,
  ImgBox,
  InfoBox,
  Title,
  List,
  Item,
  ComentsBox,
  Coments,
    ComentsContent,
  BtnBox,
  AddBtn,
  IconHeart,
  ContactLink,
};

export default steyles;
