import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
const Container = styled.div`
  padding: 32px 20px;
  @media ${p => p.theme.media.mobile} {
    padding: 60px 20px 20px 20px;
    height: 95vh;
    overflow: hidden;
    overflow-y: auto;
  }
`;
const Box = styled.div`
  display: flex;
  gap: 20px;

  @media ${p => p.theme.media.mobile} {
    display: flex;
    flex-direction: column;
  }
`;
const ImgBox = styled.div`
  position: relative;
  width: 288px;
  height: 328px;
  border-radius: 0px 0px 40px 40px;

  @media ${p => p.theme.media.mobile} {
    width: 240px;
    height: 240px;
  }
  & > img {
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 0px 0px 40px 40px;
    object-fit: cover;
  }
`;

const Category = styled.span`
  position: absolute;
  width: 158px;
  height: 28px;
  left: 0;
  top: 20px;

  background: rgba(255, 255, 255, 0.6);
  border-top-right-radius: ${p => p.theme.radius.normal};
  border-bottom-right-radius: ${p => p.theme.radius.normal};
  backdrop-filter: blur(2px);

  font-family: ${p => p.theme.fonts.inter};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.25;

  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;

  color: ${p => p.theme.colors.black};
`;
const InfoBox = styled.div`
  width: 321px;
  height: 100%;
  @media ${p => p.theme.media.mobile} {
    width: 240px;
  }
`;
const Title = styled.h2`
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 28px;
  color: ${p => p.theme.colors.black};
  line-height: 38px;
  letter-spacing: -0.01em;
  @media ${p => p.theme.media.mobile} {
    font-size: ${p => p.theme.fontSizes.ml};
    line-height: 33px;
    margin-bottom: 16px;
  }
`;

const List = styled.table`
  width: 200px;
  table-layout: auto;
  border-collapse: collapse;
`;
const Item = styled.tr`
  padding: 4px;
  display: flex;
  align-items: center;
  text-align: center;
  @media ${p => p.theme.media.mobile} {
    padding: 0;
  }
`;
const Key = styled.td`
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.black};
  line-height: 22px;
  width: 130px;
  text-align: left;
  @media ${p => p.theme.media.mobile} {
    width: 100px;
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
const Value = styled.td`
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.black};
  line-height: 22px;
  & > a {
    text-decoration: none;
    color: ${p => p.theme.colors.black};
  }
  @media ${p => p.theme.media.mobile} {
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
const ComentsBox = styled.div`
  margin-top: 28px;
  margin-bottom: 32px;
  width: 660px;
  @media ${p => p.theme.media.mobile} {
    width: 240px;
    margin-top: 28px;
    margin-bottom: 40px;
  }
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
  @media ${p => p.theme.media.mobile} {
    font-weight: 600;
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 19px;
    letter-spacing: 0;
  }
`;

const ComentsContent = styled.span`
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.black};
  line-height: 24px;
  letter-spacing: 0.04em;
  @media ${p => p.theme.media.mobile} {
    font-weight: 400;
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 19px;
    letter-spacing: 0;
  }
`;
const BtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-right: 20px;
  @media ${p => p.theme.media.mobile} {
    display: flex;
    flex-direction: column-reverse;
    margin-right: 0;
  }
`;

const AddBtn = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  cursor: pointer;
  gap: 12px;
  border: ${p => p.theme.borders.box};
  border-radius: ${p => p.theme.radius.normal};
  width: 160px;
  height: 40px;
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
  @media ${p => p.theme.media.mobile} {
    width: 100%;
  }
`;
const IconHeart = styled(AiFillHeart)`
  display: block;
  width: 16px;
  height: 16px;
  color: ${p => p.theme.colors.accent};

  ${AddBtn}:hover & {
    color: ${p => p.theme.colors.white};
  }
`;
const ContactLink = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  cursor: pointer;
  border: ${p => p.theme.borders.box};
  border-radius: ${p => p.theme.radius.normal};
  width: 160px;
  height: 40px;
  padding: 12px;
  font-family: ${p => p.theme.fonts.manrope};
  font-size: 16px;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.white};
  letter-spacing: 0.07em;
  & > a {
    text-decoration: none;
    color: ${p => p.theme.colors.black};
  }
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
  @media ${p => p.theme.media.mobile} {
    width: 100%;
  }
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
  Key, Value,
  Category,
};

export default steyles;
