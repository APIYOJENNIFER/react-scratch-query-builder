import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Logical from '../Logical';

describe('Logical Component', () => {
  it('selects the right option', () => {
    const handleChange = jest.fn();
    render(<Logical onLogicalChange={handleChange} />);

    const option1 = screen.getByRole('option', {
      name: 'AND',
    }) as HTMLOptionElement;
    const option2 = screen.getByRole('option', {
      name: 'OR',
    }) as HTMLOptionElement;

    option2.selected = true;

    expect(option1.selected).toBe(false);
    expect(option2.selected).toBe(true);
  });

  it('select element responds to clicks', () => {
    const handleChange = jest.fn();
    render(<Logical onLogicalChange={handleChange} />);

    fireEvent.change(screen.getByTestId('logical-select'), {
      target: { value: 'AND' },
    });
    expect(handleChange).toHaveBeenCalled();
  });
});
