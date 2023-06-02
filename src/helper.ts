import { nanoid } from 'nanoid';

const updateRulesList = (queryObject) => {
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
export default updateRulesList;
