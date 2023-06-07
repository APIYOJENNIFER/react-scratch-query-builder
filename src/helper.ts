import { nanoid } from 'nanoid';

export interface QueryObject {
  id: string;
  combinator: string;
  rules: {
    id: string;
    field: string;
    operator: string;
    value: string;
    placeHolder: string;
    isValid: boolean;
    errorMessage: string;
  }[];
}

export const updateRulesList = (queryObject: QueryObject) => {
  const ruleObject = {
    id: nanoid(),
    field: 'First Name',
    operator: '=',
    value: '',
    placeHolder: 'E.g John',
    isValid: true,
    errorMessage: '',
  };
  queryObject.rules.push(ruleObject);

  const updatedRules = queryObject.rules;

  return {
    updatedRules,
  };
};

export const deleteRule = (queryObject: QueryObject, id: string) => {
  const newQueryObject = queryObject;
  const filteredRules = newQueryObject.rules.filter((rule) => rule.id !== id);

  newQueryObject.rules = filteredRules;

  return {
    filteredRules,
  };
};

export const changeInputPlaceHolder = (field: string) => {
  let placeHolder = '';
  if (field === 'First Name') {
    placeHolder = 'E.g John';
  }
  if (field === 'Last Name') {
    placeHolder = 'E.g Doe';
  }
  if (field === 'Age') {
    placeHolder = 'E.g 10';
  }
  if (field === 'Level') {
    placeHolder = 'E.g 1289';
  }
  if (field === 'Enrollment Year') {
    placeHolder = 'E.g 2021';
  }

  return placeHolder;
};

const checkIfInputIsValid = (inputString: string, reg: RegExp) => {
  const isValid = inputString.length === 0 || reg.test(inputString.trim());

  return isValid;
};

const validateName = (inputString) => {
  const reg = /^[\p{L} ]+$/u;

  return checkIfInputIsValid(inputString, reg);
};

const validateAge = (inputString) => {
  const reg = /^(?:[0-9]|[1-9][0-9]|1[0-2][0-9]|130)$/;

  return checkIfInputIsValid(inputString, reg);
};

const validateLevel = (inputString) => {
  const reg = /^[0-9]{1,6}$/;

  return checkIfInputIsValid(inputString, reg);
};

const validateEnrollmentYear = (inputString) => {
  const reg = /^(?!0)[0-9]{4}$/;

  return checkIfInputIsValid(inputString, reg);
};

export const validateInput = (
  queryObject: QueryObject,
  value: string,
  idx: string
) => {
  let isValid = true;
  let errorMessage = '';

  queryObject.rules.forEach((rule) => {
    if (rule.id === idx) {
      const currentRule = rule;
      if (
        currentRule.field === 'First Name' ||
        currentRule.field === 'Last Name'
      ) {
        isValid = validateName(value);
        errorMessage = 'Name should contain alphabetical characters only';
      }

      if (currentRule.field === 'Age') {
        isValid = validateAge(value);
        errorMessage = 'Please enter a valid age using digits only';
      }

      if (currentRule.field === 'Level') {
        isValid = validateLevel(value);
        errorMessage =
          'Level should contain digits only, not exceeding six digits';
      }

      if (currentRule.field === 'Enrollment Year') {
        isValid = validateEnrollmentYear(value);
        errorMessage = 'Please enter a valid year using digits only';
      }
    }
  });

  return { isValid, errorMessage };
};
