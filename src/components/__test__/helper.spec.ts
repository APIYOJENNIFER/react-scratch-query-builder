import {
  changeInputPlaceHolder,
  deleteRule,
  filterObject,
  setDefaultValue,
  updateRulesList,
  validateInput,
} from '../../helper';
import { QueryObject } from '../../types';

describe('ValidateInput', () => {
  it('returns false for wrong input value and the correct errorMessage', () => {
    const queryObject: QueryObject = {
      id: '1',
      combinator: 'AND',
      rules: [
        {
          id: '1',
          field: 'Age',
          operator: '=',
          value: '12d',
          placeHolder: 'E.g 10',
          isValid: true,
          errorMessage: '',
          residentId: '2',
          nonResidentId: '3',
        },
      ],
    };
    let value = '';
    let idx = '';
    queryObject.rules.forEach((e) => {
      value = e.value as string;
      idx = e.id;
    });
    const returnedObject = validateInput(queryObject, value, idx);

    expect(returnedObject).toEqual({
      isValid: false,
      errorMessage: 'Please enter a valid age using digits only',
    });
  });
});

describe('DeleteRule', () => {
  it('deletes a rule', () => {
    const queryObject: QueryObject = {
      id: '1',
      combinator: 'AND',
      rules: [
        {
          id: '1',
          field: 'Level',
          operator: '=',
          value: 'Grade I',
          placeHolder: 'E.g Grade II',
          isValid: true,
          errorMessage: '',
          residentId: '4',
          nonResidentId: '5',
        },
      ],
    };
    const rule = deleteRule(queryObject, '1');
    expect(rule.length).toEqual(0);
  });
});

describe('UpdateRulesList', () => {
  it('adds a new rule to the rules list', () => {
    const queryObject: QueryObject = {
      id: '1',
      combinator: 'AND',
      rules: [],
    };
    const updatedRule = updateRulesList(queryObject);
    expect(updatedRule.length).toEqual(1);
  });
});

describe('ChangeInputPlaceHolder', () => {
  it('returns the right placeholder on field toggle', () => {
    const placeHolder = changeInputPlaceHolder('Last Name');
    expect(placeHolder).toEqual('E.g Doe');
  });
});

describe('FilterObject', () => {
  const queryObject: QueryObject = {
    id: '1',
    combinator: 'AND',
    rules: [
      {
        id: '1',
        field: 'Level',
        operator: '=',
        value: 'Grade I',
        placeHolder: 'E.g Grade II',
        isValid: true,
        errorMessage: '',
        residentId: '4',
        nonResidentId: '5',
      },
    ],
  };

  const filteredQueryObject = {
    id: '1',
    combinator: 'AND',
    rules: [
      {
        id: '1',
        field: 'Level',
        operator: '=',
        value: 'Grade I',
      },
    ],
  };
  it('return the specified key value pairs only', () => {
    const filteredObject = filterObject(queryObject);
    expect(filteredObject).toEqual(filteredQueryObject as QueryObject);
  });
});

describe('SetDefaultValue', () => {
  it('returns the right default value for a given field', () => {
    // Return false if field is Has Graduated
    const defHasGraduated = setDefaultValue('Has Graduated');
    expect(defHasGraduated).toEqual(false);

    // Return Resident if field is Housing
    const defHousing = setDefaultValue('Housing');
    expect(defHousing).toEqual('Resident');

    // Return Grade I if field is Level
    const defLevel = setDefaultValue('Level');
    expect(defLevel).toEqual('Grade I');

    // Return '' if any other field except the ones specified above
    const defaultValue = setDefaultValue('Age');
    expect(defaultValue).toEqual('');
  });
});
