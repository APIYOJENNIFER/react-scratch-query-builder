import { nanoid } from 'nanoid';
import { QueryObject, Rule } from './types';

const updateRulesList = (queryObject: QueryObject): Rule[] => {
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

  return updatedRules;
};

const deleteRule = (queryObject: QueryObject, id: string): Rule[] => {
  const newQueryObject = queryObject;
  const filteredRules = newQueryObject.rules.filter((rule) => rule.id !== id);

  newQueryObject.rules = filteredRules;

  return filteredRules;
};

const changeInputPlaceHolder = (field: string): string => {
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

const checkIfInputIsValid = (inputString: string, reg: RegExp): boolean => {
  const isValid = inputString.length === 0 || reg.test(inputString.trim());

  return isValid;
};

const validateName = (inputString): boolean => {
  const reg = /^[\p{L} ]+$/u;

  return checkIfInputIsValid(inputString, reg);
};

const validateAge = (inputString): boolean => {
  const reg = /^(?:[0-9]|[1-9][0-9]|1[0-2][0-9]|130)$/;

  return checkIfInputIsValid(inputString, reg);
};

const validateLevel = (inputString): boolean => {
  const reg = /^[0-9]{1,6}$/;

  return checkIfInputIsValid(inputString, reg);
};

const validateEnrollmentYear = (inputString): boolean => {
  const reg = /^(?!0)[0-9]{4}$/;

  return checkIfInputIsValid(inputString, reg);
};

const validateInput = (
  queryObject: QueryObject,
  value: string,
  idx: string
): { isValid: boolean; errorMessage: string } => {
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

export { updateRulesList, deleteRule, changeInputPlaceHolder, validateInput };
