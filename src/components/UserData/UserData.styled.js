import styled from 'styled-components';
import { Form, Field } from 'formik';
import { HiOutlineLogout } from 'react-icons/hi';
import { MdModeEdit } from 'react-icons/md';
import { BsCheckLg, BsCameraFill } from 'react-icons/bs';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/material_orange.css';
import Flatpickr from 'react-flatpickr';
import theme from '../../theme';

export const UserDataWrap = styled.div`
  @media screen and (max-width: 767px) {
    /* background-color: red; */
    margin-top: 49px;

    padding: 18px 20px 0px 20px;
  }
  @media screen and (max-width: 1279px) and (min-width: 768px) {
  }
  @media screen and (${theme.media.desktop}) {
    width: 411px;
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

export const UserInfo = styled.div`
  margin-top: 18px;
  background-color: ${theme.colors.white};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 12px;
  padding-bottom: 20px;
  @media screen and (max-width: 767px) {
    /* background-color: red; */
    max-width: 450px;
    padding-top: 20px;
  }
  @media screen and (${theme.media.tablet}) {
    /* background-color: red; */
    max-width: 800px;
    position: relative;
    margin-top: 32px;
    margin-right: 32px;
    border-radius: 0px 40px 40px 0px;
    padding-left: 32px;
    padding-right: 40px;
    padding-bottom: 24px;
  }
  @media screen and (${theme.media.desktop}) {
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

export const UserAvatarImg = styled.img`
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

export const UserAfterUpdateInfo = styled.div`
  display: flex;
  margin-bottom: 8px;
  align-items: center;
  height: 24px;
  &:last-child {
    margin-bottom: 0px;
  }
  @media screen and (${theme.media.fromTablet}) {
    margin-bottom: 11px;
    height: 32px;
  }
  /* background-color: red; */
`;
export const UserKeyLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: black;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0px;
  }
  @media screen and (${theme.media.fromTablet}) {
    margin-bottom: 11px;
    font-size: 18px;
    line-height: 25px;
    height: 32px;
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
  margin-left: 8px;
  padding: 4px 0 4px 18px;
  width: 150px;
  @media screen and (${theme.media.fromTablet}) {
    margin-left: 24px;
    padding: 4px 0 4px 12px;
    font-size: 18px;
    line-height: 25px;
    width: 200px;
  }
  @media screen and (${theme.media.desktop}) {
    margin-left: 12px;
  }
`;

export const InputBirthDate = styled(Flatpickr)`
  background: ${theme.colors.bg};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: black;
  margin-left: 8px;
  padding: 4px 0 4px 18px;
  width: 159px;
  @media screen and (${theme.media.fromTablet}) {
    margin-left: 24px;
    padding: 4px 0 4px 12px;
    font-size: 18px;
    line-height: 25px;
    width: 216px;
  }
  @media screen and (${theme.media.desktop}) {
    margin-left: 12px;
  }
`;

export const UserFieldToUpdate = styled(BsCheckLg)`
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
  width: 58px;
  @media screen and (${theme.media.fromTablet}) {
    width: 85px;
    font-size: 18px;
    line-height: 25px;
  }
`;

export const UserKeyToUpdate = styled.p`
  font-weight: ${theme.fontWeights.normal};
  font-family: 'Manrope';
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: ${theme.colors.black};
  width: 58px;
  @media screen and (${theme.media.fromTablet}) {
    font-size: 18px;
    line-height: 25px;
    width: 85px;
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
  /* background-color: red; */
  margin-left: 26px;
  @media screen and (${theme.media.fromTablet}) {
    font-size: 18px;
    line-height: 25px;
    margin-left: 36px;
  }
  @media screen and (${theme.media.desktop}) {
    margin-left: 24px;
  }
`;

export const UserFieldEditWrap = styled.button`
  position: relative;
  width: 20px;
  height: 20px;
  background-color: ${theme.colors.bg};
  /* background-color: green; */
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
    color: black;
  }
  @media screen and (${theme.media.fromTablet}) {
    width: 32px;
    height: 32px;
  }
`;

export const UserFieldEdit = styled(MdModeEdit)`
  width: 12, 5px;
  height: 12, 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  /* background-color: green; */

  transform: translate(-50%, -50%);
  &:hover,
  :focus {
    cursor: pointer;
  }
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
    margin-top: 44px;
  }
`;

export const LogOutIconWrap = styled.span`
  display: flex;
  align-items: center;
  color: ${theme.colors.accent};
  padding-right: 8px;
`;

export const LogOutIcon = styled(HiOutlineLogout)`
  width: 18px;
  height: 18px;
`;

export const UserAvatarButtonUpdate = styled.button`
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

export const UserAvatarUpdateWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.accent};
  padding-right: 8px;
`;

export const UserAvatarUpdateInput = styled.input`
  display: none;
`;

export const UserAvatarUpdateIcon = styled(BsCameraFill)`
  stroke: ${theme.colors.accent};
  width: 20px;
  height: 20px;
`;

export const UserWrapper = styled.div`
  @media screen and (${theme.media.tablet}) {
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const UserAvatarWrap = styled.div`
  @media screen and (${theme.media.desktop}) {
    position: relative;
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  top: -15px;
  left: 80px;
  /* border: 1px solid; */
  padding: 5px;
  font-size: 6px;
  font-style: 700;
  line-height: 1.4;
  letter-spacing: 0.03em;
  color: #e53e3e;
  @media screen and (${theme.media.fromTablet}) {
    top: -20px;
    left: 110px;
    font-size: 11px;
  }
`;
