const onNumberFieldChange = (e, setFieldValue) => {
  const value = e.target.value;
  if (!value) return setFieldValue('number', value);
  const numbers = value.replace(/[^\d]/g, '');
  const numLength = numbers.length;
  let newNumber = null;

  if (numLength <= 1) {
    newNumber = `+38(0${numbers}`;
    return setFieldValue('number', newNumber, false);
  }
  if (numLength <= 2) {
    return setFieldValue('number', '', false);
  }
  if (numLength <= 5) {
    newNumber = `+38(0${numbers.slice(3, 5)}`;
    return setFieldValue('number', newNumber, false);
  }
  if (numLength <= 8) {
    newNumber = `+38(0${numbers.slice(3, 5)}) ${numbers.slice(5, 8)}`;
    return setFieldValue('number', newNumber, false);
  }
  if (numLength <= 10) {
    newNumber = `+38(0${numbers.slice(3, 5)}) ${numbers.slice(5, 8)}-${numbers.slice(8, 10)}`;
    return setFieldValue('number', newNumber, false);
  }
  if (numLength <= 12 || numLength > 12) {
    newNumber = `+38(0${numbers.slice(3, 5)}) ${numbers.slice(5, 8)}-${numbers.slice(
      8,
      10
    )}-${numbers.slice(10, 12)}`;
    return setFieldValue('number', newNumber, false);
  }
};

export default onNumberFieldChange;
