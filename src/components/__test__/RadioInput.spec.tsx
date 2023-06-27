import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioInput from '../RadioInput';

describe('RadioInput', () => {
  it('renders correctly with the right default value', () => {
    const handleChange = jest.fn();
    render(
      <RadioInput
        onValueChange={handleChange}
        id="test"
        residentId="resident-id"
        nonResidentId="non-resident-id"
      />
    );
    const radioElement = screen.getByTestId('resident');
    expect(radioElement).toBeChecked();
  });

  it('has the right label', () => {
    const handleChange = jest.fn();
    render(
      <RadioInput
        onValueChange={handleChange}
        id="test"
        residentId="resident-id"
        nonResidentId="non-resident-id"
      />
    );
    const label = screen.getByTestId('resident-label');
    expect(label).toHaveTextContent('Resident');
  });

  it('responds to clicks', () => {
    const handleChange = jest.fn();
    render(
      <RadioInput
        onValueChange={handleChange}
        id="test"
        residentId="resident-id"
        nonResidentId="non-resident-id"
      />
    );
    const inputElement = screen.getByTestId('non-resident');
    fireEvent.click(inputElement);
    expect(handleChange).toHaveBeenCalled();
  });

  it('selects an option and de-selects the other option correctly', () => {
    const handleChange = jest.fn();
    render(
      <RadioInput
        onValueChange={handleChange}
        id="test"
        residentId="resident-id"
        nonResidentId="non-resident-id"
      />
    );
    const resident = screen.getByTestId('resident');
    const nonResident = screen.getByTestId('non-resident');
    expect(nonResident).not.toBeChecked();
    fireEvent.click(nonResident);
    expect(nonResident).toBeChecked();
    expect(resident).not.toBeChecked();
  });
});
