import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Operator from '../Operator';

describe('Operator Component', () => {
  it('selects the right option', () => {
    const handleChange = jest.fn();
    const field = 'Age';
    render(
      <Operator onOperatorChange={handleChange} operator="=" field={field} />
    );

    const option1 = screen.getByRole('option', {
      name: '=',
    }) as HTMLOptionElement;
    const option2 = screen.getByRole('option', {
      name: '>',
    }) as HTMLOptionElement;

    option1.selected = true;

    expect(option1.selected).toBe(true);
    expect(option2.selected).toBe(false);
  });

  it('select element responds to clicks', () => {
    const handleChange = jest.fn();
    const field = 'Housing';
    render(
      <Operator onOperatorChange={handleChange} operator="=" field={field} />
    );

    fireEvent.change(screen.getByTestId('operator-select'), {
      target: { value: '=' },
    });
    expect(handleChange).toHaveBeenCalled();
  });
});
