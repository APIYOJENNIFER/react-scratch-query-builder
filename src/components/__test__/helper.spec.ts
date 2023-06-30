import { validateInput } from '../../helper';
import { QueryObject } from '../../types';
import {} from '@testing-library/react';

describe('ValidateInput', () => {
  it('should return false for isValid and the correct errorMessage', () => {
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
