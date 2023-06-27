import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from '../Error';

describe('Error Component', () => {
  it('displays error message when isValid is false', () => {
    const errorMessage = 'This is an error message';
    render(<Error isValid={false} errorMessage={errorMessage} />);

    const errorElement = screen.getByTestId('error-message') as HTMLElement;

    expect(errorElement).toHaveTextContent(errorMessage);
  });

  it('displays the correct error message', () => {
    const errorMessage = 'This is an error message';
    render(<Error isValid={false} errorMessage={errorMessage} />);

    const errorElement = screen.getByTestId('error-message') as HTMLElement;
    expect(errorElement.innerHTML).toBe(errorMessage);
  });

  it('is visible if error', () => {
    const errorMessage = 'This is an error message';
    const isValid = false;
    render(<Error isValid={isValid} errorMessage={errorMessage} />);

    const errorElement = screen.getByTestId('error-message') as HTMLElement;

    expect(errorElement).toBeInTheDocument();
  });
});
