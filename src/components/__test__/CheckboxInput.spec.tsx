import React = require('react');
import { render, screen, fireEvent } from '@testing-library/react';
import CheckboxInput from '../CheckboxInput';

describe('CheckboxInput', () => {
  it('is rendered correctly with default props', () => {
    const handleValueChange = jest.fn();
    const value = false;

    render(<CheckboxInput onValueChange={handleValueChange} value={value} />);
    expect(screen.getByTestId('checkbox-input')).toBeInTheDocument();
  });

  it('is unchecked by default', () => {
    const handleValueChange = jest.fn();
    const value = false;

    render(<CheckboxInput onValueChange={handleValueChange} value={value} />);
    expect(screen.getByTestId('checkbox-input')).not.toBeChecked();
  });

  it('can be checked', () => {
    const handleValueChange = jest.fn();
    const value = true;

    render(<CheckboxInput onValueChange={handleValueChange} value={value} />);
    fireEvent.click(screen.getByTestId('checkbox-input'));
    expect(handleValueChange).toHaveBeenCalled();
    expect(screen.getByTestId('checkbox-input')).toBeChecked();
  });

  it('can be unchecked', () => {
    const handleValueChange = jest.fn();
    const value = false;

    render(<CheckboxInput onValueChange={handleValueChange} value={value} />);
    fireEvent.click(screen.getByTestId('checkbox-input'));
    expect(handleValueChange).toHaveBeenCalled();
    expect(screen.getByTestId('checkbox-input')).not.toBeChecked();
  });
});
