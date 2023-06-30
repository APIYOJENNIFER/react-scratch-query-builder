import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GeneralInput from '../GeneralInput';

describe('GeneralInput', () => {
  it('input value changes correctly', () => {
    const handleChange = jest.fn();
    render(
      <GeneralInput
        onValueChange={handleChange}
        value="John"
        placeHolder="E.g John"
      />
    );

    const input = screen.getByTestId('general-input') as HTMLInputElement;
    fireEvent.change(input, {
      target: { value: 'Doe' },
    });
    expect(input.value).toBe('Doe');
  });

  it('contains the right placeholder value', () => {
    const handleChange = jest.fn();
    render(
      <GeneralInput
        onValueChange={handleChange}
        value="John"
        placeHolder="E.g John"
      />
    );

    const input = screen.getByTestId('general-input') as HTMLInputElement;
    expect(input.placeholder).toBe('E.g John');
  });
});
