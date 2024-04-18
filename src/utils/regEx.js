export const checkUserName = value => {
  const punctuationRegex = /[!"#$%&'()*+,\-.\/:;<=>?@[\\\]^`{|}~]/;
  return !punctuationRegex.test(value);
};

export const checkEmail = value => {
  const noroffEmailRegex = /^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/;
  return noroffEmailRegex.test(value);
};
