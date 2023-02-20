import { InputBirthDate } from './UserData.styled';

export const InputBirthday = ({ form }) => {
  const config = {
    dateFormat: 'd.m.Y',
    maxDate: new Date(),
  };
  return (
    <InputBirthDate
      value={form.values.birthday}
      options={config}
      onChange={(_, dateStr) => {
        form.values.birthday = dateStr;
      }}
    />
  );
};
