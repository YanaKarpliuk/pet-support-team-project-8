// EditInput,
//   InfoItem,
//   Form,
//   Userlabel,
import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  display: flex;
`;

const FormLabel = styled.label`
  display: flex;
`;

const ItemName = styled.div`
  font-family: 'Manrope';
  font-size: 12px;
  line-height: ${p => p.theme.lineHeights.normal};
  letter-spacing: ${p => p.theme.letterSpacings.normal};
  align-items: center;
  display: flex;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: ${p => p.theme.lineHeights.normal};
  }
`;

const ItemInput = styled.input`
  /* width: 100%; */
  max-width: 380px;
  margin-right: 10px;
  font-size: inherit;
  font-weight: 400;
  line-height: ${p => p.theme.lineHeights.normal};
  align-items: center;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  padding-left: 12px;
  &:focus {
    outline: 0;
  }
  @media screen and (min-width: 768px) {
  }
`;

const ApproveBtn = styled.button``;

const styles = {
  Form,
  FormLabel,
  ItemName,
  ItemInput,
  ApproveBtn,
};
export default styles;
