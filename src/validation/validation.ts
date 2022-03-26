const sizeField = (value: string): boolean => {
  const inputVal = value === '' ? (value = 'caseEmpty') : value;
  const condition = /\b\w{3,}\b/;
  return condition.test(inputVal);
};

const numberOnly = (value: string): boolean => {
  const condition = /^[0-9]/;
  return condition.test(value);
};

export const validation = { sizeField, numberOnly };
