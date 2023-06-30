import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Field from '../Field';

describe('Field Component', () => {
  it('selects the right option', () => {
    const handleChange = jest.fn();
    render(<Field onFieldChange={handleChange} />);

    const option1 = screen.getByRole('option', {
      name: 'First Name',
    }) as HTMLOptionElement;
    const option2 = screen.getByRole('option', {
      name: 'Age',
    }) as HTMLOptionElement;

    option1.selected = true;

    expect(option1.selected).toBe(true);
    expect(option2.selected).toBe(false);
  });

  it('select element responds to clicks', () => {
    const handleChange = jest.fn();
    render(<Field onFieldChange={handleChange} />);

    fireEvent.change(screen.getByTestId('field-select'), {
      target: { value: 'Level' },
    });
    expect(handleChange).toHaveBeenCalled();
  });
});
