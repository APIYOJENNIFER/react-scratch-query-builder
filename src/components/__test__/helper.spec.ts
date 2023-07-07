import {
  changeInputPlaceHolder,
  deleteRule,
  filterRule,
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
        {
          id: '2',
          field: 'Last Name',
          operator: '=',
          value: 'Doe2',
          placeHolder: 'E.g Doe',
          isValid: true,
          errorMessage: '',
          residentId: '4',
          nonResidentId: '5',
        },
        {
          id: '3',
          field: 'Enrollment Year',
          operator: '=',
          value: '1993e',
          placeHolder: 'E.g 2023',
          isValid: true,
          errorMessage: '',
          residentId: '6',
          nonResidentId: '7',
        },
      ],
    };

    const ageTestObject = validateInput(queryObject, '12d', '1');
    const nameTestObject = validateInput(queryObject, 'Doe2', '2');
    const enrollmentYearTestObject = validateInput(queryObject, '1993e', '3');

    expect(ageTestObject).toEqual({
      isValid: false,
      errorMessage: 'Please enter a valid age using digits only',
    });
    expect(nameTestObject).toEqual({
      isValid: false,
      errorMessage: 'Name should contain alphabetical characters only',
    });
    expect(enrollmentYearTestObject).toEqual({
      isValid: false,
      errorMessage: 'Please enter a valid year using digits only',
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
    deleteRule(queryObject, '1');
    expect(queryObject.rules.length).toEqual(0);
  });
});

describe('UpdateRulesList', () => {
  it('adds a new rule to the rules list', () => {
    const queryObject: QueryObject = {
      id: '1',
      combinator: 'AND',
      rules: [],
    };
    updateRulesList(queryObject);
    expect(queryObject.rules.length).toEqual(1);
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
        field: 'Age',
        operator: '=',
        value: '10',
        isValid: true,
        residentId: '2',
        nonResidentId: '3',
        errorMessage: 'Please enter a valid age using digits only',
        placeHolder: 'E.g 10',
      },
    ],
  };

  const requiredKeys = ['id', 'field', 'operator', 'value'];

  it('returns the specified key value pairs only i.e. (id, field, operator, value)', () => {
    const filteredObject = filterRule(queryObject, requiredKeys);

    // Check if "key" id is present in object
    const hasId = filteredObject.rules?.some((rule) =>
      Object.keys(rule).includes('id')
    );
    expect(hasId).toBe(true);

    // Check if "key" field is present in object
    const hasField = filteredObject.rules?.some((rule) =>
      Object.keys(rule).includes('field')
    );
    expect(hasField).toBe(true);

    // Check if "key" operator is present in object
    const hasOperator = filteredObject.rules?.some((rule) =>
      Object.keys(rule).includes('operator')
    );
    expect(hasOperator).toBe(true);

    // Check if "key" value is present in object
    const hasValue = filteredObject.rules?.some((rule) =>
      Object.keys(rule).includes('value')
    );
    expect(hasValue).toBe(true);

    // Check if "key" isValid is NOT present in object
    const hasIsValid = filteredObject.rules?.some((rule) =>
      Object.keys(rule).includes('isValid')
    );
    expect(hasIsValid).toBe(false);
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
