import styled from 'styled-components';
import { Form, Field } from 'formik';
import { HiOutlineLogout } from 'react-icons/hi';
import { MdModeEdit } from 'react-icons/md';
import { BsCheckLg, BsCameraFill } from 'react-icons/bs';
// import 'flatpickr/dist/flatpickr.min.css';
// import Flatpickr from 'react-flatpickr';
import theme from '../../theme';

export const UserDataWrap = styled.div`
  @media screen and (max-width: 767px) {
    /* background-color: red; */
    margin-top: 49px;

    padding: 18px 20px 0px 20px;
  }
  @media screen and (max-width: 1279px) and (min-width: 768px) {
    /* max-width: 1000px; */

    /* margin-top: 72px; */
    /* margin-left: -32px;
    position: relative;
    
    border-radius: 0px 40px 40px 0px;
    padding-left: 32px;
    padding-right: 40px;
    padding-bottom: 24px; */
  }
  @media screen and (${theme.media.desktop}) {
    width: 411px;
    /* margin-left: -17px;
    
    margin-top: 24px;
    padding-top: 20px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 40px;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border-radius: 0px 40px 40px 0px; */
  }
`;

export const Title = styled.h1`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: ${theme.fontWeights.normal};
  font-size: 20px;
  line-height: 27px;
  color: #000000;
  /* margin-top: 20px; */
  @media screen and (max-width: 767px) {
    margin-top: 0px;

    letter-spacing: 0.04em;
  }
  @media screen and (${theme.media.fromTablet}) {
    margin-left: 32px;
    font-size: 28px;
    line-height: 38px;
    color: ${theme.colors.black};
  }
  @media screen and (${theme.media.desktop}) {
    margin-left: 17px;
  }
`;

export const UserContainer = styled.div`
  margin-top: 18px;
  background-color: ${theme.colors.white};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 12px;
  padding-bottom: 20px;
  @media screen and (max-width: 767px) {
    /* background-color: red; */

    padding-top: 20px;
  }
  @media screen and (${theme.media.tablet}) {
    /* margin-left: -32px; */
    position: relative;
    margin-top: 32px;
    margin-right: 32px;
    border-radius: 0px 40px 40px 0px;
    padding-left: 32px;
    padding-right: 40px;
    padding-bottom: 24px;
  }
  @media screen and (${theme.media.desktop}) {
    /* margin-left: -17px; */
    width: 411px;
    margin-top: 24px;
    padding-top: 20px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 18px;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border-radius: 0px 40px 40px 0px;
    /* background-color: red; */
  }
`;

export const UserImg = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: 24px;
  width: 233px;
  height: 233px;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
  border-radius: 50%;
  object-fit: cover;
  @media screen and (${theme.media.desktop}) {
    margin-top: 0;
  }
`;

export const UserForm = styled(Form)`
  margin-top: 36px;
  @media screen and (${theme.media.tablet}) {
    margin-top: 40px;
    width: 379px;
  }
`;

export const UserInformationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0px;
  }
  /* background-color: red; */
`;
export const UserKeyLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-family: 'Manrope';
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: ${theme.colors.black};
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0px;
  }
  @media screen and (${theme.media.fromTablet}) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const UserValueInput = styled(Field)`
  background: ${theme.colors.bg};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  font-weight: 400;
  font-family: 'Manrope';
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: ${theme.colors.black};
  margin-left: 25px;
  padding: 4px 0 4px 18px;
  width: 150px;
  @media screen and (${theme.media.fromTablet}) {
    font-size: 18px;
    line-height: 25px;
    width: 200px;
  }
`;
export const UserInformationEdited = styled(BsCheckLg)`
  width: 12, 5px;
  height: 12, 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (${theme.media.fromTablet}) {
    width: 20px;
    height: 20px;
  }
`;

export const UserKey = styled.p`
  font-weight: ${theme.fontWeights.normal};
  font-family: 'Manrope';
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: ${theme.colors.black};
  @media screen and (${theme.media.fromTablet}) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const UserValue = styled.p`
  font-weight: ${theme.fontWeights.normal};
  font-family: 'Manrope';
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: ${theme.colors.black};
  @media screen and (${theme.media.fromTablet}) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const UserInformationEditWrapper = styled.button`
  position: relative;
  width: 20px;
  height: 20px;
  background-color: ${theme.colors.bg};
  border: 0;
  border-radius: 50%;
  color: ${prop =>
    prop.click === 'name'
      ? 'rgba(17, 17, 17, 0.6);'
      : prop.click === 'city'
      ? 'rgba(17, 17, 17, 0.6);'
      : prop.click === 'email'
      ? 'rgba(17, 17, 17, 0.6);'
      : prop.click === 'phone'
      ? 'rgba(17, 17, 17, 0.6);'
      : prop.click === 'birthday'
      ? 'rgba(17, 17, 17, 0.6);'
      : '#F59256'};
  margin-left: auto;
  &:hover,
  :focus {
    transform: scale(1.1);
    color: black;
  }
  @media screen and (${theme.media.fromTablet}) {
    width: 32px;
    height: 32px;
  }
`;

export const UserInformationEdit = styled(MdModeEdit)`
  width: 12, 5px;
  height: 12, 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (${theme.media.fromTablet}) {
    width: 20px;
    height: 20px;
  }
`;

export const LogOutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  border: 0;
  background-color: ${theme.colors.white};
  padding: 0;
  font-weight: ${theme.fontWeights.normal};
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: rgba(17, 17, 17, 0.6);
  &:hover,
  :focus {
    /* span {
      color: black;
    } */
    cursor: pointer;
    color: ${theme.colors.accent};
    stroke: ${theme.colors.accent};
  }
  @media screen and (max-width: 767px) {
    margin-top: 42px;
    margin-left: auto;
  }
  @media screen and (${theme.media.tablet}) {
    position: absolute;
    bottom: 24px;
    left: 32px;
  }
  @media screen and (${theme.media.desktop}) {
    margin-top: 24px;
  }
`;

export const LogOutIconWrapper = styled.span`
  display: flex;
  align-items: center;
  color: ${theme.colors.accent};
  padding-right: 8px;
`;

export const LogOutIcon = styled(HiOutlineLogout)`
  width: 18px;
  height: 18px;
`;

export const ButtonEdit = styled.button`
  display: block;
  margin-left: auto;
  margin-top: 12px;
  margin-right: 12px;
  border: none;
  font-weight: ${theme.fontWeights.normal};
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${theme.colors.black};
  background-color: ${theme.colors.white};
  &:hover,
  :focus {
    /* span {
      color: black;
    } */
    color: ${theme.colors.accent};
    stroke: ${theme.colors.accent};
    cursor: pointer;
  }
  @media screen and (${theme.media.tablet}) {
    margin-top: 8px;
  }
  @media screen and (${theme.media.desktop}) {
    position: absolute;
    right: 0;
    bottom: 3px;
    margin-top: 0;
    margin-right: 0;
  }
  label {
    display: flex;
    cursor: pointer;
  }
`;

export const CameraSVGWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.accent};
  padding-right: 8px;
`;

export const InputEditPhoto = styled.input`
  display: none;
`;

export const CameraSVG = styled(BsCameraFill)`
  stroke: ${theme.colors.accent};
  width: 20px;
  height: 20px;
`;

export const TextEditPhoto = styled.p`
  font-weight: ${theme.fontWeights.normal};
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${theme.colors.black};
  margin-left: 4px;
  & :hover,
  :focus {
    color: ${theme.colors.accent};
  }
  @media screen and (${theme.media.desktop}) {
    margin-left: 5px;
  }
`;

export const UserWrapper = styled.div`
  @media screen and (${theme.media.tablet}) {
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const AvatarWrapper = styled.div`
  @media screen and (${theme.media.desktop}) {
    position: relative;
  }
`;
