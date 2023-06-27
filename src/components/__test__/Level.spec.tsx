import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Level from '../Level';

describe('Level', () => {
  it('selects the right option', () => {
    const handleChange = jest.fn();
    render(<Level onValueChange={handleChange} />);

    const option1 = screen.getByRole('option', {
      name: 'Grade I',
    }) as HTMLOptionElement;
    const option2 = screen.getByRole('option', {
      name: 'Grade IV',
    }) as HTMLOptionElement;

    option1.selected = true;

    expect(option1.selected).toBe(true);
    expect(option2.selected).toBe(false);
  });

  it('select element responds to clicks', () => {
    const handleChange = jest.fn();
    render(<Level onValueChange={handleChange} />);

    fireEvent.change(screen.getByTestId('level-select'), {
      target: { value: 'Grade III' },
    });
    expect(handleChange).toHaveBeenCalled();
  });
});
