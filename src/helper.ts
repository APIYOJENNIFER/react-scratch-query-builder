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
