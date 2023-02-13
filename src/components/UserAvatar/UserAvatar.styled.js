// Photo,
//   PhotoEdit,
//   PhotoEditLab,
//   PhotoEditText,
//     PhotoContainer,
import styled from 'styled-components';

const AvatarImg = styled.img`
  height: 100%;
  margin: 0 auto;
  width: 233px;
  height: 233px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
`;

const AvatarEditLabel = styled.label`
  position: absolute;
  right: 0;
  bottom: -15px;
  display: flex;
  justify-content: center;
  & img {
    margin-right: 4px;
  }
  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    bottom: 0;
  }
`;

const AvatarEdit = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const AvatarEditLab = styled.label`
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
  /* position: absolute;
  right: 24px;
  flex-shrink: 1; */
  :hover {
    color: #f59256;
  }
  @media screen and (min-width: 768px) {
    margin-top: 10px;
    right: 40px;
  }
  @media screen and (min-width: 1280px) {
    /* position: absolute;
    bottom: 0px;
    right: -30%; */
    margin-top: 0px;
  }
`;
const AvatarEditText = styled.p`
  margin-bottom: 0px;
  margin-left: 5px;
`;
const AvatarContainer = styled.div`
  position: relative;
  @media screen and (min-width: 1280px) {
  }
`;

const styles = {
  AvatarImg,
  AvatarContainer,
  AvatarEdit,
  AvatarEditLab,
  AvatarEditLabel,
  AvatarEditText,
};
export default styles;
