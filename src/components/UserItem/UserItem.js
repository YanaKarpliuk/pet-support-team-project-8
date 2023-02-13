import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDisabledFields, getLoadingUpdate } from '../../redux/user/selectors';
import { toggleIsDisablet } from '../../redux/user/slice';
import { ReactComponent as ApproveIcon } from '../../images/user/approveField.svg';
import { ReactComponent as EditIcon } from '../../images/user/editField.svg';

import styles from './UserItem.styled';

const { ItemInput, ItemName, Form, FormLabel, ApproveBtn } = styles;

const UserItem = ({
  data,
  errors,
  type = 'text',
  register,
  field,
  text,
  setValue,
  onSubmit,
  pattern: { pattern, patternMessage },
}) => {
  const [updated, setUpdated] = useState(false);

  const isLoadingUpdate = useSelector(getLoadingUpdate);
  const isDisabled = useSelector(getDisabledFields);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoadingUpdate) {
      setUpdated(false);
    }
  }, [isLoadingUpdate]);

  const checkDisabled = () => {
    if (!isDisabled) {
      dispatch(toggleIsDisablet());
      setUpdated(true);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormLabel htmlFor={data}>
        <ItemName>{text}:</ItemName>
        {updated ? (
          <>
            <ItemInput
              {...register(field, {
                pattern: {
                  value: pattern,
                  message: patternMessage,
                },
              })}
              type={type}
              name={field}
              id={data}
              placeholder={`Your ${field}`}
            />

            {errors[field] && <div>{errors[field]?.message}</div>}
          </>
        ) : (
          <p>{data === '' ? `Unknown` : data}</p>
        )}

        {updated ? (
          <ApproveBtn type="submit">
            <ApproveIcon fill="currentColor" width="20px" height="20px" />
          </ApproveBtn>
        ) : (
          <div
            onClick={() => {
              setValue(field, data);
              checkDisabled();
            }}
          >
            <EditIcon
              fill={isDisabled ? 'rgba(17, 17, 17, 0.6)' : 'currentColor'}
              width="20px"
              height="20px"
            />
          </div>
        )}
      </FormLabel>
    </Form>
  );
};

export default UserItem;
